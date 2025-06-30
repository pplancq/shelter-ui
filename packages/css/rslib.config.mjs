import { pluginSass } from '@rsbuild/plugin-sass';
import { defineConfig } from '@rslib/core';

export default defineConfig({
  plugins: [pluginSass()],
  source: {
    entry: {
      index: ['./sass/*.scss', './sass/components/**/*.scss'],
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
    },
  },
});
