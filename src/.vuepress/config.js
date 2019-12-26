const { resolve } = require('path');

module.exports = {
  base: '/',
  title: '92-prozent-chaos',
  head: [
    ['link', { rel: 'icon', href: '/assets/img/avatar.jpg' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }],
    // ['link', { rel: 'stylesheet', href: 'https://unpkg.com/vuetify/dist/vuetify.min.css' }]
  ],
  description: 'Entwickler-Blog',
  output: resolve(__dirname, 'dist'),
  plugins: [

  ],
  // permalink: ':year/:month/:day/:slug',
  serviceWorker: {
    updatePopup: {
      message: 'Neuer Content verfügbar!',
      buttonText: 'Neu laden'
    }
  },
  themeConfig: {
    minimumFeaturedArticles: 6,
    featuredArticles: [
      'angular-cli-quick-start/'
    ],
    nav: [
      { text: 'Home', link: '/' },
      // { text: 'About', link: '/about/' },
      { text: 'Blog', link: '/articles/', exact: false },
    ],
  },
  chainWebpack: (config, isServer) => {
    if (isServer === false) {
      config.node.set('Buffer', false);

      config.optimization.splitChunks({
        maxInitialRequests: 5,
        cacheGroups: {
          vue: {
            test: /[\\/]node_modules[\\/](vue|vue-router)[\\/]/,
            name: 'vendor.vue',
            chunks: 'all'
          },
          commons: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
            name: 'vendor.commons',
            chunks: 'all'
          }
        }
      });
    }
  }
};