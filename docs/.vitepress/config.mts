import { defineConfig } from 'vitepress'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/LuoKaBlog/",
  title: "Luoka",
  description: "A VitePress Site",
  lang: 'zh',
  lastUpdated: true, // 显示最后更新时间
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
          { text: '按钮配合sass的使用', link: '/web/button-sass' },
          { text: '跟随鼠标的骨头', link: '/web/bitterness' },

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
    ],
    lastUpdated: {
      text: 'Updated at',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    }
  },

})
