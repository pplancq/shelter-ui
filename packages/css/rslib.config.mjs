import { defineConfig } from '@rslib/core';
import { pluginSass } from '@rsbuild/plugin-sass';

export default defineConfig({
  plugins: [pluginSass()],
  source: {
    entry: {
      index: ['./sass/**'],
    },
  },
  lib: [
    {
      bundle: false,
      format: 'esm',
    },
  ],
  output: {
    target: 'web',
    distPath: {
      root: 'css',
    }
  },
});
