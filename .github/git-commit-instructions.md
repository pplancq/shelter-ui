---
applyTo: '*'
---

# Git Commit Instructions

To ensure consistency and readability in commit messages, please follow these guidelines:

## Commit Convention

This project adopts the [Conventional Commits](https://www.conventionalcommits.org/) specification for all commit
messages to ensure a readable history, automate changelog generation, and facilitate continuous integration.

## Main Rules

1. **Follow Conventional Commits**

   Use the following structure for commit messages:

   ```
   <type>(scope): <description>

   [optional body]

   [optional footer(s)]
   ```

   - **type**: The type of change being committed. Use one of the following:
     - `feat`: A new feature
     - `fix`: A bug fix
     - `docs`: Documentation changes
     - `style`: Code style changes (formatting, missing semicolons, etc.)
     - `refactor`: Code refactoring (neither fixes a bug nor adds a feature)
     - `perf`: Performance improvements
     - `test`: Adding or updating tests
     - `build`: Changes that affect the build system or external dependencies (e.g., npm, webpack)
     - `ci`: Changes to CI configuration files and scripts (e.g., GitHub Actions, Travis, Circle)
     - `chore`: Maintenance tasks (e.g., build process, dependencies)
     - `revert`: Reverts a previous commit
   - **scope** (mandatory): the part of the code concerned. See "Scope Rules" below.
   - **description**: short imperative description, no initial capital letter, no period at the end
   - **first line must not exceed 72 characters**
   - **body** (optional): detailed description of the change, wrapped at 100 characters.
     **You can provide multiple bodies if needed, each separated by a blank line.**
   - **footer(s)** (optional): for breaking changes or issues, use `BREAKING CHANGE:` or `REF #<issue number>`

2. **Scope Rules**

   The scope is **MANDATORY** (OBLIGATOIRE) for every commit.  
   **Use `shelter-ui` only as a last resort if none of the other scopes apply.**  
   Please strictly follow these rules:

   - If the commit is for `apps/storybook`, use the scope: `storybook`
   - If the commit is for `packages/css`, use the scope: `css`
   - If the commit is for `packages/icon`, use the scope: `icon`
   - If the commit is for `packages/react`, use the scope: `react`
   - For all other changes (and only if none of the above apply), use the scope: `shelter-ui`

3. **Best Practices**

   - Use English for all commit messages.
   - One commit = one logical/unit change.
   - Use the scope to specify the affected layer or feature.
   - For breaking changes, add `!` after the type or scope and detail in the commit body.
   - Use the imperative mood in the description (e.g., "add" instead of "added" or "adds").
   - Avoid unnecessary punctuation at the end of the message.

4. **Examples**

   - Simple commit messages should follow the structure:

     - `feat(storybook): add new button stories`
     - `fix(css): correct button padding`
     - `feat(icon): add new 'home' icon`
     - `refactor(react): simplify props handling`
     - `chore(shelter-ui): update dependencies`
     - `docs(shelter-ui): update readme with new setup instructions`

   - More complex commit messages can include a body and footer:

     - ```
       feat(icon): add support for custom sizes

       Allow icons to be rendered at custom sizes.

       BREAKING CHANGE: size prop is now required.
       ```

     - ```
       refactor(react): improve component memoization

       Use React.memo to optimize rendering.

       REF #42
       ```

     - ```
       fix(storybook): fix story loading

       Stories were not loading due to a missing import.
       Added the missing import and updated the config.
       ```

## Note

By following these rules, we ensure that our commit history remains clean, consistent, and easy to understand.
