<script lang="ts">
	import { onMount } from "svelte";
	import { get } from "@/lib/fetch.ts";

	let certi = [];
	let exps = [];

	onMount(async () => {
		const data = await get("certs");
		certi = data.data;

		const expr = await get("experiences");
		exps = expr.data.reverse();
	});
</script>

<div
	id="about"
	class="flex flex-row p-2 pt-[10%] w-full h-full gap-5 overflow-hidden"
>
	<div class="w-[calc(50%-0.5rem)] overflow-y-auto">
		<!-- TODO: Left Side -->
		{#each exps as exp}
			<li>{exp.year}</li>
			{#each exp.content as content}
				<li>{content}</li>
			{/each}
		{/each}
	</div>
	<div
		class="flex flex-row flex-wrap gap-2 w-[calc(50%-0.5rem)] overflow-y-auto"
	>
		<!-- TODO: For Right Side -->
		{#each certi as cert}
			<div class="flex flex-wrap aspect-video w-[calc(50%-1rem)] rounded">
				<img class="h-full w-full" src={cert.url} alt={cert.source} />
			</div>
		{/each}
		<div class="flex flex-wrap aspect-video w-[calc(50%-1rem)] rounded">
			<span>Click to see more</span>
		</div>
	</div>
</div>
