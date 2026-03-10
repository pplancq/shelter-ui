# Title

A short, clear title (e.g. feat(react): add secondary variant to Button)

## Description

Briefly describe what changed and why.

- Problem / feature:
- Expected behavior:

Closes: #<issue-number> <!-- if applicable -->

## Type of change

Please check the relevant option:

- [ ] fix (bug fix)
- [ ] feat (new feature)
- [ ] docs (documentation only)
- [ ] style (formatting, lint, etc.)
- [ ] refactor (code change without new feature or bug fix)
- [ ] perf (performance improvement)
- [ ] test (adding or updating tests)
- [ ] ci (CI/configuration changes)
- [ ] chore (other tasks)

> Reminder: use Conventional Commits for commit messages. Recommended scopes: `shelter-ui`, `react`, `css`, `icon`, `storybook`. Scopes `deps` and `release` are reserved for maintainers.

## Branch / commit naming

- Branch name: prefix with `feature/` or `bugfix/`.
- Commit message example: `feat(react): add secondary variant to Button`

## How to test locally

Commands and steps to validate the change locally.

- Install / prepare hooks:
  - npm install
  - npm run prepare

- Lint / typecheck:
  - npm run lint
  - npm run lint --workspace=@pplancq/shelter-ui-react # if targeting a workspace
  - cd packages/react && npm run tsc

- Tests:
  - Run full suite: `npm run test`
  - Run a single test file: `npx vitest run ./packages/react/src/components/MyComponent.test.tsx`
  - Watch mode: `cd packages/react && npm run test:watch`
  - Generate coverage locally: `npx vitest run --coverage` or `CI=true npm run test`

- Build:
  - Build all workspaces: `npm run build`
  - Build a specific workspace: `npm run build --workspace=@pplancq/shelter-ui-react`

- Storybook (for UI changes):
  - Dev: `npm run dev:storybook`
  - Build: `cd apps/storybook && npm run build`

## Checklist (required before review)

- [ ] Commits follow Conventional Commits with a valid scope.
- [ ] Branch is named correctly (`feature/` or `bugfix/`).
- [ ] Relevant tests added/updated and passing (`npm run test`).
- [ ] Lint and formatting are OK (`npm run lint`).
- [ ] Affected packages build successfully (`npm run build` / workspace build).
- [ ] Storybook updated/tested if UI changed (attach screenshot or Storybook link).
- [ ] Documentation (README, Storybook) updated if needed.
- [ ] No unnecessary dependency changes in package.json.
- [ ] Avoid using reserved scopes (`deps`, `release`) unless you are a maintainer.

## Screenshots / Demo

Attach screenshots, GIFs, or Storybook links if the PR changes UI.

## Notes for the reviewer

Call out any architecture decisions, trade-offs, or areas needing attention (security, performance, backwards compatibility, etc.).

## Suggested labels

- bug / enhancement / docs / tests / chore / ci / performance / release

## Release / Changelog

If this PR should drive a release note, indicate it here. (This repo uses `semantic-release`; the commit messages determine changelog entries.)

---

Thank you for your contribution! ❤️  
Add more context if it helps speed up review.
