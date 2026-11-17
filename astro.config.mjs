// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://kavalirlabs.com',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: [
        {
          // @formspree/ajax's "browser" field points at its script-tag build, which has
          // no exports, so `import { initForm }` fails. Use its ES module build instead.
          find: /^@formspree\/ajax$/,
          replacement: '@formspree/ajax/dist/index.mjs',
        },
      ],
    },
  },
});
