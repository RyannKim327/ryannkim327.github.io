<script lang="ts">
	export let params: {id: string}

	import Markdown from "@/components/markdown.svelte";
	import HomeButton from "@/components/home-button.svelte"
	import { get } from "@/lib/fetch.ts"
	import { Toaster, toast } from "svelte-french-toast";
	import { onMount } from "svelte"

	let blog = {}

	onMount(async () => {
		const api = await get("blog", {
			id: params.id
		})
		if(api.error){
			toast.error(api.error, {
				position: "bottom-right"
			})
		}else{
			blog = api.data
		}
	})
</script>

<div
	class="flex flex-wrap p-2 w-full h-full gap-2 overflow-hidden overflow-y-auto snap-start pt-[5%]"
>
	<HomeButton title={blog.title} description={blog.content} past="/blogs" />
	<div class="w-full h-full overflow-hidden px-5">
		<Markdown content={blog.content}/>
	</div>
	<Toaster />
</div>
