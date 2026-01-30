// Function-style usage - Next.js Project (Customizable)
// Use this when you need customization (aliases, console rules, etc.)
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
