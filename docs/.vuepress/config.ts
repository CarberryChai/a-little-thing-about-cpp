import type { DefaultThemeOptions } from 'vuepress-vite'
import { defineUserConfig } from 'vuepress-vite'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/a-little-thing-about-cpp/',
  title: 'CPP 那些事',
  description: '记录学习cpp的知识点以及一些数据结构和算法',

  themeConfig: {
    logo: null,
    sidebarDepth: 1,
    navbar: [
      {
        text: 'Data Structure',
        link: '/data-structure/',
      },
    ],
    sidebar: {
      '/data-structure/': [
        {
          text: '数据结构',
          children: ['/data-structure/time-complexity.md'],
        },
        {
          text: '算法',
          children: [],
        },
      ],
      '/': [
        {
          text: 'C++基础',
          children: [],
        },
      ],
    },
  },
})

console.log(`server runing at http://localhost:3000`)
