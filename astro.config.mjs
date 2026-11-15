import { defineConfig } from 'astro/config';

// NOTE: site URL is the planned custom domain. Until the domain is acquired,
// Cloudflare Pages will serve the site on its *.pages.dev URL instead.
export default defineConfig({
  site: 'https://manabi-hikaku.com',
  trailingSlash: 'always',
});
