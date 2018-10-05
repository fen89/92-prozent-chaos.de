const { resolve } = require('path');

module.exports = {
  base: '/blog-test/',
  title: '92-prozent-chaos',
  layoutDir: 'layouts',
  output: resolve(__dirname, 'dist'),
  plugins: [
    '@vuepress/blog',
    '@vuepress/pagination'
  ],
  description: 'Another simple developers blog.',
  head: [
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }],
    ['link', { rel: 'stylesheet', href: 'https://unpkg.com/vuetify/dist/vuetify.min.css' }]
  ],
  permalink: ':year/:month/:day/:slug',
  serviceWorker: {
    updatePopup: {
      message: 'New content is available.',
      buttonText: 'Refresh'
    }
  },
  markdown: {
    config: md => {
      // more markdown plugins
    }
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Blog', link: '/blog/' },
      // { text: 'Guides', link: '/guides/' }
    ],
    // sidebar: {
    //   '/guides/': generateGuidesSidebar()
    // }
  }
};

function generateGuidesSidebar () {
  return [
    {
      title: 'Angular',
      collapsable: false,
      children: [
        'angular/best-practices/',
        'angular/best-practices/ngrx',
        'angular/best-practices/project-structure',
      ]
    },
    {
      title: 'Vue.js',
      collapsable: false,
      children: [
        'vue/best-practices/',
        'vue/best-practices/basics',
        'vue/best-practices/component-structure',
        'vue/best-practices/vuex',
      ]
    }
  ]
}