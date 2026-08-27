from pathlib import Path
import re

NEXT_APP = Path(r"C:\Users\kyath\articog-nextjs\app")

ORIGINAL_ROUTES = Path(
    r"C:\Users\kyath\Downloads\faithful-rebuild-hero-main"
    r"\faithful-rebuild-hero-main\src\routes"
)

created = []
converted = []
skipped = []
missing = []


def remove_route_config(text):
    """
    Removes the TanStack createFileRoute(...) configuration.
    """

    match = re.search(
        r'export\s+const\s+Route\s*=\s*createFileRoute\s*\(',
        text
    )

    if not match:
        return text, None

    start = match.start()

    open_brace = text.find("{", match.end())

    if open_brace == -1:
        return text, None

    component_match = re.search(
        r'\bcomponent\s*:\s*([A-Za-z0-9_]+)\s*,',
        text[open_brace:]
    )

    component_name = None

    if component_match:
        component_name = component_match.group(1)

    depth = 0
    end = None

    for i in range(open_brace, len(text)):

        if text[i] == "{":
            depth += 1

        elif text[i] == "}":
            depth -= 1

            if depth == 0:

                j = i + 1

                while j < len(text) and text[j].isspace():
                    j += 1

                if text[j:j + 2] == ");":
                    end = j + 2
                    break

    if end is None:
        return text, None

    text = text[:start] + text[end:]

    return text, component_name


def clean_imports(text):

    text = re.sub(
        r'import\s*\{\s*createFileRoute\s*\}\s*from\s*["\']@tanstack/react-router["\'];?\s*\n?',
        "",
        text
    )

    text = re.sub(
        r'import\s*\{\s*createFileRoute\s*,\s*Link\s*\}\s*from\s*["\']@tanstack/react-router["\'];?\s*\n?',
        'import { Link } from "@/components/ui/Link";\n',
        text
    )

    text = re.sub(
        r'import\s*\{\s*Link\s*,\s*createFileRoute\s*\}\s*from\s*["\']@tanstack/react-router["\'];?\s*\n?',
        'import { Link } from "@/components/ui/Link";\n',
        text
    )

    return text


def convert_component(text, component_name):

    if not component_name:

        match = re.search(
            r'\bfunction\s+([A-Za-z0-9_]+Page)\s*\(',
            text
        )

        if match:
            component_name = match.group(1)

    if component_name:

        pattern = rf'\bfunction\s+{re.escape(component_name)}\s*\('

        text = re.sub(
            pattern,
            f'export default function {component_name}(',
            text,
            count=1
        )

    return text


def convert_source(source):

    text = source.read_text(encoding="utf-8")

    # Remove TanStack route definition
    text, component_name = remove_route_config(text)

    # Remove TanStack imports
    text = clean_imports(text)

    # Convert component to Next.js default export
    text = convert_component(text, component_name)

    # Clean excessive blank lines
    text = re.sub(r'\n{3,}', '\n\n', text)

    return text.rstrip() + "\n"


# ============================================================
# STEP 1
# CONVERT EXISTING PLACEHOLDER PAGE.TSX FILES
# ============================================================

for target in NEXT_APP.rglob("page.tsx"):

    text = target.read_text(encoding="utf-8")

    if not re.search(
        r'export\s+default\s+function\s+Page\s*\(\s*\)',
        text
    ):
        continue

    route = target.parent.relative_to(NEXT_APP)

    source = ORIGINAL_ROUTES / route / "index.tsx"

    if not source.exists():
        source = ORIGINAL_ROUTES / f"{route}.tsx"

    if not source.exists():
        missing.append(str(route))
        continue

    target.write_text(
        convert_source(source),
        encoding="utf-8"
    )

    converted.append(str(route))


# ============================================================
# STEP 2
# CREATE MISSING ROUTES FROM ORIGINAL index.tsx FILES
# ============================================================

for source in ORIGINAL_ROUTES.rglob("index.tsx"):

    route = source.parent.relative_to(ORIGINAL_ROUTES)

    # Ignore special files
    if str(route) in ["__root", "404", "500"]:
        continue

    target = NEXT_APP / route / "page.tsx"

    if target.exists():
        skipped.append(str(route))
        continue

    target.parent.mkdir(
        parents=True,
        exist_ok=True
    )

    target.write_text(
        convert_source(source),
        encoding="utf-8"
    )

    created.append(str(route))


# ============================================================
# STEP 3
# CREATE MISSING ROUTES FROM ORIGINAL .tsx FILES
# ============================================================

for source in ORIGINAL_ROUTES.rglob("*.tsx"):

    if source.name in [
        "index.tsx",
        "__root.tsx",
        "404.tsx",
        "500.tsx",
        "route.tsx",
    ]:
        continue

    relative = source.relative_to(ORIGINAL_ROUTES)

    route = relative.with_suffix("")

    target = NEXT_APP / route / "page.tsx"

    if target.exists():
        continue

    target.parent.mkdir(
        parents=True,
        exist_ok=True
    )

    target.write_text(
        convert_source(source),
        encoding="utf-8"
    )

    created.append(str(route))


# ============================================================
# RESULTS
# ============================================================

print()
print("=" * 70)
print("BULK NEXT.JS CONVERSION")
print("=" * 70)
print()

print(f"Existing placeholders converted: {len(converted)}")

for route in sorted(set(converted)):
    print(f"  ✓ {route}")

print()

print(f"New pages created: {len(set(created))}")

for route in sorted(set(created)):
    print(f"  + {route}")

print()

print(f"Missing original source: {len(set(missing))}")

for route in sorted(set(missing)):
    print(f"  ! {route}")

print()

print(f"Existing pages skipped: {len(set(skipped))}")

print()

print("Conversion finished.")
print("=" * 70)