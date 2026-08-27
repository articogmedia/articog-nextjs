#!/bin/bash
# Run this from inside your articog-nextjs project root:
#   bash compare-routes.sh
#
# It compares your Next.js app/ routes against the full Lovable route list
# and prints which pages are MISSING.

LOVABLE_ROUTES="all-routes-checklist.txt"  # put this file in the same folder

if [ ! -f "$LOVABLE_ROUTES" ]; then
  echo "Missing $LOVABLE_ROUTES - download it from the chat and place it here."
  exit 1
fi

echo "Building list of your existing Next.js routes..."
find app -name "page.tsx" \
  | sed -E 's|^app||; s|/page\.tsx$||; s|^$|/|' \
  | sort -u > my-nextjs-routes.txt

echo ""
echo "===== MISSING PAGES (in Lovable but not yet in Next.js) ====="
grep -v " (homepage)" "$LOVABLE_ROUTES" | sed 's/ (homepage)//' > lovable-clean.txt
comm -23 <(sort -u lovable-clean.txt) <(sort -u my-nextjs-routes.txt)

echo ""
echo "Done. Anything printed above still needs a page.tsx created."
