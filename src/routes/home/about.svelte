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
	class="flex flex-row p-2 pt-[10%] w-full h-full gap-5 overflow-hidden snap-start"
>
	<div class="flex flex-col w-[calc(50%-0.5rem)] overflow-y-auto gap-2">
		{#each exps as exp}
			<div class="flex flex-row gap-2 items-start">
				<span
					class="flex items-center justify-center p-2 rounded-full aspect-square w-10 border border-black dark:border-white border-solid"
				>
					<i class={`${exp.icon}`}></i>
				</span>
				<div
					class="flex flex-col p-2 border border-black dark:border-white border-solid rounded w-full"
				>
					<span>{exp.year}</span>
					{#each exp.content as content}
						<li class="ml-5">{content}</li>
					{/each}
				</div>
			</div>
		{/each}
	</div>
	<div
		class="flex flex-row flex-wrap gap-2 w-[calc(50%-0.5rem)] overflow-y-auto"
	>
		{#each certi as cert}
			<div class="flex flex-wrap aspect-video w-[calc(50%-1rem)] rounded">
				<img class="h-full w-full" src={cert.url} alt={cert.source} />
			</div>
		{/each}
		<div
			class="flex flex-wrap items-center justify-center aspect-video w-[calc(50%-1rem)] rounded"
		>
			<span>Click to see more</span>
		</div>
	</div>
</div>
