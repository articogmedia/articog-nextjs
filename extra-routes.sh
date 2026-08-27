#!/bin/bash
# Run this from inside your articog-nextjs project root:
#   bash extra-routes.sh
#
# Finds pages that exist in your Next.js app/ folder but are NOT
# in the Lovable route list (duplicates, typos, or extra pages).

LOVABLE_ROUTES="all-routes-checklist.txt"

find app -name "page.tsx" \
  | sed -E 's|^app||; s|/page\.tsx$||; s|^$|/|' \
  | sort -u > my-nextjs-routes.txt

grep -v " (homepage)" "$LOVABLE_ROUTES" | sed 's/ (homepage)//' > lovable-clean2.txt
echo "/" >> lovable-clean2.txt

echo "===== EXTRA PAGES (in Next.js but not in Lovable list) ====="
comm -13 <(sort -u lovable-clean2.txt) <(sort -u my-nextjs-routes.txt)
echo ""
echo "Done."
