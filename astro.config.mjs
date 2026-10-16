import { defineConfig } from 'astro/config';

const siteUrl = process.env.PUBLIC_SITE_URL?.trim();

export default defineConfig({
  ...(siteUrl ? { site: siteUrl } : {}),
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
  server: {
    host: true,
    port: 4321,
  },
  preview: {
    host: true,
    port: 4321,
  },
  compressHTML: true,
});
