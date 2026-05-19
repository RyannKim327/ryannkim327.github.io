<script lang="ts">
	import Input from "@/components/input.svelte";
	import Textarea from "@/components/textarea.svelte";
	import Markdown from "@/components/markdown.svelte";

	let title = $state("");
	let code = $state("");
	let content = $state("");

	let tags = $state("");
	let media = $state("");

	async function submitBlog() {
		// TODO: Soon to edit
	}
</script>

<div class="flex items-center justify-center h-full w-full pt-5">
	<div
		class="flex h-[calc(80%-1rem)] w-[calc(75%-1rem)] max-w-7xl flex-col overflow-hidden rounded border border-zinc-500"
	>
		<div class="border-b border-white/10 px-6 py-5">
			<h1
				class="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-50"
			>
				Create Blog Post
			</h1>
			<p class="mt-1 text-sm text-zinc-500">
				Write markdown content with live preview
			</p>
		</div>

		<div class="flex flex-1 flex-col gap-5 overflow-hidden p-5">
			<div class="grid grid-cols-1 gap-3 md:grid-cols-2">
				<Input
					class="border-zinc-500 text-zinc-950 dark:text-zinc-50 transition focus-within:borde-zinc-700 focus-within:bg-white/[0.04]"
					name="title"
					placeholder="Title"
					bind:value={title}
				/>

				<Input
					class="border-zinc-500 text-zinc-950 dark:text-zinc-50 transition focus-within:borde-zinc-700 focus-within:bg-white/[0.04]"
					name="code"
					type="password"
					placeholder="Admin Code"
					bind:value={code}
				/>
			</div>

			<div class="grid grid-cols-1 gap-3 md:grid-cols-2">
				<Input
					class="border-zinc-500 text-zinc-950 dark:text-zinc-50 transition focus-within:borde-zinc-700 focus-within:bg-white/[0.04]"
					name="tags"
					placeholder="Tags"
					bind:value={tags}
				/>

				<Input
					class="border-zinc-500 text-zinc-950 dark:text-zinc-50 transition focus-within:borde-zinc-700 focus-within:bg-white/[0.04]"
					name="media"
					placeholder="Media Files"
					bind:value={media}
				/>
			</div>

			<div class="grid flex-1 grid-cols-1 gap-4 overflow-hidden lg:grid-cols-2">
				<div
					class="flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-500 bg-zinc-200 dark:bg-zinc-900"
				>
					<div
						class="flex items-center justify-between border-b border-zinc-500 px-5 py-4"
					>
						<h2
							class="text-sm font-medium tracking-wide text-zinc-950 dark:text-zinc-50"
						>
							Markdown Editor
						</h2>

						<div
							class="rounded-full bg-zinc-500 px-3 py-1 text-xs text-zinc-950 dark:text-zinc-50"
						>
							LIVE
						</div>
					</div>

					<Textarea
						class="h-full border-0 resize-none bg-transparent p-5 text-sm text-zinc-950 dark:text-zinc-50 outline-none placeholder:text-white/20"
						name="content"
						placeholder=""
						bind:value={content}
					/>
				</div>

				<div
					class="flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-500 bg-zinc-200 dark:bg-zinc-900"
				>
					<div
						class="border-b border-zinc-500 px-5 py-4 text-sm font-medium tracking-wide text-zinc-950 dark:text-zinc-50"
					>
						Preview
					</div>

					<div class="prose prose-invert max-w-none flex-1 overflow-y-auto p-6">
						<Markdown {content} />
					</div>
				</div>
			</div>

			<div class="flex items-center justify-end gap-3 pt-1">
				<button
					class="rounded-2xl border border-zinc-500 bg-transparent px-5 py-2.5 text-sm font-medium text-zinc-500 transition hover:bg-white/[0.06]"
				>
					Save Draft
				</button>

				<button
					onclick={() => {
						submitBlog();
					}}
					class="rounded-2xl bg-zinc-700 dark:bg-zinc-300 px-6 py-2.5 text-sm font-semibold text-zinc-50 dark:text-zinc-950 transition hover:scale-[1.02] hover:bg-white/90 active:scale-[0.98]"
				>
					Post Blog
				</button>
			</div>
		</div>
	</div>
</div>
