import { resolve } from "path";

module.exports = (options, ctx) => {
  const { themeConfig, siteConfig } = ctx;

  const enableSmoothScroll = themeConfig.smoothScroll === true;

  return {
    plugins: [
      "@vuepress/plugin-nprogress",
      '@vuepress/back-to-top',
      '@vuepress/medium-zoom'
    ]
    // enhanceAppFiles: resolve(__dirname, "articles.js")
  };
};
