import {defineConfig} from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import preact from "@astrojs/preact";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: "https://ingnyusan.com",
    integrations: [mdx(), sitemap(), preact(), tailwind()],
});