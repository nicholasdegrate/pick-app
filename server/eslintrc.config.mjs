import { fixupConfigRules, fixupPluginRules } from "@eslint/compat";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import { defineConfig, globalIgnores } from "eslint/config";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});
const project = path.join(__dirname, "tsconfig.json");

export default defineConfig([
  globalIgnores([
    "**/build.js",
    "**/node_modules/",
    "**/dist/",
    "**/build/",
    "**/tmp/",
    "**/temp/",
    "**/*.log",
    "**/coverage/",
    "**/.vscode/",
    "**/.idea/",
    "**/*.sublime-workspace",
    "**/*.sublime-project",
    "**/.env",
    "**/.env.local",
    "**/.env.*.local",
    "**/test/",
    "**/tests/",
    "**/Dockerfile",
    "**/docker-compose.yml",
    "**/.git/",
    "**/build.js",
    ".eslintrc.js",
    "eslint.config.*",
    ".prettierrc.js",
  ]),
  {
    extends: fixupConfigRules(
      compat.extends(
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier",
        "plugin:import/recommended",
        "plugin:import/typescript"
      )
    ),

    plugins: {
      "@typescript-eslint": fixupPluginRules(typescriptEslint),
    },
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 5,
      sourceType: "script",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        project: project,
      },
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"],
      },
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: [project],
        },
      },
    },

    rules: {
      "import/order": [
        "error",
        {
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },

          groups: ["builtin", "external", "parent", "sibling", "index"],
          "newlines-between": "always",
        },
      ],
      "@typescript-eslint/no-empty-object-type": "warn",
      "import/extensions": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "import/prefer-default-export": "off",
      "no-redeclare": "off",
      "@typescript-eslint/no-redeclare": ["error"],
      "no-empty-function": "off",
      "@typescript-eslint/no-empty-function": ["error"],
      "no-shadow": "off",
      "@typescript-eslint/no-shadow": ["error"],
      "@typescript-eslint/no-use-before-define": [
        "error",
        {
          functions: false,
        },
      ],
      "import/no-duplicates": "error",
      "no-unused-expressions": "off",
      "@typescript-eslint/no-unused-expressions": ["error"],
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "after-used",
          ignoreRestSiblings: true,
          argsIgnorePattern: "^_",
        },
      ],
      "no-invalid-this": "off",
      "@typescript-eslint/no-invalid-this": ["error"],
      "init-declarations": "off",
      "@typescript-eslint/init-declarations": "off",
      "no-console": [
        "error",
        {
          allow: ["group", "groupEnd", "debug", "info", "warn", "error"],
        },
      ],
      "import/no-extraneous-dependencies": "off",
    },
  },
]);
