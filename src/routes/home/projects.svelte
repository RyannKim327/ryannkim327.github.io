<script lang="ts">
	import { retrieval } from "@/lib/fetch.ts";
	import Loader from "@/components/loader.svelte";
	import Card from "@/components/card.svelte";

	let {
		categories = ["all"],
		totalProjects = [],
		projects = $bindable([]),
		parseData = false,
	}: {
		categories?: string[];
		totalProjects?: Record<string, any>[];
		projects?: Record<string, any>[];
		parseData?: boolean;
	} = $props();

	let active = $state("all");

	function filter(category: string) {
		active = category.toLowerCase();
		if (active === "all") {
			const withImg = totalProjects.filter((p: Record<string, any>) => p.img);
			const shuffled = [...withImg].sort(() => 0.5 - Math.random());
			projects = shuffled
				.slice(0, 8)
				.sort((a: Record<string, any>, b: Record<string, any>) =>
					a.name.localeCompare(b.name),
				);
		} else {
			projects = totalProjects
				.filter((proj: Record<string, any>) =>
					proj.category.includes(active.toLowerCase()),
				)
				.sort((a: Record<string, any>, b: Record<string, any>) =>
					a.name.localeCompare(b.name),
				);
		}
	}

	$effect(() => {
		if (parseData && active === "all" && totalProjects.length > 0) {
			filter("all");
		}
	});
</script>

<div
	id="projects"
	class="flex flex-col p-2 pt-[25%] md:pt-[10%] h-full w-full overflow-y-auto select-none snap-start"
>
	<div
		class="flex gap-2 items-center md:justify-center py-10 md:p-3 overflow-hidden overflow-x-auto scrollbar-none"
	>
		{#each categories as category}
			<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
			<li
				onclick={() => {
					filter(category);
				}}
				onkeydown={(e) => {
					if (e.key === "Enter" || e.key === " ") filter(category);
				}}
				class={`select-none cursor-pointer ${active === category.toLowerCase() ? "border border-black dark:border-white border-solid" : "bg-zinc-300 dark:bg-[#313131]"} px-2 rounded list-none text-[0.80em]`}
			>
				{#if category.length <= 3 && category !== "all"}
					{category.toUpperCase()}
				{:else if category === "all"}
					Randomized
				{:else}{category[0].toUpperCase()}{category.substring(1)}
				{/if}
			</li>
		{/each}
	</div>
	<div class="flex flex-wrap w-full gap-5 p-5">
		{#if projects.length > 0}
			{#each projects as project}
				<Card
					onclick={() => {
						window.open(project.link, "_blank");
					}}
					class="relative aspect-video w-full md:w-[calc(25%-1rem)] rounded overflow-hidden !p-0 group"
				>
					<img
						class="absolute w-full h-full md:grayscale group-hover:grayscale-0"
						src={retrieval("retrieve", { file: project.img ?? "" })}
						alt=""
					/>
					<span
						class="absolute z-1 bottom-0 left-0 right-0 bg-[#212121]/50 text-white p-2 md:opacity-0 dark:group-hover:opacity-100 group-hover:opacity-100 transition-opacity delay-75"
					>
						{project.name}
					</span>
				</Card>
			{/each}
		{:else}
			{#each Array(6) as _, i (i)}
				<Loader class="aspect-video w-full md:w-[calc(25%-1rem)]"></Loader>
			{/each}
		{/if}
	</div>
</div>
