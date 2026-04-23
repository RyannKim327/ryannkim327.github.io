<script lang="ts">
	import { onMount } from "svelte";
	import { get, retrieval } from "@/lib/fetch.ts";
	import Loader from "@/components/loader.svelte";
	import Card from "@/components/card.svelte";
	import toast from "svelte-french-toast";

	let categories: string[] = [];
	let projects: Record<string, any>[] = [];
	let totalProjects: Record<string, any>[] = [];
	let active = "all";

	onMount(async () => {
		const api = await get("projects");

		if (api.error) {
			toast.error(api.error, {
				position: "bottom-right",
			});
		} else {
			const programs = api.data.projects.sort(
				(a: Record<string, any>, b: Record<string, any>) =>
					a.name.localeCompare(b.name),
			);
			categories = ["all", ...api.data.categories];
			totalProjects = programs;
			filter("all");
		}
	});

	function filter(category: string) {
		active = category.toLowerCase();
		projects = totalProjects.filter((proj: Record<string, any>) =>
			active === "all" ? true : proj.category.includes(active.toLowerCase()),
		);
	}
</script>

<div
	id="projects"
	class="flex flex-col p-2 pt-[25%] md:pt-[10%] h-full w-full overflow-y-auto snap-start"
>
	<div
		class="flex gap-2 items-center md:justify-center my-5 py-3 overflow-x-auto"
	>
		{#each categories as category}
			<li
				onclick={() => {
					filter(category);
				}}
				class={`select-none cursor-pointer ${active === category.toLowerCase() ? "border border-black dark:border-white border-solid" : "bg-[#f0f8ff] dark:bg-[#313131]"} px-2 rounded list-none text-[0.80em]`}
			>
				{#if category.length <= 3 && category !== "all"}
					{category.toUpperCase()}
				{:else}
					{category[0].toUpperCase()}{category.substring(1)}
				{/if}
			</li>
		{/each}
	</div>
	<div class="flex flex-wrap w-full gap-2">
		{#if projects.length > 0}
			{#each projects as project}
				<Card
					class_="relative aspect-video w-full md:w-[calc(33.333%-0.5rem)] rounded overflow-hidden !p-0 group"
				>
					<img
						class="absolute w-full h-full md:grayscale group-hover:grayscale-0"
						src={retrieval("retrieve", { file: project.img ?? "" })}
						alt=""
					/>
					<span
						class="absolute z-1 bottom-0 left-0 right-0 bg-[#212121]/50 p-2 md:opacity-0 group-hover:opacity-100 transition-opacity delay-75"
					>
						{project.name}
					</span>
				</Card>
			{/each}
		{:else}
			{#each Array(6) as _, i (i)}
				<Loader class_="aspect-video w-full md:w-[calc(33.333%-0.5rem)]"
				></Loader>
			{/each}
		{/if}
	</div>
</div>
