import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pablomanzoni.github.io',
  base: '/nucleo/',
  trailingSlash: 'ignore',
  compressHTML: true,
});
