<script lang="ts">
	import Card from "@/components/card.svelte"
	import HomeButton from "@/components/home-button.svelte"
	import { get } from "@/lib/fetch.ts"
	import { onMount } from  "svelte"
	import { Toaster, toast } from "svelte-french-toast"

	let certs = []
	let pages = 1
	let page = 1
	
	onMount(async () => {
		const api = await get("certs", {
			limit: 6,
			page: page
		})
		if(api.error){
			toast.error(api.error, {
				position: "bottom-right"
			})
		}else{
			certs = api.data
			pages = api.pages
		}
	})

	async function changepage(p: number) {
		page = p;
		const data = await get("certs", {
			page: page,
			limit: 6,
		});
		pages = data.pages;
		certs = data.data;
	}

</script>

<div
	class="flex flex-wrap p-2 w-full h-full gap-2 overflow-hidden overflow-y-auto snap-start pt-[5%]"
>
	<HomeButton title="Certificates" description="Lists of Ryann Kim's certifications" past="/" />
	<div class="flex flex-wrap gap-5 py-[2%] p-5">
		{#each certs as cert}
			<Card
				class_="flex flex-wrap aspect-video w-full md:w-[calc(33.333%-1rem)] rounded !p-0"
				>
				<img class="h-full w-full" src={cert.url} alt={cert.source} />
			</Card>
		{/each}
	</div>
	<div class="flex fixed z-10 bottom-0 left-0 right-0 justify-center p-4">
		<div
			class="flex gap-2 bg-[#f0f8ff]/75 dark:bg-[#121212]/75 shadow shadow-[#252525] backdrop-blur-xs rounded-full p-2 px-5"
		>
			<span
				class="cursor-pointer select-none flex items-center justify-center"
				onclick={() => {
					changepage(page > 1 ? page - 1 : 1);
				}}>Prev</span
			>
			{#each Array(pages) as _, p}
				<span
					onclick={() => {
						changepage(p + 1);
					}}
					class={`${p + 1 === page ? "dark:bg-[#555555]" : ""} flex items-center justify-center text-center rounded-full aspect-square w-7 h-7 cursor-pointer select-none`}
				>
					{p + 1}
				</span>
			{/each}
			<span
				class="cursor-pointer select-none flex items-center justify-center"
				onclick={() => {
					changepage(page < pages ? page + 1 : pages);
				}}>Next</span
			>
		</div>
	</div>
	<Toaster />
</div>
