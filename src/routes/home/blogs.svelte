<script lang="ts">
	import Card from "@/components/card.svelte";
	import Loader from "@/components/loader.svelte";
	import { get } from "@/lib/fetch.ts";
	import { onMount } from "svelte";
	import toast from "svelte-french-toast";
	import { push } from "svelte-spa-router";

	let blogs: Record<string, any>[] = [];

	onMount(async () => {
		const data = await get("blog", {
			limit: 5,
		});
		if (data.error) {
			toast.error(data.error, {
				position: "bottom-right",
			});
		} else {
			blogs = data.data;
		}
	});
</script>

<div
	id="blogs"
	class="flex flex-wrap p-5 pt-[25%] md:pt-[10%] w-full h-full gap-5 overflow-hidden overflow-y-auto snap-start"
>
	{#if blogs.length > 0}
		{#each blogs as blog}
			<Card
				class_="aspect-video w-full md:w-[calc(33.333%-1rem)] justify-between"
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
			class_="aspect-video w-full md:w-[calc(33.333%-1rem)] items-center justify-center"
			onclick={() => {
				push("/blogs");
			}}
		>
			<span class="font-bold text-[1.25rem]">See More</span>
			<span class="italic text-[0.75rem]">Click here to see more blogs</span>
		</Card>
	{:else}
		{#each Array(6) as _, i (i)}
			<Loader
				class_="aspect-video w-full md:w-[calc(33.333%-1rem)] items-center justify-center"
			></Loader>
		{/each}
	{/if}
</div>
