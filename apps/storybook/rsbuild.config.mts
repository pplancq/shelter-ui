import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';

export default defineConfig({
  plugins: [pluginReact(), pluginSass()],
  output: {
    distPath: {
      root: 'build',
    },
  },
  server: {
    port: parseInt(process.env.PORT ?? '3000', 10),
    open: (process.env.BROWSER ?? 'false') === 'true',
  },
});
