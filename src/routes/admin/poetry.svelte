<script lang="ts">
	import Input from "@/components/input.svelte";
	import Textarea from "@/components/textarea.svelte";

	let title = $state("");
	let code = $state("");
	let content = $state("");
</script>

<div class="flex w-full pt-25">
	<div class="flex flex-col w-full md:w-[calc(66.666%-0.5rem)]">
		<div class="flex w-full gap-2 justify-center">
			<Input
				class_="flex-1 w-full"
				name="title"
				placeholder="Title"
				value={title}
			/>
			<Input
				class_="flex-1 w-full"
				name="code"
				placeholder="Admin Code"
				value={code}
			/>
		</div>
		<Textarea h="h-100" value={content} name="content" placeholder="Content" />
	</div>
</div>
