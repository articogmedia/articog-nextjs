import re
from pathlib import Path

OLD = Path("/c/Users/kyath/Downloads/faithful-rebuild-hero-main/faithful-rebuild-hero-main/src/routes")
NEW = Path("/c/Users/kyath/articog-nextjs/app")

def route_to_page(old_file):
    rel = old_file.relative_to(OLD)

    # Convert old route structure to Next.js app structure
    if rel.name == "index.tsx":
        target = NEW / rel.parent / "page.tsx"
    elif rel.name.endswith(".tsx"):
        target = NEW / rel.parent / "page.tsx"

        # Special flat route files
        if rel.parent == Path("."):
            target = NEW / rel.stem / "page.tsx"

        # Nested flat route files such as solutions/performance-marketing.tsx
        elif rel.parent.name in ["solutions", "trust", "services", "work", "why-articog"]:
            target = NEW / rel.parent / rel.stem / "page.tsx"
    else:
        return None

    return target

def extract_metadata(text):
    title_match = re.search(
        r'\{\s*title:\s*"([^"]+)"\s*\}',
        text
    )

    desc_match = re.search(
        r'name:\s*"description",\s*content:\s*"([^"]*)"',
        text,
        re.S
    )

    robots_match = re.search(
        r'name:\s*"robots",\s*content:\s*"([^"]+)"',
        text
    )

    if not title_match and not desc_match and not robots_match:
        return None

    title = title_match.group(1) if title_match else None
    description = desc_match.group(1) if desc_match else None
    robots = robots_match.group(1) if robots_match else None

    return title, description, robots

def metadata_block(metadata):
    title, description, robots = metadata

    lines = [
        'import type { Metadata } from "next";',
        '',
        'export const metadata: Metadata = {'
    ]

    if title:
        lines.append(f'  title: {title!r},')

    if description:
        lines.append(f'  description: {description!r},')

    if robots == "noindex, nofollow":
        lines.extend([
            '  robots: {',
            '    index: false,',
            '    follow: false,',
            '  },'
        ])

    lines.append('};')
    return "\n".join(lines) + "\n\n"

updated = 0
skipped = 0
missing = 0

for old_file in OLD.rglob("*.tsx"):
    text = old_file.read_text(encoding="utf-8")

    metadata = extract_metadata(text)

    if not metadata:
        continue

    target = route_to_page(old_file)

    if not target or not target.exists():
        missing += 1
        print(f"[MISSING] {old_file} -> {target}")
        continue

    new_text = target.read_text(encoding="utf-8")

    # Don't add metadata twice
    if "export const metadata" in new_text:
        skipped += 1
        print(f"[SKIP]    {target} (metadata already exists)")
        continue

    block = metadata_block(metadata)

    # Add metadata after "use client" if present,
    # otherwise at the beginning.
    if new_text.startswith('"use client";'):
        parts = new_text.split("\n", 1)
        new_text = parts[0] + "\n\n" + block + parts[1]
    elif new_text.startswith("'use client';"):
        parts = new_text.split("\n", 1)
        new_text = parts[0] + "\n\n" + block + parts[1]
    else:
        new_text = block + new_text

    target.write_text(new_text, encoding="utf-8")

    updated += 1
    print(f"[UPDATED] {target}")
    print(f"          title: {metadata[0]}")
    print(f"          description: {metadata[1]}")

print()
print("===================================")
print("SEO MIGRATION COMPLETE")
print("===================================")
print(f"Updated : {updated}")
print(f"Skipped : {skipped}")
print(f"Missing : {missing}")
print("===================================")
