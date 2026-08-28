import re
from pathlib import Path

OLD = Path(r"C:/Users/kyath/Downloads/faithful-rebuild-hero-main/faithful-rebuild-hero-main/src/routes")
NEW = Path(r"C:/Users/kyath/articog-nextjs/app")

def target_for(old_file):
    rel = old_file.relative_to(OLD)

    if rel.name in ["__root.tsx", "404.tsx", "500.tsx"]:
        return None

    if rel.name == "index.tsx":
        route = rel.parent
    else:
        route = rel.parent / rel.stem

    return NEW / route / "page.tsx"

def extract_metadata(text):
    title_match = re.search(
        r'\{\s*title:\s*"([^"]+)"\s*\}',
        text
    )

    desc_match = re.search(
        r'name:\s*"description",\s*content:\s*"([^"]*)"',
        text
    )

    robots_match = re.search(
        r'name:\s*"robots",\s*content:\s*"([^"]*)"',
        text
    )

    if not title_match and not desc_match and not robots_match:
        return None

    return {
        "title": title_match.group(1) if title_match else None,
        "description": desc_match.group(1) if desc_match else None,
        "robots": robots_match.group(1) if robots_match else None,
    }

updated = 0
skipped = 0
missing = 0

for old_file in OLD.rglob("*.tsx"):
    old_text = old_file.read_text(encoding="utf-8")
    metadata = extract_metadata(old_text)

    if not metadata:
        continue

    target = target_for(old_file)

    if target is None:
        continue

    if not target.exists():
        print("[MISSING]", target)
        missing += 1
        continue

    new_text = target.read_text(encoding="utf-8")

    if "export const metadata" in new_text or "generateMetadata" in new_text:
        print("[SKIP]", target)
        skipped += 1
        continue

    lines = ['import type { Metadata } from "next";', ""]

    lines.append("export const metadata: Metadata = {")

    if metadata["title"]:
        title = metadata["title"].replace('"', '\\"')
        lines.append(f'  title: "{title}",')

    if metadata["description"]:
        description = metadata["description"].replace('"', '\\"')
        lines.append(f'  description: "{description}",')

    if metadata["robots"] == "noindex, nofollow":
        lines.append("  robots: {")
        lines.append("    index: false,")
        lines.append("    follow: false,")
        lines.append("  },")

    lines.append("};")
    lines.append("")

    target.write_text("\n".join(lines) + new_text, encoding="utf-8")

    print("[UPDATED]", target)
    updated += 1

print("")
print("========== SEO MIGRATION ==========")
print("Updated :", updated)
print("Skipped :", skipped)
print("Missing :", missing)
print("===================================")
