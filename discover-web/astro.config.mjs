// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [
    sanity({
      projectId: 'jz782ps7',
      dataset: 'production',
      useCdn: false,
      apiVersion: '2024-11-06',
    })
  ],
  devToolbar: {
    enabled: false,
  }
});