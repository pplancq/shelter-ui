import react from '@vitejs/plugin-react';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    name: 'React Visual Tests',
    setupFiles: [`${import.meta.dirname}/vitest.setup.ts`],
    clearMocks: true,
    include: ['**/*.visual.test.tsx'],
    browser: {
      enabled: true,
      provider: playwright({
        contextOptions: {
          deviceScaleFactor: 1,
        },
      }),
      headless: true,
      instances: [{ browser: 'chromium' }],
    },
  },
});
