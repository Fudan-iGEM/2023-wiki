const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Vuepress Docs Boilerplate',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['link', { rel: 'icon', href: '/igem-2022.svg' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/igem-2022.svg' }],
    ['link', { rel: 'mask-icon', href: '/igem-2022.svg' , color:"#999"}],
    ['meta', { name: 'msapplication-TileImage', content: '/igem-2022.svg' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['link', { rel: 'shortcut icon', href: 'https://static.igem.wiki/common/icons/favicons/igem-2022.svg' }]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: '',
    base:'/dev/',
    displayAllHeaders: true,
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    nav: [
      {
        text: 'Home',
        link: '/',
      },
      { text: 'Team', items:[
          { text: 'Team', link: '/team/' },
          { text: 'Attributions', link: '/attributions/' }
        ],
      },
      {
        text: 'VuePress',
        link: 'https://v1.vuepress.vuejs.org'
      }
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    }
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
    }
  }
}
