import { dirname, join } from 'node:path';
import type { StorybookConfig } from 'storybook-react-rsbuild';
import packageJson from '../package.json';

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath<T extends string>(value: T): T {
  return dirname(require.resolve(join(value, 'package.json'))) as T;
}

const publicUrl = packageJson.homepage ?? '/';
const publicPath = new URL(publicUrl.endsWith('/') ? publicUrl : `${publicUrl}/`, 'http://localhost').pathname;

const config: StorybookConfig = {
  stories: ['../stories/**/*.mdx', '../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@chromatic-com/storybook'),
  ],
  framework: {
    name: getAbsolutePath('storybook-react-rsbuild'),
    options: {},
  },
  rsbuildFinal: rsbuildConfig => {
    return {
      ...rsbuildConfig,
      output: {
        ...rsbuildConfig.output,
        assetPrefix: process.env.RELEASE ? publicPath : rsbuildConfig.output?.assetPrefix,
      },
    };
  },
  // typescript: {
  //   reactDocgen: 'react-docgen-typescript',
  //   check: true,
  // },
  core: {
    disableTelemetry: true,
  },
};

export default config;
