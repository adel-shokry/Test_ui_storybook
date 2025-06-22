import type { StorybookConfig } from '@storybook/angular';
// import webpack from 'webpack';
process.env.NODE_ENV = "development"

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.mdx",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": ["@storybook/addon-onboarding", "@storybook/addon-docs"],
  "framework": {
    "name": "@storybook/angular",
    "options": {}
  },
  staticDirs: ['../public'],
  // env: (config) => ({
  //   ...config,
  //   NODE_ENV: "DEVELOPMENT"
  // }),
  //webpackFinal: async (config, { configType }) => {

  // config.plugins = config.plugins?.filter(
  //   plugin => !(plugin instanceof webpack.DefinePlugin)
  // );
  // config.plugins?.push(
  //   new webpack.DefinePlugin({
  //     "process.env.NODE_ENV": JSON.stringify(
  //       configType === "DEVELOPMENT" ? "development" : "production"
  //     ),
  //     "process.env.NODE_PATH": JSON.stringify([]),
  //     "process.env.STORYBOOK": JSON.stringify('true'),
  //     "process.env.PUBLIC_PATH": JSON.stringify("."),
  //   })
  // );
  //  return config;
  // }
};

console.log("Enviroment:", process.env.NODE_ENV);
export default config;