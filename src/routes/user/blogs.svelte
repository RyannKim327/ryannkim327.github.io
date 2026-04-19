<script lang="ts">
	import Card from "@/components/card.svelte";
	import { get } from "@/lib/fetch.ts";
	import { onMount } from "svelte";

	let blogs: Record<string, any>[] = [];
	let pages: number = 1
	let page: number = 1
	
	onMount(async () => {
		const data = await get("blog", {
			page: page,
			limit: 9
		});
		pages = data.pages
		blogs = data.data;
	});

	async function changepage(p: number){
		page = p
		const data = await get("blog", {
			page: page,
			limit: 9
		});
		pages = data.pages
		blogs = data.data
	}
</script>

<div
	id="blogs"
	class="flex flex-wrap p-2 w-full h-full gap-2 overflow-hidden overflow-y-auto snap-start"
>
	{#each blogs as blog}
		<Card class_="aspect-video w-[calc(33.333%-0.5rem)] justify-between">
			<span class="font-bold text-[1.25rem]">{blog.title}</span>
			<span class="italic text-[0.75rem]"
				>{blog.content.substring(0, 250)} ...</span
			>
		</Card>
	{/each}
	<div class="flex fixed z-10 bottom-0 left-0 right-0 justify-center p-4">
		<div class="flex gap-2 bg-[#121212]/75 rounded p-2">
			<span>Prev</span>
			{#each Array(pages) as _, p}
				<span onclick={() => {
					changepage(p+1)
				}}
				class={`${p+1 === page ? "dark:bg-[#555555]" : ""} text-center rounded aspect-square w-5 cursor-pointer select-none`}>{p + 1}</span>
			{/each}
			<span>Next</span>
		</div>
	</div>
</div>
