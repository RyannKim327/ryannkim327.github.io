<script lang="ts">
	import Card from "@/components/card.svelte";
	import Loader from "@/components/loader.svelte";

	let {
		feedbacks = [],
		parseData = false,
	}: { feedbacks?: Record<string, any>[]; parseData?: boolean } = $props();
</script>

<div
	id="feedback"
	class="flex flex-wrap gap-2 p-2 pt-[25%] md:pt-[10%] h-full w-full overflow-y-auto snap-start"
>
	{#if feedbacks.length > 0 && parseData}
		{#each feedbacks as feedback}
			<Card
				class="aspect-video w-full md:w-[calc(33.333%-0.5rem)] justify-between"
			>
				<span class="font-bold text-[1.25rem]">{feedback.name}</span>
				<span class="italic text-[0.75rem]">{feedback.content}</span>
			</Card>
		{/each}
	{:else if parseData}
		<div>
			<span>No Feedback submitted</span>
		</div>
	{:else}
		{#each Array(6) as _, i (i)}
			<Loader
				class="aspect-video w-full md:w-[calc(33.333%-0.5rem)] justify-between"
			></Loader>
		{/each}
	{/if}
</div>
