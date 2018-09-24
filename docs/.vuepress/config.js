module.exports = {
  title: '#dev',
  description: 'A stupid dev-blog',
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
      { text: 'Blog', link: '/blog/' },
      { text: 'Wiki', link: '/wiki/' }
    ],
    sidebar: {
      '/wiki/': generateWikiSidebar()
    }
    // sidebar: [
    //     {
    //         title: 'Angular',
    //         collapsable: false,
    //         children: [
    //             'wiki/angular/intro',
    //             'wiki/angular/best-practices/',
    //         ]
    //     },
    //     {
    //         title: 'Vue.js',
    //         collapsable: false,
    //         children: [
    //             'wiki/vue/',
    //         ]
    //     }
    // ]
  }
};

function generateWikiSidebar () {
  return [
    {
      title: 'Angular',
      collapsable: false,
      children: [
        '',
        'angular/',
        'angular/best-practices/',
      ]
    },
    {
      title: 'Vue.js',
      collapsable: false,
      children: [
        '',
        'vue/',
      ]
    }
  ]
}