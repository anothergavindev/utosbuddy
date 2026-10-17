import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  prettier,
  {
    rules: {
      // Features must not reach into each other's internals; share via src/components or src/lib.
      "no-restricted-imports": [
        "warn",
        { patterns: [{ group: ["@/features/*/*"], message: "Import from the feature's index.ts instead." }] },
      ],
    },
  },
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);
