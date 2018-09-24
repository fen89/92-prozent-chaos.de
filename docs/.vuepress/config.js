module.exports = {
  base: '/blog-test/',
  title: '#dev',
  description: 'A stupid dev-blog',
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
      { text: 'Wiki', link: '/wiki/' }
    ],
    sidebar: {
      '/wiki/': generateWikiSidebar()
    }
  }
};

function generateWikiSidebar () {
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