<script lang="ts">
	export let params = {id: number}

	import Input from "@/components/input.svelte";
	import Textarea from "@/components/textarea.svelte";
	import Markdown from "@/components/markdown.svelte";
	import { adminPut, get } from "@/lib/fetch.ts"
	import HomeButton from "@/components/home-button.svelte"
	
	import { Toaster, toast } from "svelte-french-toast"
	import { onMount } from "svelte"

	let title = "";
	let code = "";
	let content = ""

	let tags = "";
	let media = "";
	let time = ""
	
	onMount(async () => {
		const api = await get("blog", {
			id: params.id
		})
		if(api.error){
			toast.error(api.error, {
				position: "bottom-right"
			})
		}else{
			const blog = api.data
			title = blog.title
			content = blog.content
			media = blog.media
			tags = blog.tags
			time = blog.time

		}
	})

</script>

<div class="flex w-full h-full overflow-hidden gap-3">
	<HomeButton title={`Editing ${title}`} past={`/blog/${params.id}`} />

	<div class="flex flex-col w-full h-full items-center justify-start pt-[5%] overflow-y-scroll">
		<div class="flex w-full gap-2 justify-center">
			<Input
				class_="flex-1 w-full"
				name="title"
				placeholder="Title"
				bind:value={title}
			/>
			<Input
				class_="flex-1 w-full"
				name="code"
				type="password"
				placeholder="Admin Code"
				bind:value={code}
			/>
		</div>
		<div class="flex w-full gap-2 justify-center">
			<Input
				class_="flex-1 w-full"
				name="tags"
				placeholder="Tags"
				bind:value={tags}
			/>
			<Input
				class_="flex-1 w-full"
				name="media"
				placeholder="Media Files"
				bind:value={media}
			/>
		</div>
		<div class="flex w-full gap-2 justify-center flex-1 h-full">
			<Textarea
				class_="flex-1 w-full"
				name="content"
				placeholder="Content"
				bind:value={content}
			/>
			<div class="flex-1 w-full h-full p-2 overflow-y-auto">
				<Markdown {content} />
			</div>
		</div>
		<div class="flex w-full items-center justify-end p-2">
			<input
				type="submit"
				value="Post Blog"
				class="border border-[#f0f8ff] border-solid p-1 px-2 rounded"
			/>
		</div>
	</div>
	<Toaster />
</div>
