import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/LuoKaBlog/",
  title: "Luoka",
  description: "A VitePress Site",
  lang: 'zh',
  head: [
    [
      'link', { rel: 'icon', href: '/LuoKaBlog/favicon.ico' }
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/favicon.ico',
    siteTitle: false,
    nav: [
      { text: '主页', link: '/' },
      {
        text: '博客', items: 
        [
          { text: '前端', link: '/item-1' },
          { text: '工具', link: '/item-2' },
          { text: '日常', link: '/item-3' }
        ]
      }
    ],

    sidebar: [
      {
        text: '前端笔记',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'grid布局', link: '/web/grid-layout' },

        ],
        collapsed: true
      },
      {
        text: '工具推荐',
        items: [

        ],
        collapsed: true
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Augenstein10/LuoKaBlog' }
    ]
  }
})
