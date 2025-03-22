// eslint-disable-next-line import/no-default-export
export default {
  extends: ['@pplancq/commitlint-config'],
  rules: {
    'scope-empty': [2, 'never'],
    'scope-enum': [2, 'always', ['shelter-ui', 'react', 'css', 'storybook', 'deps', 'release']],
  },
};
