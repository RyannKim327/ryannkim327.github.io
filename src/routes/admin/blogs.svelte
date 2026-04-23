<script lang="ts">
	import { marked } from "marked";
	import DOMPurify from "dompurify";
	import Input from "@/components/input.svelte";
	import Textarea from "@/components/textarea.svelte";
	import Markdown from "@/components/markdown.svelte";

	let title = $state("");
	let code = $state("");
	let content = $state("");

	let tags = $state("");
	let media = $state("");
</script>

<div class="flex w-full pt-25 h-full overflow-hidden gap-3">
	<div class="flex flex-col w-full h-full items-center justify-start">
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
			<div class="flex-1 w-full h-full p-2 preview overflow-y-auto">
				<Markdown {content} />
			</div>
		</div>
	</div>
</div>
