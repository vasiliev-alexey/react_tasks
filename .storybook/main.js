module.exports = {
  stories: [
    '../src/components/Viewer/ViewerComponent.stories.tsx', // default page
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  core: {
    builder: 'webpack5',
  },

  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  features: {
    postcss: false,
  },
  browser: 'chromium',
};
