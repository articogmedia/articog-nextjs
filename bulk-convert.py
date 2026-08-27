from pathlib import Path
import re

NEXT_APP = Path(r"C:\Users\kyath\articog-nextjs\app")

ORIGINAL_ROUTES = Path(
    r"C:\Users\kyath\Downloads\faithful-rebuild-hero-main"
    r"\faithful-rebuild-hero-main\src\routes"
)

converted = []
created = []
missing = []


def remove_route_config(text):
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

    # Remove TanStack route configuration
    text, component_name = remove_route_config(text)

    # Remove TanStack imports
    text = clean_imports(text)

    # Convert component to Next.js default export
    text = convert_component(text, component_name)

    # Convert TanStack Link imports if needed
    text = re.sub(
        r'import\s*\{\s*Link\s*\}\s*from\s*["\']@tanstack/react-router["\'];?',
        'import { Link } from "@/components/ui/Link";',
        text
    )

    # Clean excessive blank lines
    text = re.sub(r'\n{3,}', '\n\n', text)

    return text.rstrip() + "\n"


def get_original_source(route):
    """
    Find the matching Lovable source file for a Next.js route.
    """

    source = ORIGINAL_ROUTES / route / "index.tsx"

    if source.exists():
        return source

    source = ORIGINAL_ROUTES / f"{route}.tsx"

    if source.exists():
        return source

    return None


# ============================================================
# ROUTES TO PROTECT
# ============================================================

PROTECTED_FILES = {
    "components",
    "app/layout.tsx",
}


def is_protected(target):

    target_str = str(target).replace("\\", "/")

    if target.name in [
        "layout.tsx",
        "not-found.tsx",
        "error.tsx",
        "loading.tsx",
    ]:
        return True

    return False


# ============================================================
# BULK REPLACE EXISTING NEXT.JS PAGES
# ============================================================

for target in NEXT_APP.rglob("page.tsx"):

    if is_protected(target):
        continue

    route = target.parent.relative_to(NEXT_APP)

    source = get_original_source(route)

    if source is None:
        missing.append(str(route))
        continue

    try:
        converted_source = convert_source(source)

        target.write_text(
            converted_source,
            encoding="utf-8"
        )

        converted.append(str(route))

    except Exception as e:
        print(f"ERROR converting {route}: {e}")


# ============================================================
# CREATE ANY MISSING ROUTES
# ============================================================

for source in ORIGINAL_ROUTES.rglob("index.tsx"):

    route = source.parent.relative_to(ORIGINAL_ROUTES)

    if str(route) in [
        "__root",
        "404",
        "500",
    ]:
        continue

    target = NEXT_APP / route / "page.tsx"

    if target.exists():
        continue

    target.parent.mkdir(
        parents=True,
        exist_ok=True
    )

    try:
        target.write_text(
            convert_source(source),
            encoding="utf-8"
        )

        created.append(str(route))

    except Exception as e:
        print(f"ERROR creating {route}: {e}")


# ============================================================
# RESULTS
# ============================================================

print()
print("=" * 70)
print("BULK CONTENT REPLACEMENT")
print("=" * 70)
print()

print(f"Existing pages replaced : {len(converted)}")
print(f"New pages created       : {len(created)}")
print(f"Missing original       : {len(missing)}")

print()

if missing:
    print("MISSING ROUTES")
    print("-" * 70)

    for route in missing:
        print(route)

print()
print("=" * 70)
print("DONE")
print("=" * 70)