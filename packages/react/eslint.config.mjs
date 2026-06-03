import { defineConfig } from '@pplancq/eslint-config';

export default defineConfig({
  unitTestFiles: ['tests/unit/**/*.{test,spec}.{js,jsx,ts,tsx}'],
  enableReact: true,
  enableVitest: true,
  enablePrettier: 'on',
  extendConfig: [
    {
      rules: {
        'jsx-a11y/no-noninteractive-element-to-interactive-role': [
          'error',
          {
            fieldset: ['radiogroup'],
          },
        ],
      },
    },
    {
      // vitest-browser-react does not expose a global `screen` — queries must be accessed
      // from the render result (e.g. view.getByRole(...)). Disable the rule accordingly.
      files: ['tests/browser/**', 'tests/visual/**'],
      rules: {
        // 'testing-library/prefer-screen-queries': 'off',
      },
    },
  ],
});
