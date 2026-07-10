import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://boxb.app',
  redirects: {
    // /download/win → latest Windows installer on GitHub.
    // Hardcoded to v0.2.0 for this release; update per-release until we wire this dynamically.
    '/download/win': {
      status: 302,
      destination:
        'https://github.com/baalidxb/boxb/releases/download/v0.2.0/BoxB-Setup-0.2.0.exe',
    },
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  vite: {
    ssr: {
      noExternal: ['three'],
    },
  },
});
