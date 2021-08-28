const path = require('path')
const custom = require('../../node_modules/@vue/cli-service/webpack.config.js')

module.exports = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-links',
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    {
      name: '@storybook/addon-storysource',
      options: {
        rule: {
          // test: [/\.stories\.jsx?$/], This is default
          include: [path.resolve(__dirname, '../../src/components')] // You can specify directories
        },
        loaderOptions: {
          prettierConfig: { printWidth: 80, singleQuote: false }
        }
      }
    }
  ],
  // webpackFinal: async (config) => {
  //   const rules = [
  //     ...custom.module.rules,
  //     {
  //       test: [/\.stories\.@(js|jsx|ts|tsx|mdx)?$/],
  //       loader: [
  //         {
  //           loader: require.resolve('@storybook/source-loader')
  //         }
  //       ]
  //     }
  //   ]
  //   return {
  //     ...config,
  //     module: { ...config.module, rules },
  //     resolve: custom.resolve
  //   }
  // }
}
