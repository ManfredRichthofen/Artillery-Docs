import { defineConfig } from 'vitepress'

export default defineConfig({
  outDir: '../dist',
  title: "A3D",
  description: "A3D Wiki",
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'X1', link: '/sidewinder-x1/' },
      { text: 'X2', link: '/sidewinder-x2/' },
      { text: 'Genius', link: '/genius/' },
    ],

    sidebar: {

      '/sidewinder-x1/': [
        {
          text: 'Guide',
          items: [
            { text: 'Firmware', link: '/sidewinder-x1/' },
            { text: 'One', link: '/sidewinder-x1/Firmware' },
            { text: 'Two', link: '/guide/two' }
          ]
        }
      ],

      '/sidewinder-x2/': [
        {
          text: 'Config',
          items: [
            { text: 'Index', link: '/sidewinder-x2/' },
            { text: 'Three', link: '/config/three' },
            { text: 'Four', link: '/config/four' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ]
  }
})