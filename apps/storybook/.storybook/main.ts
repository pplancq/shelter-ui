// This file has been automatically migrated to valid ESM format by Storybook.
import { mergeRsbuildConfig } from '@rsbuild/core';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import remarkGfm from 'remark-gfm';
import type { StorybookConfig } from 'storybook-react-rsbuild';

const require = createRequire(import.meta.url);

const { homepage } = require('../package.json') as { homepage?: string };

const publicUrl = homepage ?? '/';
const publicPath = new URL(publicUrl.endsWith('/') ? publicUrl : `${publicUrl}/`, 'http://localhost').pathname;

function getAbsolutePath<T extends string>(value: T): T {
  return dirname(require.resolve(join(value, 'package.json'))) as T;
}

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    {
      name: getAbsolutePath('@storybook/addon-docs'),
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@storybook/addon-links'),
  ],
  core: {
    disableTelemetry: true,
  },
  framework: 'storybook-react-rsbuild',
  rsbuildFinal: rsbuildConfig => {
    const assetPrefix = process.env.RELEASE ? publicPath : '/';

    return mergeRsbuildConfig(rsbuildConfig, {
      dev: {
        assetPrefix,
      },
      output: {
        assetPrefix,
      },
    });
  },
  typescript: {
    reactDocgen: 'react-docgen-typescript',
  },
};

export default config;
