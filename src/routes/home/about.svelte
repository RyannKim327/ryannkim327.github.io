<script lang="ts">
	import { onMount } from "svelte";
	import { get } from "@/lib/fetch.ts";
	import Loader from "@/components/loader.svelte";
	import Card from "@/components/card.svelte";
	import toast from "svelte-french-toast";
	import { push } from "svelte-spa-router";

	let certi: Record<string, any> = [];
	let exps: Record<string, any>[] = [];

	onMount(async () => {
		const data = await get("certs");
		if (certi.error) {
			toast.success(certi.error, {
				position: "bottom-right",
			});
		} else {
			certi = data.data;
		}
		const expr = await get("experiences");
		if (expr.error) {
			toast.error(expr.error, {
				position: "bottom-right",
			});
		} else {
			exps = expr.data.reverse();
		}
	});
</script>

<div
	id="about"
	class="block md:flex md:flex-row p-5 pt-[25%] md:pt-[10%] w-full h-full gap-5 overflow-y-auto md:overflow-hidden snap-start"
>
	<div
		class="flex flex-col w-full md:w-[calc(50%-0.5rem)] overflow-y-auto gap-2"
	>
		{#if exps.length > 0}
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
		{:else}
			{#each Array(3) as _, i (i)}
				<div class="flex flex-row gap-2 items-start">
					<span
						class="flex items-center justify-center p-2 rounded-full aspect-square w-10 border border-black dark:border-white border-solid"
					>
						<span class="aspect-square text-[0.75rem]">i</span>
					</span>
					<div
						class="flex flex-col p-2 border border-black dark:border-white border-solid rounded w-full"
					>
						<span>Loading ...</span>
						<div class="flex flex-col gap-1">
							{#each Array(Math.floor(Math.random() * 5) + 2) as _, i (i)}
								<Loader class_={`rounded-full`}></Loader>
							{/each}
						</div>
					</div>
				</div>
			{/each}
		{/if}
	</div>
	<div
		class="flex flex-row flex-wrap gap-2 w-full md:w-[calc(50%-0.5rem)] overflow-y-auto"
	>
		{#if certi.length > 0}
			{#each certi as cert}
				<Card
					class_="flex flex-wrap aspect-video w-full md:w-[calc(50%-1rem)] rounded !p-0"
				>
					<img class="h-full w-full" src={cert.url} alt={cert.source} />
				</Card>
			{/each}
			<Card
				class_="flex flex-wrap items-center justify-center aspect-video w-full md:w-[calc(50%-1rem)] rounded"
				onclick={() => {
					push("/certificates");
				}}
			>
				<span>Click to see more</span>
			</Card>
		{:else}
			{#each Array(6) as _, i (i)}
				<div
					class="flex flex-wrap aspect-video w-full md:w-[calc(50%-1rem)] rounded"
				>
					<Loader class_="w-full h-full">Loading...</Loader>
				</div>
			{/each}
		{/if}
	</div>
</div>
