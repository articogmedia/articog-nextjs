import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Next.js generated files
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",

    // Old backup folders — not part of the active website
    "app-backup-before-bulk-conversion/**",
    "app-before-bulk-content-replacement/**",
    "app-before-content-fix/**",
  ]),

  // Project-specific ESLint overrides
  {
    rules: {
      // Allow normal apostrophes and quotation marks in JSX text
      "react/no-unescaped-entities": "off",

      // Allow existing React effects that synchronously initialize state
      "react-hooks/set-state-in-effect": "off",

      // Allow existing any types
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
]);

export default eslintConfig;