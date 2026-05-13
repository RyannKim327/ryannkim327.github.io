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

<div class="h-full w-full pt-5">
	<div
		class="mx-auto flex h-[calc(100%-1rem)] max-w-7xl flex-col overflow-hidden rounded border border-white/10"
	>
		<div class="border-b border-white/10 px-6 py-5">
			<h1 class="text-2xl md:text-3xl font-bold text-white">
				Create Blog Post
			</h1>
			<p class="mt-1 text-sm text-white/50">
				Write markdown content with live preview
			</p>
		</div>

		<div class="flex flex-1 flex-col gap-5 overflow-hidden p-5">
			<div class="grid grid-cols-1 gap-3 md:grid-cols-2">
				<Input
					className="bg-white/[0.02] border-white/10 rounded-2xl text-white transition focus-within:border-white/40 focus-within:bg-white/[0.04]"
					name="title"
					placeholder="Title"
					bind:value={title}
				/>

				<Input
					className="bg-white/[0.02] border-white/10 rounded-2xl text-white transition focus-within:border-white/40 focus-within:bg-white/[0.04]"
					name="code"
					type="password"
					placeholder="Admin Code"
					bind:value={code}
				/>
			</div>

			<div class="grid grid-cols-1 gap-3 md:grid-cols-2">
				<Input
					className="bg-white/[0.02] border-white/10 rounded-2xl text-white transition focus-within:border-white/40 focus-within:bg-white/[0.04]"
					name="tags"
					placeholder="Tags"
					bind:value={tags}
				/>

				<Input
					className="bg-white/[0.02] border-white/10 rounded-2xl text-white transition focus-within:border-white/40 focus-within:bg-white/[0.04]"
					name="media"
					placeholder="Media Files"
					bind:value={media}
				/>
			</div>

			<div class="grid flex-1 grid-cols-1 gap-4 overflow-hidden lg:grid-cols-2">
				<div
					class="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]"
				>
					<div
						class="flex items-center justify-between border-b border-white/10 px-5 py-4"
					>
						<h2 class="text-sm font-medium tracking-wide text-white/70">
							Markdown Editor
						</h2>

						<div
							class="rounded-full bg-white/10 px-3 py-1 text-xs text-white/60"
						>
							LIVE
						</div>
					</div>

					<Textarea
						class="h-full w-full flex-1 resize-none border-0 bg-transparent p-5 text-sm leading-7 text-white outline-none placeholder:text-white/20"
						name="content"
						placeholder=""
						bind:value={content}
					/>
				</div>

				<div
					class="flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02]"
				>
					<div
						class="border-b border-white/10 px-5 py-4 text-sm font-medium tracking-wide text-white/70"
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
					class="rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-2.5 text-sm font-medium text-white/70 transition hover:bg-white/[0.06]"
				>
					Save Draft
				</button>

				<button
					onclick={() => {
						submitBlog();
					}}
					class="rounded-2xl bg-white px-6 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-white/90 active:scale-[0.98]"
				>
					Post Blog
				</button>
			</div>
		</div>
	</div>
</div>
