import type { DefaultThemeOptions } from 'vuepress-vite'
import { defineUserConfig } from 'vuepress-vite'

export default defineUserConfig<DefaultThemeOptions>({
  base: '/a-little-thing-about-cpp/',
  title: 'CPP 那些事',
  description: '记录学习cpp的知识点以及一些数据结构和算法',

  themeConfig: {
    logo: null,
    navbar: [
      {
        text: 'Data Structure',
        link: '/data-structure/',
      },
    ],
  },
})
