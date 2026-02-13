import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
  stories: ["../components/**/*.stories.@(js|jsx|mjs|ts|tsx)", "../app/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@chromatic-com/storybook", "@storybook/addon-vitest", "@storybook/addon-a11y", "@storybook/addon-docs"],
  framework: "@storybook/nextjs",
  staticDirs: ["../public"],
  async webpackFinal(config) {
    const fileLoaderRule = config.module?.rules?.find(
      (rule): rule is { test: RegExp; exclude?: RegExp } =>
        typeof rule === "object" && rule !== null && "test" in rule && (rule as { test: RegExp }).test?.test?.(".svg"),
    );

    config.module?.rules?.push({
      test: /\.svg$/i,
      use: ["@svgr/webpack"],
    });

    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/i;
    }

    return config;
  },
};
export default config;
