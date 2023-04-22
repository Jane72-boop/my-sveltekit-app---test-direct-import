<script lang="ts">
	import { goto, preloadCode, preloadData } from '$app/navigation';
	import { onMount } from 'svelte';

	let data: string[] = [];
	onMount(() => {
		setTimeout(() => {
			data = ['data1', 'data2'];
		}, 1000);
	});
</script>

<h1>Home</h1>

{#if data.length > 0}
	<ul>
		{#each data as item}
			<li>{item}</li>
		{/each}
	</ul>
{/if}

<button
	on:focus={() => {}}
	on:mouseover={async () => {
		await preloadCode('/products');
	}}
	on:click={() => {
		goto('/products', {
			noScroll: true
		});
	}}
	>Products
</button>
