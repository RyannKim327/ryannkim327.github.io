<script lang="ts">
	import { onMount } from "svelte"
	import { get } from "@/lib/fetch.ts"
	
	let categories: string[] = []
	let projects: Record<string, any>[] = []
	let totalProjects: Record<string, any>[] = []
	let active = "all"

	onMount(async () => {
		const api = await get("projects")

		const programs = api.data.projects.sort((a: projects, b: projects) =>
      a.name.localeCompare(b.name),
    );
		categories = ["all", ...api.data.categories]
		totalProjects = programs	
		filter("all")
	})

	function filter(category){
		active = category.toLowerCase()
		projects = totalProjects.filter((proj: Record<string, any>) =>
  	active === "all"
    	? true
    	: proj.category.includes(active.toLowerCase())
		)
	}

</script>

<div id="projects" class="flex flex-col p-2 pt-[10%] h-full w-full">
	<div class="flex gap-2 items-center justify-center">
	{#each categories as category}
		<li onclick={() => {filter(category)}} class={`cursor-pointer ${active === category.toLowerCase() ? "" : "bg-[#313131]"} px-2 rounded list-none text-[0.80em]`}>
			{#if category.length <= 3 && category !== "all"}
				{category.toUpperCase()}
			{:else}
				{category[0].toUpperCase()}{category.substring(1)}
			{/if}
		</li>
	{/each}
	</div>
	<div class="flex w-full">
		{#each projects as project}
			<div>
				<span>{project.name}</span>
			</div>
		{/each}
	</div>
</div>
