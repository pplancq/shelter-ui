import { defineConfig } from "@pplancq/eslint-config";

export default defineConfig({
  enableReact: false,
  enableVitest: true,
  rulesNaming: "modern",
  enablePrettier: "disableStyleOnly",
});
