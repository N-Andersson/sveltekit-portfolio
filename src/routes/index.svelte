<script>
	import About from './about.svelte';
	import Portfolio from './projects/index.svelte';
	import { scrollTo, scrollRef, scrollTop } from 'svelte-scrolling';
	import Card from '$lib/components/card.svelte';
	import Exampleproject from './projects/exampleproject.svelte';
	import Footer from '$lib/components/footer.svelte';
	import Header from '$lib/components/header.svelte';
	import Hero from '$lib/components/hero.svelte';

	let projects = [
		{
			title: 'title1',
			description: 'description1',
			imgsrc: './static/favicon.png'
		},
		{
			title: 'title2',
			description: 'description2',
			imgsrc: './static/favicon.png'
		},
		{
			title: 'title3',
			description: 'description3',
			imgsrc: './static/favicon.png'
		}
	];
</script>



<Hero></Hero>

{#each projects as project}
	<Card {...project} />
{/each}

<article class="section" id="about">
	<About />
</article>

<style>

</style>
