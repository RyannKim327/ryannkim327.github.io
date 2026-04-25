<script lang="ts">
	import { push } from "svelte-spa-router"
	export let title: string = "Home"
	export let description: string = ""
	export let past: string = "/"
</script>

<svelte:head>
	<title>{title}</title>
	<meta content={description} name="description" />
</svelte:head>

<div class="flex fixed top-0 p-5 pointer-events-none z-10">
	<span
		class="flex flex-row items-center gap-3 p-2 bg-[#f0f8ff] shadow-sm shadow-[#121212] dark:bg-[#252525] rounded-full px-5 pointer-events-auto select-none cursor-pointer"
		onclick={() => {
			push(past)
		}}
	>
		<i class="fa-solid fa-arrow-left text-[0.75rem]"></i>
		<span class="text-[0.75rem]">{title}</span>
	</span>
</div>
