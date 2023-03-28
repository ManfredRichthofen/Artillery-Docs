import { defineConfig } from 'vitepress'

export default defineConfig({
  outDir: '../dist',
  title: "A3D",
  description: "A3D Wiki",
  
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'X1', link: '/sidewinder-x1/firmware' },
    ],

    sidebar: [
      {
        text: 'Jellyfin Guides',
        collapsed: false,
        items: [
          { text: 'Apps', link: '/jellyfin/apps' },
          { text: 'Requesting Movies', link: '/jellyfin/requests' },
          { text: 'Request an Account', link: '/jellyfin/account' },
          { text: 'Server Status', link: '/jellyfin/status' }
        ]
      },
      {
        text: 'Server Hosting Guides',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Upload Server Files', link: '/api-examples' }
        ]
      },
      {
        text: 'Discord Bot Guides',
        items: [
          { text: 'Music Bot', link: '/discord-bots/markdown-examples' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ]
  }
})