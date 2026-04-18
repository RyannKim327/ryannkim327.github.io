<script lang="ts">
	import { onMount } from "svelte";
	import { get, retrieval } from "@/lib/fetch.ts";

	let categories: string[] = [];
	let projects: Record<string, any>[] = [];
	let totalProjects: Record<string, any>[] = [];
	let active = "all";

	onMount(async () => {
		const api = await get("projects");

		const programs = api.data.projects.sort((a: projects, b: projects) =>
			a.name.localeCompare(b.name),
		);
		categories = ["all", ...api.data.categories];
		totalProjects = programs;
		filter("all");
	});

	function filter(category) {
		active = category.toLowerCase();
		projects = totalProjects.filter((proj: Record<string, any>) =>
			active === "all" ? true : proj.category.includes(active.toLowerCase()),
		);
	}
</script>

<div
	id="projects"
	class="flex flex-col p-2 pt-[10%] h-full w-full overflow-y-auto snap-start"
>
	<div class="flex gap-2 items-center justify-center py-2">
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
		{#each projects as project}
			<div
				class="relative aspect-video w-[calc(33.333%-0.5rem)] rounded overflow-hidden"
			>
				<img
					class="absolute w-full h-full"
					src={retrieval("retrieve", { file: project.img ?? "" })}
					alt=""
				/>
				<span class="absolute z-1 bottom-0 left-0 right-0 bg-[#212121] p-2"
					>{project.name}</span
				>
			</div>
		{/each}
	</div>
</div>
