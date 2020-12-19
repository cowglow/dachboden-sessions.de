// .storybook/main.js

module.exports = {
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: "react-docgen-typescript",
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
    },
  },
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stor@(y|ies).@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-options",
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false,
      },
    },
  ],
};
