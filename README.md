# kbox-eslint-rules

Shareable ESLint configuration for kbox projects. Includes TypeScript support, import ordering, unused imports removal, and Prettier integration.

## Installation

```bash
npm install kbox-eslint-rules --save-dev
```

### Peer Dependencies

The following packages must be installed in your project:

```bash
npm install --save-dev eslint typescript
```

## Usage

This package can be used in **3 different ways**:

### 1. Plugin-Style Usage (Simple & Fast)

The simplest usage. Import the pre-configured setup directly:

**eslint.config.js (for base TypeScript projects):**

```js
import kbox from "kbox-eslint-rules";

export default kbox.configs.recommended;
```

**eslint.config.mjs (for Next.js projects):**

```js
import kboxNext from "kbox-eslint-rules/next";

export default kboxNext.configs.recommended;
```

**Advantages:**
- Very simple, one-liner
- Zero configuration
- Works with default settings

**Limitations:**
- No customization
- `tsconfig.json` path must be default `"./tsconfig.json"`
- Cannot define custom alias map

---

### 2. Function Usage (Customizable)

When you need to customize the configuration:

**eslint.config.js (for base TypeScript projects):**

```js
import { createBaseConfig } from "kbox-eslint-rules";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default createBaseConfig({
  tsconfigPath: "./tsconfig.json",
  rootDir: __dirname,
  aliasMap: {
    "@/*": "./src/*",
  },
  ignorePatterns: ["coverage/**"],
});
```

**eslint.config.mjs (for Next.js projects):**

```js
import { createNextConfig } from "kbox-eslint-rules/next";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default createNextConfig({
  tsconfigPath: "./tsconfig.json",
  rootDir: __dirname,
  aliasMap: {
    "@/*": "./src/*",
    "kbox-shared": "../kbox-shared/src",
  },
  consoleAllowList: ["warn", "error"],
  ignorePatterns: [".next/**", "out/**"],
});
```

**Advantages:**
- Full customization
- Path alias support
- Add custom ignore patterns
- Configure console allow list (Next.js)

---

### 3. Default Export Usage (Backward Compatible)

For backward compatibility with previous versions:

**eslint.config.js:**

```js
import createKboxConfig from "kbox-eslint-rules";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default createKboxConfig({
  tsconfigPath: "./tsconfig.json",
  rootDir: __dirname,
  aliasMap: {
    "@/*": "./src/*",
  },
});
```

**Advantages:**
- Compatible with legacy code
- Customizable

---

### Which Method Should I Choose?

| Situation                                      | Recommended Method        |
| ---------------------------------------------- | ------------------------- |
| Quick start, no customization needed           | Plugin-Style (Method 1)   |
| You have path aliases                          | Function (Method 2)       |
| You want to add ignore patterns                | Function (Method 2)       |
| You want to customize console rules            | Function (Method 2)       |
| Legacy code using old version                  | Default Export (Method 3) |
| Simplicity and readability is priority         | Plugin-Style (Method 1)   |

---

## Configuration Options

### Base Config Options

| Option           | Type      | Default                 | Description                                      |
| ---------------- | --------- | ----------------------- | ------------------------------------------------ |
| `tsconfigPath`   | `string`  | `"./tsconfig.json"`     | Path to TypeScript config file                   |
| `rootDir`        | `string`  | `import.meta.dirname`   | Root directory for TypeScript config             |
| `aliasMap`       | `Object`  | `{}`                    | Path alias map (e.g., `{ "@/*": "./src/*" }`)    |
| `ignorePatterns` | `string[]`| `[]`                    | Additional patterns for ESLint to ignore         |

### Next.js Config Additional Options

In addition to base config options:

| Option             | Type      | Default             | Description                        |
| ------------------ | --------- | ------------------- | ---------------------------------- |
| `consoleAllowList` | `string[]`| `["warn", "error"]` | Allowed console methods            |

## Built-in Rules

### TypeScript
- Warns on unused variables (except those starting with `^_`)
- Explicit module boundary types disabled
- Strict type checking

### Imports
- Import ordering: builtin → external → internal → parent → sibling → index
- Alphabetical sorting (case-insensitive)
- Newlines between import groups
- Unused imports marked as errors
- File extensions forbidden (for TypeScript)

### Console
- Base config: `console.*` warns
- Next.js config: Only `console.log` warns, `console.warn` and `console.error` allowed

### Code Style
- Integrated with Prettier
- Automatic code formatting


## License

MIT
