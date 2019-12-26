import { resolve } from 'path';

module.exports = (options, ctx) => {
  const { themeConfig, siteConfig } = ctx;

  const enableSmoothScroll = themeConfig.smoothScroll === true;

  return {
    plugins: [
        '@vuepress/plugin-nprogress',
    ],
    // enhanceAppFiles: resolve(__dirname, "articles.js")
  };
};
