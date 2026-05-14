<script lang="ts">
	import Card from "@/components/card.svelte";
	import Loader from "@/components/loader.svelte";

	import { push } from "svelte-spa-router";

	let {
		blogs = [],
		parseData = false,
	}: { blogs?: Record<string, any>[]; parseData?: boolean } = $props();
</script>

<div
	id="blogs"
	class="flex flex-wrap p-5 pt-[25%] md:pt-[10%] w-full h-full gap-5 overflow-hidden overflow-y-auto snap-start"
>
	{#if blogs.length > 0 && parseData}
		{#each blogs as blog}
			<Card
				class="aspect-video w-full md:w-[calc(33.333%-1rem)] justify-between"
				onclick={() => {
					push(`/blog/${blog.id}`);
				}}
			>
				<span class="font-bold text-[1.25rem]">{blog.title}</span>
				<span class="italic text-[0.75rem]"
					>{blog.content.substring(0, 250)} ...</span
				>
			</Card>
		{/each}
		<Card
			class="aspect-video w-full md:w-[calc(33.333%-1rem)] items-center justify-center"
			onclick={() => {
				push("/blogs");
			}}
		>
			<span class="font-bold text-[1.25rem]">See More</span>
			<span class="italic text-[0.75rem]">Click here to see more blogs</span>
		</Card>
	{:else if parseData}
		<div>
			<span>No Blogs Posted</span>
		</div>
	{:else}
		{#each Array(6) as _, i (i)}
			<Loader
				class="aspect-video w-full md:w-[calc(33.333%-1rem)] items-center justify-center"
			></Loader>
		{/each}
	{/if}
</div>
