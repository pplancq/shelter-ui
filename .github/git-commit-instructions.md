# Git Commit Instructions

## Commit Format

Commits must follow the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

### Structure

```
<type>(<scope>): <short description>
```

- **type**: The type of change (e.g., `feat`, `fix`, `chore`, etc.).
- **scope**: The scope of the change. Multiple scopes can be used, separated by commas.
- **short description**: A concise description of the change in English (max 100 characters including type and scope).

### Rules

1. **Scopes are mandatory**.
2. Allowed scopes:
   - `react`, `css`, `icon`: For changes in the respective packages.
   - `shelter-ui`: For all other changes (e.g., GitHub workflows, documentation updates).
   - `storybook`: For changes related to Storybook.
3. **Reserved scopes**:
   - `deps`, `release`: These scopes are reserved and must not be used.
4. **Only the allowed scopes can be used**. Any other scope (e.g., `button`, `header`) is prohibited.
5. Commit messages must be written in **English**.
6. The entire commit message (type, scope, and description) must not exceed **100 characters**.
7. Use the imperative mood in the description (e.g., "add" instead of "added" or "adds").
8. Avoid unnecessary punctuation at the end of the message.

### Examples

- `feat(react): add new hooks for state management`
- `fix(css,icon): resolve styling issues in icons`
- `ci(shelter-ui): update GitHub workflow`
