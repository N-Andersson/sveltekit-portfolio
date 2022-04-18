import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		 adapter: adapter({
		   pages: 'build',
		   assets: 'build',
		   fallback: null
		 })
		},
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

export default config;
