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

  ]),

  // Project-specific ESLint overrides
  {
    rules: {
      // Allow normal apostrophes and quotation marks in JSX text
      "react/no-unescaped-entities": "off",

    },
  },
]);

export default eslintConfig;