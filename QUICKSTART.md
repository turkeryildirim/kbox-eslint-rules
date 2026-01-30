# Quick Start Guide

## Setup in 5 Minutes

### 1. Install Package

```bash
npm install kbox-eslint-rules --save-dev
```

### 2. Create ESLint Config

#### For TypeScript Projects

**eslint.config.js:**

```js
import kbox from "kbox-eslint-rules";

export default kbox.configs.recommended;
```

#### For Next.js Projects

**eslint.config.mjs:**

```js
import kboxNext from "kbox-eslint-rules/next";

export default kboxNext.configs.recommended;
```

### 3. Add Scripts to package.json

```json
{
  "scripts": {
    "lint:check": "eslint \"{src,test}/**/*.{ts,tsx}\"",
    "lint:format": "prettier --write \"{src,test}/**/*.{ts,tsx,js,jsx,json,css,html}\" && eslint \"{src,test}/**/*.{ts,tsx}\" --fix"
  }
}
```

### 4. Test It

```bash
npm run lint:check
```

## Customize If Needed

If you need path aliases or custom settings:

**eslint.config.js:**

```js
import { createBaseConfig } from "kbox-eslint-rules";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default createBaseConfig({
  rootDir: __dirname,
  aliasMap: {
    "@/*": "./src/*",
  },
});
```

**For Next.js:**

```js
import { createNextConfig } from "kbox-eslint-rules/next";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default createNextConfig({
  rootDir: __dirname,
  aliasMap: {
    "@/*": "./src/*",
    "kbox-shared": "../kbox-shared/src",
  },
  consoleAllowList: ["warn", "error"],
});
```

## You're Done!

All your kbox projects now use the same ESLint rules. 🎉

For more information, see [README.md](./README.md).
