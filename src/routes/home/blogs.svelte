<script lang="ts">
	import Card from "@/components/card.svelte";
	import { get } from "@/lib/fetch.ts";
	import { onMount } from "svelte";

	let blogs: Record<string, any>[] = [];

	onMount(async () => {
		const data = await get("blog");
		blogs = data.data;
	});
</script>

<div
	id="blogs"
	class="flex flex-wrap p-2 pt-[10%] w-full h-full gap-2 overflow-hidden overflow-y-auto"
>
	{#each blogs as blog}
		<Card class_="aspect-video w-[calc(33.333%-0.5rem)] justify-between">
			<span class="font-bold text-[1.25rem]">{blog.title}</span>
			<span class="italic text-[0.75rem]"
				>{blog.content.substring(0, 250)} ...</span
			>
		</Card>
	{/each}
	<Card
		class_="aspect-video w-[calc(33.333%-0.5rem)] items-center justify-center"
	>
		<span class="font-bold text-[1.25rem]">See More</span>
		<span class="italic text-[0.75rem]">Click here to see more blogs</span>
	</Card>
</div>
