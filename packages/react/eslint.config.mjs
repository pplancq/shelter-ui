import { defineConfig } from "@pplancq/eslint-config";

export default defineConfig({
  enableReact: true,
  enableVitest: true,
  rulesNaming: "modern",
  enablePrettier: "disableStyleOnly",
  extendConfig: [
    {
      ignores: ["dist"],
    },
    {
      rules: {
        "jsx-a11y-x/no-noninteractive-element-to-interactive-role": [
          "error",
          {
            fieldset: ["radiogroup"],
          },
        ],
      },
    },
  ],
});
