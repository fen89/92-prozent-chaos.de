const { resolve } = require('path');

module.exports = {
  base: '/',
  title: '92-prozent-chaos',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }],
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/vuetify/dist/vuetify.min.css' }]
  ],
  description: 'Noch so ein Dev-Blog',
  output: resolve(__dirname, 'dist'),
  plugins: [
    '@vuepress/blog',
    '@vuepress/pagination'
  ],
  permalink: ':year/:month/:day/:slug',
  serviceWorker: {
    updatePopup: {
      message: 'New content is available.',
      buttonText: 'Refresh'
    }
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      // { text: 'Blog', link: '/posts/', exact: false },
    ],
  }
};