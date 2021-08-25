// const custom = require('../webpack.config')(null, 'development')

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  // "stories": [
  //   "../src/admin/**/*.stories.js"
  // ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss"
  ],
  // "webpackFinal": config => {
  //   config.plugins.push({})
  //   config.module.rules.push({})
  //   return {
  //     config,
  //     module: {...config.module, rules: custom.module.rules},
  //     resolve: customElements.resolve
  //   };
  // }
}
