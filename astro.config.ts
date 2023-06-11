import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import autoprefixer from "autoprefixer";
import cssnano from "cssnano";
import node from "@astrojs/node";
import sitemap from "@astrojs/sitemap";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap(), image()],
  output: "server",
  adapter: node({
    mode: "standalone"
  }),
  build: {
    inlineStylesheets: "auto"
  },
  vite: {
    css: {
      postcss: {
        plugins: [autoprefixer(), cssnano()]
      }
    }
  }
});
