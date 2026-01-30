// Function-style usage - Base TypeScript Project (Customizable)
// Use this when you need customization (aliases, ignore patterns, etc.)
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
