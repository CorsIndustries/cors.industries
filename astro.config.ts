import { defineConfig } from "astro/config";

import expressiveCode from "astro-expressive-code";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import spectre from "./package/src";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://cors.industries",
  base: "/",  
  output: "static",
  integrations: [
    expressiveCode(),
    mdx(),
    sitemap(),
    spectre({
      name: "Cors Industries",
      openGraph: {
        home: {
          title: "Cors Industries",
          description: "A blog and project showcase of tech",
        },
        blog: {
          title: "Blog",
          description: "News and guides",
        },
        projects: {
          title: "Projects",
        },
        models: {
          title: "Models",
        },
      },
      //giscus: {
      //  repository: "louisescher/spectre",
      //  repositoryId: "R_kgDONjm3ig",
      //  category: "General",
      //  categoryId: "DIC_kwDONjm3is4ClmBF",
      //  mapping: "pathname",
      //  strict: true,
      //  reactionsEnabled: true,
      //  emitMetadata: false,
      //  lang: "en",
      //},
    }),
  ],
});
