<script lang="ts">
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

			toast.success("Poem posted successfully", {
				position: "bottom-right",
			});
		}
	}
</script>

<div class="h-full w-full flex items-center justify-center p-6 overflow-hidden">
	<div class="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6">
		<!-- EDITOR -->
		<div
			class="space-y-5 border border-neutral-300 dark:border-neutral-800 p-6"
		>
			<h1 class="text-xl font-semibold tracking-wide">Create Poem</h1>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
				<input
					bind:value={title}
					placeholder="Title"
					class="w-full border border-neutral-300 dark:border-neutral-800 bg-transparent px-3 py-2 outline-none focus:border-black dark:focus:border-white"
				/>

				<input
					type="password"
					bind:value={code}
					placeholder="Admin Code"
					class="w-full border border-neutral-300 dark:border-neutral-800 bg-transparent px-3 py-2 outline-none focus:border-black dark:focus:border-white"
				/>
			</div>

			<textarea
				bind:value={content}
				placeholder="Write your poem..."
				class="w-full min-h-[300px] border border-neutral-300 dark:border-neutral-800 bg-transparent p-4 outline-none resize-none focus:border-black dark:focus:border-white"
			></textarea>

			<div class="flex justify-end">
				<button
					onclick={submit}
					class="border border-black dark:border-white px-5 py-2 text-sm hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
				>
					Publish Poem
				</button>
			</div>
		</div>

		<!-- PREVIEW -->
		<div
			class="border border-neutral-300 dark:border-neutral-800 p-6 overflow-hidden"
		>
			<h2 class="text-sm uppercase tracking-wide text-neutral-500 mb-4">
				Preview
			</h2>

			<h1 class="text-2xl font-semibold mb-6">
				{title || "Untitled Poem"}
			</h1>

			<div
				class="space-y-2 text-neutral-700 dark:text-neutral-300 leading-7 overflow-y-scroll h-[300px]"
			>
				{#each content.split("\n") as line}
					<p>{line === "" ? "\u00A0" : line}</p>
				{/each}
			</div>
		</div>
	</div>
</div>
