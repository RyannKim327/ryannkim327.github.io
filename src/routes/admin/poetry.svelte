<script lang="ts">
	import Input from "@/components/input.svelte";
	import Textarea from "@/components/textarea.svelte";
	import { adminPost } from "@/lib/fetch";
	import { storage } from "@/lib/storage";
	import toast from "svelte-french-toast";

	let init = false;
	let title: string = $state(storage("title") ?? "") as string;
	let code = $state("");
	let content: string = $state(storage("content") ?? "") as string;

	$effect(() => {
		if (!init) {
			storage("title", title);
			storage("content", content);
		}
	});

	async function submit() {
		const data = await adminPost("poetry/submit", code, {
			title,
			content: content.trim().split("\n"),
		});
		if (data.error) {
			toast.error(data.error, {
				position: "bottom-right",
			});
		} else {
			storage("title", "");
			storage("content", "");
			title = "";
			content = "";
			code = "";
			toast.success("Poem Posted successfully", {
				position: "bottom-right",
			});
		}
	}
</script>

<div class="flex w-full pt-25 h-full overflow-hidden gap-3">
	<div
		class="flex flex-col w-full h-full md:w-[calc(66.666%-0.5rem)] items-center justify-start"
	>
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
		<div class="flex w-full flex-1">
			<Textarea
				class_="flex-1"
				bind:value={content}
				name="content"
				placeholder="Content"
			/>
		</div>
		<div class="flex w-full justify-end p-2">
			<input
				class="border border-solid border-white p-1"
				type="submit"
				onclick={submit}
				value="Post Poem"
			/>
		</div>
	</div>
	<div class="hidden md:flex flex-col h-full w-[calc(33.333%-0.5rem)] px-1">
		<span>{title === "" ? "Title" : title}</span>
		<hr />
		<div class="flex flex-col overflow-y-auto h-full">
			{#each content.split("\n") as c}
				<span>
					{c}
				</span>
			{/each}
		</div>
	</div>
</div>
