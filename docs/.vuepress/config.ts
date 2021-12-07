import type { DefaultThemeOptions } from 'vuepress-vite'
import { defineUserConfig } from 'vuepress-vite'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/a-little-thing-about-cpp/',
  title: 'CPP 那些事',
  description: '记录学习cpp的知识点以及一些数据结构和算法',

  themeConfig: {
    logo: null,
    repo: 'https://github.com/CarberryChai/a-little-thing-about-cpp',
    sidebarDepth: 1,
    editLink: false,
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
          children: [
            '/data-structure/time-complexity.md',
            '/data-structure/divide-and-conquer.md',
            '/data-structure/dynamic-programming.md',
            '/data-structure/bit-map.md',
            '/data-structure/list.md',
          ],
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

console.log(`server runing at http://localhost:5500`)
