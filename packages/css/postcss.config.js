import defaultConfig from '@pplancq/postcss-config';
import postcssDiscardDuplicates from 'postcss-discard-duplicates';

export default {
  ...defaultConfig,
  plugins: [...defaultConfig.plugins, postcssDiscardDuplicates],
};
