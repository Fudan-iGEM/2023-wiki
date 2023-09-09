const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Fudan',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,
  theme: 'reco',
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  dest: 'public',
  base:'/fudan/',
  head: [
    ['link', { rel: 'icon', href: 'https://static.igem.wiki/teams/4765/wiki/czy/logo-czy.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: 'https://static.igem.wiki/teams/4765/wiki/czy/icon-ios-czy.ico' }],
    ['link', { rel: 'mask-icon', href: 'https://static.igem.wiki/teams/4765/wiki/czy/icon-ios-czy.ico' , color:"#999"}],
    ['meta', { name: 'msapplication-TileImage', content: 'https://static.igem.wiki/teams/4765/wiki/czy/icon-ios-czy.ico' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['link', { rel: 'shortcut icon', href: 'https://static.igem.wiki/teams/4765/wiki/czy/icon-ios-czy.ico' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    logo:'https://static.igem.wiki/teams/4765/wiki/czy/logo-czy.ico',
    authorAvatar:'https://static.igem.wiki/teams/4765/wiki/czy/logo-czy.svg',
    noFoundPageByTencent: false,
    nav: [
      {
        text: 'Home',
        icon: 'iconfont icon-home',
        link: '/',
      },
      { text: 'Team', items:[
          { text: 'Team', link: '/team/' },
          { text: 'Attributions', link: '/attributions/' }
        ],
        icon: 'iconfont icon-team',
      },
      {
        text: 'Project',items:[
          { text: 'Contribution', link: '/contribution/' },
          { text: 'Description', link: '/description/' },
          { text: 'Engineering', link: '/engineering/' },
          { text: 'Experiments', link: '/experiments/' },
          { text: 'Notebook', link: '/notebook/' },
          { text: 'Results', link: '/results/' },
        ],
        icon: 'iconfont icon-project',
      },
      {
        text: 'Parts',items:[
          { text: 'Part Collection', link: '/part-collection/' },
          { text: 'Parts', link: '/parts/' },
          { text: 'Improve', link: '/improve/' },
        ],
        icon: 'iconfont icon-experiment',
      },
      {
        text: 'Software',
        icon: 'iconfont icon-code',
        link: '/software/',
      },
      {
        text: 'Safety',
        icon: 'iconfont icon-safetycertificate',
        link: '/safety/',
      },
      {
        text: 'Human Practices',
        icon: 'iconfont icon-smile',
        link: '/human-practices/',
      },
    ],
  },
  markdown: {
    extendMarkdown: md => {
      md.use(require('markdown-it-mathjax3'))
      md.use(require('markdown-it-footnote'))
      md.use(require('markdown-it-sub'))
      md.use(require('markdown-it-sup'))
      md.renderer.rules.footnote_block_open = () => (
          '<section class="footnotes">\n' +
          '<ol class="footnotes-list">\n'
      );
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: {
    '@vuepress/back-to-top':true,
    '@vuepress/medium-zoom':true,
    '@vuepress/active-header-links':true,
    '@vuepress/pwa':{
      serviceWorker: true,
      updatePopup: true
    },
    'vuepress-plugin-clean-urls':{
      normalSuffix: '/',
      indexSuffix: '/',
    }
  }
}
