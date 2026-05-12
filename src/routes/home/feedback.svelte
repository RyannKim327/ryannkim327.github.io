<script lang="ts">
	import Card from "@/components/card.svelte";
	import Loader from "@/components/loader.svelte";

	export let feedbacks: Record<string, any>[] = [];
</script>

<div
	id="feedback"
	class="flex flex-wrap gap-2 p-2 pt-[25%] md:pt-[10%] h-full w-full overflow-y-auto snap-start"
>
	{#if feedbacks.length > 0}
		{#each feedbacks as feedback}
			<Card
				class_="aspect-video w-full md:w-[calc(33.333%-0.5rem)] justify-between"
			>
				<span class="font-bold text-[1.25rem]">{feedback.name}</span>
				<span class="italic text-[0.75rem]">{feedback.content}</span>
			</Card>
		{/each}
	{:else if feedbacks.length === 0}
		<span>No Feedback yet</span>
	{:else}
		{#each Array(6) as _, i (i)}
			<Loader
				class_="aspect-video w-full md:w-[calc(33.333%-0.5rem)] justify-between"
			></Loader>
		{/each}
	{/if}
</div>
