import eslintPluginTs from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import importPlugin from "eslint-plugin-import";
import unusedImports from "eslint-plugin-unused-imports";
import prettier from "eslint-config-prettier";

/**
 * Creates base ESLint configuration for kbox projects
 * Supports TypeScript with import ordering, unused imports removal, and Prettier integration
 *
 * @param {Object} options - Configuration options
 * @param {string} options.tsconfigPath - Path to tsconfig.json (default: "./tsconfig.json")
 * @param {string} options.rootDir - Root directory for TypeScript config (default: import.meta.dirname)
 * @param {Object} options.aliasMap - Map of path aliases (e.g., { "@/*": "./src/*" })
 * @param {string[]} options.ignorePatterns - Additional patterns to ignore
 * @returns {Array} ESLint flat config array
 */
function createBaseConfig(options = {}) {
  const {
    tsconfigPath = "./tsconfig.json",
    rootDir = import.meta.dirname,
    aliasMap = {},
    ignorePatterns = [],
  } = options;

  return [
    {
      ignores: [
        "dist/**",
        "node_modules/**",
        "*.js",
        "!eslint.config.js",
        ...ignorePatterns,
      ],
    },
    {
      files: ["**/*.ts", "**/*.tsx"],
      languageOptions: {
        parser: tsParser,
        parserOptions: {
          project: tsconfigPath,
          tsconfigRootDir: rootDir,
          ecmaVersion: 2022,
          sourceType: "module",
        },
      },
      plugins: {
        "@typescript-eslint": eslintPluginTs,
        import: importPlugin,
        "unused-imports": unusedImports,
      },
      rules: {
        "no-console": "warn",
        "unused-imports/no-unused-imports": "error",
        "import/order": [
          "warn",
          {
            groups: [
              "builtin",
              "external",
              "internal",
              "parent",
              "sibling",
              "index",
            ],
            pathGroups: [
              {
                pattern: "@/**",
                group: "internal",
                position: "before",
              },
            ],
            pathGroupsExcludedImportTypes: ["builtin"],
            alphabetize: { order: "asc", caseInsensitive: true },
            "newlines-between": "always",
          },
        ],
        "@typescript-eslint/no-unused-vars": [
          "warn",
          {
            argsIgnorePattern: "^_",
            varsIgnorePattern: "^_",
          },
        ],
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "import/no-unresolved": "error",
        "import/extensions": [
          "error",
          "ignorePackages",
          {
            ts: "never",
            tsx: "never",
            js: "never",
            jsx: "never",
          },
        ],
      },
      settings: {
        "import/resolver": {
          ...(Object.keys(aliasMap).length > 0 && {
            alias: {
              map: Object.entries(aliasMap),
              extensions: [".ts", ".js"],
            },
          }),
          typescript: {
            alwaysTryTypes: true,
            project: tsconfigPath,
          },
          node: {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
          },
        },
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
      },
    },
    prettier,
  ];
}

// Pre-configured configs for plugin-style usage
const configs = {
  recommended: createBaseConfig(),
};

// Named exports
export { createBaseConfig, configs };

// Default export (backward compatible)
export default createBaseConfig;
