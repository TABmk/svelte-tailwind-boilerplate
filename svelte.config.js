import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    paths: {
      assets: process.env.MODE === 'dev' ? '' : "http://hacked_asset_path",
      base: "/hacked_base_path",
      relative: true,
    },
    adapter: adapter({
      fallback: 'index.html'
    })
  }
};

export default config;
