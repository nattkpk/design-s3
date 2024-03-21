/** @type { import('@storybook/vue3-vite').StorybookConfig } */
module.exports = {
  "stories": ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],

  "addons": [
    {
      name: '@storybook/addon-postcss',
      options: {
        cssLoaderOptions: {
          importLoaders: 1,
        },
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions"
  ],

  "framework": {
    name: "@storybook/vue3-vite",
    options: {}
  },

  "features": {
    "storyStoreV7": true
  },

  docs: {
    autodocs: true
  }
}
