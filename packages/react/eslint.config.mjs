import { defineConfig } from '@pplancq/eslint-config';

export default defineConfig({
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
  ],
});
