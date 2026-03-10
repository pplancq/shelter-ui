# Copilot instructions for pplancq/shelter-ui

Purpose: help Copilot-powered sessions quickly understand how to build, test, lint, and navigate this monorepo.

---

## Quick commands (root)

- Start all local dev servers (concurrently):
  - npm run dev
  - single-target dev: npm run dev:react | npm run dev:css | npm run dev:storybook
- Build everything (workspaces):
  - npm run build
- Lint everything (workspaces):
  - npm run lint
- Run tests (non-watch):
  - npm run test
- Prepare git hooks (Husky):
  - npm run prepare

Notes: many root scripts forward to a specific workspace (e.g. `npm run dev --workspace=packages/react`). You can also cd into a package and run its scripts directly.

---

## Per-package common scripts (examples)

- packages/react
  - build: rslib build
  - dev: rslib build --watch
  - lint: npm run lint (runs eslint + tsc)
  - test: vitest run
  - test:watch: vitest
- packages/css
  - build: rslib build
  - dev: rslib build --watch
  - lint: stylelint + eslint
  - test: vitest run
- apps/storybook
  - dev: storybook dev --port 8000 --no-open
  - build: storybook build --output-dir build
  - test: vitest run

Use `npm run <script> --workspace=packages/<name>` from the repo root to target a workspace without changing directories.

---

## Running a single test (examples)

- Run a single test file directly (non-watch):
  - npm run test -- ./packages/react/src/components/MyComponent.test.tsx
  - or: npx vitest run ./packages/react/src/components/MyComponent.test.tsx
- Run a single test by name (watch mode):
  - cd packages/react && npm run test:watch -- -t "test name substring"
- Generate coverage locally (vitest config enables coverage in CI):
  - CI=true npm run test
  - or: npx vitest run --coverage

Vitest outputs in CI: junit-report.xml and sonar-report.xml (see vitest.config.mts). Coverage reporter is v8 and thresholds are defined in the root vitest config.

---

## High-level architecture

- Monorepo managed with npm workspaces (root package.json: `packages/*`, `apps/*`).
- Packages:
  - @pplancq/shelter-ui-react — TypeScript React component library; built with rslib; publishes `dist` with types and `exports` entry.
  - @pplancq/shelter-ui-css — Sass/CSS tokens and compiled CSS; provides `sass` and `style` entry points.
  - @pplancq/shelter-ui-icon — SVG assets (icons, logos).
- Apps:
  - apps/storybook — Storybook site that consumes the workspace packages for interactive docs.
- Tooling:
  - Build: rslib (package-level), Storybook (app)
  - Testing: Vitest (root vitest.config.mts delegates to per-package configs)
  - Linting: ESLint (JS/TS), Stylelint (CSS/Sass), Prettier
  - CI: reporters (junit, vitest-sonar-reporter) generate junit-report.xml and sonar-report.xml
  - Release: semantic-release and conventional commits

---

## Key repo conventions and gotchas

- Commit messages: follow Conventional Commits. Allowed scopes: `shelter-ui`, `react`, `css`, `icon`, `storybook`. (`deps` and `release` reserved for maintainers.)
- Branch names: prefix with `feature/` or `bugfix/`.
- Node / npm: package.json specifies `engines.node >= 22` and `packageManager: npm@11.11.0`—use the configured Node and npm when possible.
- Pre-commit: husky + lint-staged. Running `npm run prepare` installs hooks. lint-staged runs Prettier, tsc-files checks and stylelint/eslint fixes depending on file type.
- Workspace targeting: many root scripts forward to the workspace via `--workspace=packages/<name>`; this is the recommended way to run workspace targets from repo root.
- Exports & packaging: packages set `files` and `exports` (React package exposes types and import). Built artifacts live in `dist/` for packages that publish.
- Tests & CI: root vitest config defines coverage thresholds and reporters; local runs may not enable coverage unless `CI=true` or `--coverage` is passed.
- Storybook build: apps/storybook depends on packages; some scripts run package builds first (see `prelint` in storybook package.json).

---

## Where to look (short pointers)

- Root package.json — workspace scripts, versions, tooling.
- vitest.config.mts — centralized test config and reporters.
- packages/<react|css|icon> — package-level package.json (scripts, build), README for package-specific docs.
- apps/storybook — example app and Storybook configuration.

---

If you want additions (for example: explicitly documenting test locations, per-package TypeScript paths, or common refactors Copilot should prefer), say which area to expand.
