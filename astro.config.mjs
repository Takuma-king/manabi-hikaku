import { defineConfig } from 'astro/config';

// NOTE: site URL is the planned custom domain (manabihikaku.com, chosen
// 2026-11-16 after manabi-hikaku.com turned out to be already registered).
// Until the domain is acquired and connected, Cloudflare serves the site
// on its *.workers.dev URL instead.
export default defineConfig({
  site: 'https://manabihikaku.com',
  trailingSlash: 'always',
});
