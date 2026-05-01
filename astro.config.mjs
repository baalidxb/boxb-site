import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://boxb.app',
  redirects: {
    // /download/win → latest Windows installer on GitHub.
    // Hardcoded to v0.1.1 for this release; update per-release until we wire this dynamically.
    '/download/win': {
      status: 302,
      destination:
        'https://github.com/baalidxb/boxb/releases/latest/download/BoxB-Setup-0.1.1.exe',
    },
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  vite: {
    ssr: {
      noExternal: ['three'],
    },
  },
});
