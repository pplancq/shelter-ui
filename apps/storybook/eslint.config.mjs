import { defineConfig } from "@pplancq/eslint-config";

export default defineConfig({
  enableReact: true,
  rulesNaming: "modern",
  enablePrettier: "disableStyleOnly",
  extendConfig: [
    {
      files: [
        "**/*.{config,stories}.{js,jsx,ts,tsx,mjs,cjs,cts,mts}",
        ".storybook/**/*.{js,jsx,ts,tsx,mjs,cjs,cts,mts}",
      ],
      rules: {
        "import-x/no-extraneous-dependencies": "off",
        "import-x/no-default-export": "off",
      },
    },
    {
      rules: {
        "import-x/no-unresolved": ["error", { ignore: ["@pplancq/shelter-ui-react"] }],
      },
    },
    {
      ignores: ["build"],
    },
  ],
});
