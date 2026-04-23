import js from "@eslint/js";
import astro from "eslint-plugin-astro";

export default [
  {
    ignores: ["dist/", ".astro/", "node_modules/"]
  },
  js.configs.recommended,
  ...astro.configs["flat/recommended"],
  {
    files: ["**/*.{js,mjs,cjs}"],
    rules: {
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
    }
  }
];
