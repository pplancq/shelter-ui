// eslint-disable-next-line import/no-extraneous-dependencies
import defaultConfig from "@pplancq/postcss-config";
// eslint-disable-next-line import/no-unresolved
import postcssDiscardDuplicates from "postcss-discard-duplicates";

// eslint-disable-next-line import/no-default-export
export default {
  ...defaultConfig,
  plugins: [...defaultConfig.plugins, postcssDiscardDuplicates],
};
