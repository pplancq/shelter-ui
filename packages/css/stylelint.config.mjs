// eslint-disable-next-line import/no-default-export
export default {
  extends: ["@pplancq/stylelint-config"],
  rules: {
    // prettier will take care of this
    "at-rule-empty-line-before": null,
    // scss/at-*-pattern already enforces camelCase; function-name-case conflicts with module namespaces.
    "function-name-case": null,
  },
};
