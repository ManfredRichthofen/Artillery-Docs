import { defineConfig } from 'vitepress'

export default defineConfig({
  outDir: '../dist',
  title: "A3D",
  description: "A3D Wiki",
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'X1', link: '/sidewinder-x1/' },
      { text: 'X2', link: '/sidewinder-x2/' },
      { text: 'Genius', link: '/genius/' },
    ],

    sidebar: {

      '/genius/': [
        {
          text: 'Guide',
          items: [
            { text: 'Firmware', link: '/genius/' },
            { text: 'One', link: '/genius/Firmware' },
            { text: 'Two', link: '/genius/two' }
          ]
        }
      ],

      '/sidewinder-x1/': [
        {
          text: 'Guide',
          items: [
            { text: 'Firmware', link: '/sidewinder-x1/' },
            { text: 'One', link: '/sidewinder-x1/firmware' },
            { text: 'Two', link: '/sidewinder-x1/two' }
          ]
        }
      ],

      '/sidewinder-x2/': [
        {
          text: 'Config',
          items: [
            { text: 'Index', link: '/sidewinder-x2/' },
            { text: 'Three', link: '/sidewinder-x2/three' },
            { text: 'Four', link: '/sidewinder-x2/four' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ManfredRichthofen/Artillery-Docs' },
    ]
  }
})