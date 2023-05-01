import { defineConfig } from "vitepress";

export default defineConfig({
  outDir: "../dist",
  title: "A3D",
  description: "A3D Wiki",
  cleanUrls: true,
  themeConfig: {
    search: {
      provider: 'local'
    },
    
    nav: [
      { text: "Home", link: "/" },
      { text: "X1", link: "/sidewinder-x1/" },
      { text: "X2", link: "/sidewinder-x2/" },
      { text: "Genius", link: "/genius/" },
    ],

    sidebar: {
      "/genius/": [
        {
          text: "Guide",
          items: [
            { text: "Firmware", link: "/sidewinder-x1/firmware" },
            { text: "Slicer", link: "/sidewinder-x1/slicer" },
            { text: "Hardware Mods", link: "/sidewinder-x1/hardware-mods" },
          ],
        },
      ],

      "/sidewinder-x1/": [
        {
          text: "Guides",
          items: [
            { text: "Firmware", link: "/sidewinder-x1/firmware" },
            { text: "Slicer", link: "/sidewinder-x1/slicer" },
            { text: "Hardware Mods", link: "/sidewinder-x1/hardware-mods" },
          ],
        },
      ],

      "/sidewinder-x2/": [
        {
          text: "Guides",
          items: [
            { text: "Firmware", link: "/sidewinder-x1/firmware" },
            { text: "Slicer", link: "/sidewinder-x1/slicer" },
            { text: "Hardware Mods", link: "/sidewinder-x1/hardware-mods" },
          ],
        },
      ],
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/ManfredRichthofen/Artillery-Docs",
      },
    ],
  },
});
