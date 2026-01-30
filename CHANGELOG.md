## [1.0.1](https://github.com/turkeryildirim/kbox-eslint-rules/compare/v1.0.0...v1.0.1) (2026-01-30)


### Bug Fixes

* semantic-release ([a9857fb](https://github.com/turkeryildirim/kbox-eslint-rules/commit/a9857fb4e043a089f50dda361664b65a622cfb99))

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.2] - 2026-01-30
- Auto release config files added

## [1.0.1] - 2026-01-30
- License changed

## [1.0.0] - 2026-01-30

### Added
- Initial release of kbox-eslint-rules
- Base configuration for TypeScript projects
- Next.js specific configuration
- Support for import ordering and alphabetization
- Unused imports removal
- Prettier integration
- Configurable path aliases
- TypeScript strict mode support
- Console logging rules (configurable for Next.js)

### Features
- **Base Config**: Standard TypeScript ESLint configuration
  - TypeScript support with @typescript-eslint
  - Import plugin with ordering rules
  - Unused imports detection and removal
  - Prettier integration
  - Configurable path aliases

- **Next.js Config**: Extended configuration for Next.js projects
  - All base config features
  - Next.js specific rules via @next/eslint-plugin-next
  - Configurable console allow list
  - .next directory ignored by default

### Usage Patterns (3 ways)
1. **Plugin-style usage**: `import kbox from "kbox-eslint-rules"` → Simple, zero-config
2. **Function usage**: `import { createBaseConfig } from "kbox-eslint-rules"` → Fully customizable
3. **Default export**: `import createKboxConfig from "kbox-eslint-rules"` → Backward compatible

### Configuration Options
- `tsconfigPath`: Path to TypeScript config file
- `rootDir`: Root directory for TypeScript config
- `aliasMap`: Map of path aliases
- `ignorePatterns`: Additional patterns to ignore
- `consoleAllowList`: (Next.js only) Allowed console methods

### Exports
- `./` (index.js): Base config for TypeScript projects
- `./next`: Next.js config
- `./configs/recommended`: Pre-configured base config
- `./configs/next`: Pre-configured Next.js config
