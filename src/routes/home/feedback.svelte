<script lang="ts">
	import Card from "@/components/card.svelte";
	import { get } from "@/lib/fetch.ts";
	import { onMount } from "svelte";

	let feedbacks: Record<string, any>[] = [];

	onMount(async () => {
		const api = await get("feedback");
		feedbacks = api.data;
	});
</script>

<div
	id="feedback"
	class="flex flex-col p-2 pt-[25%] md:pt-[10%] h-full w-full overflow-y-auto snap-start"
>
	{#if feedbacks.length > 0}
		{#each blogs as blog}
			<Card
				class_="aspect-video w-full md:w-[calc(33.333%-0.5rem)] justify-between"
			>
				<span class="font-bold text-[1.25rem]">{blog.title}</span>
				<span class="italic text-[0.75rem]"
					>{blog.content.substring(0, 250)} ...</span
				>
			</Card>
		{/each}
	{:else}
		<span>No Feedback</span>
	{/if}
</div>
