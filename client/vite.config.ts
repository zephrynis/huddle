import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	// Force PostCSS to avoid optional native lightningcss binaries on CI
	css: {
		transformer: 'postcss'
	},
	plugins: [tailwindcss(), sveltekit()]
});
