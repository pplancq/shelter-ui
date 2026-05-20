import react from '@vitejs/plugin-react';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  plugins: [react()],
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    name: 'React Unit Tests',
    environment: 'jsdom',
    setupFiles: [`${import.meta.dirname}/vitest.setup.ts`],
    clearMocks: true,
    css: false,
    include: ['**/*.unit.test.{ts,tsx}'],
  },
});
