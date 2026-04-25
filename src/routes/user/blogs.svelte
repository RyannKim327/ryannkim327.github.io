<script lang="ts">
	import Card from "@/components/card.svelte";
	import HomeButton from "@/components/home-button.svelte";
	import { get } from "@/lib/fetch.ts";
	import { onMount } from "svelte";
	import { push } from "svelte-spa-router";

	let blogs: Record<string, any>[] = [];
	let pages: number = 1;
	let page: number = 1;

	onMount(async () => {
		const data = await get("blog", {
			page: page,
			limit: 9,
		});
		pages = data.pages;
		blogs = data.data;
	});

	async function changepage(p: number) {
		page = p;
		const data = await get("blog", {
			page: page,
			limit: 9,
		});
		pages = data.pages;
		blogs = data.data;
	}
</script>

<div
	id="blogs"
	class="flex flex-col w-full h-full gap-2 overflow-hidden overflow-y-auto snap-start"
>
	<HomeButton title="Blogs Lists" />
	<div class="flex flex-wrap p-5 gap-5 py-[5%] w-full h-full">
		{#each blogs as blog}
			<Card
				class_="aspect-video w-full md:w-[calc(33.333%-1rem)] justify-between cursor-pointer"
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
	</div>
	<div class="flex fixed z-10 bottom-0 left-0 right-0 justify-center p-4">
		<div
			class="flex gap-2 bg-[#f0f8ff]/75 dark:bg-[#121212]/75 shadow shadow-[#252525] backdrop-blur-xs rounded-full p-2 px-5"
		>
			<span
				class="cursor-pointer select-none flex items-center justify-center"
				onclick={() => {
					changepage(page > 1 ? page - 1 : 1);
				}}>Prev</span
			>
			{#each Array(pages) as _, p}
				<span
					onclick={() => {
						changepage(p + 1);
					}}
					class={`${p + 1 === page ? "dark:bg-[#555555]" : ""} flex items-center justify-center text-center rounded-full aspect-square w-7 h-7 cursor-pointer select-none`}
				>
					{p + 1}
				</span>
			{/each}
			<span
				class="cursor-pointer select-none flex items-center justify-center"
				onclick={() => {
					changepage(page < pages ? page + 1 : pages);
				}}>Next</span
			>
		</div>
	</div>
</div>
