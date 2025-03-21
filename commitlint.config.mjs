// eslint-disable-next-line import/no-default-export
export default {
  extends: ['@pplancq/commitlint-config'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'shelter-ui',
        'deps',
        'release',
      ],
    ],
  },
};