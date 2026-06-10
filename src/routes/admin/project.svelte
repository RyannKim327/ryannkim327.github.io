<script lang="ts">
	import Input from "@/components/input.svelte";
	import { adminPost } from "@/lib/fetch";
	import toast, { Toaster } from "svelte-french-toast";

	let title = $state("");
	let code = $state("");
	let imageUrl = $state("");
	let description = $state("");
	let tags = $state("");
	let link = $state("");

	async function submitProject() {
		const api = await adminPost("project/submit", code, {
			name: title,
			img: imageUrl,
			category: tags.split(","),
			link,
			description,
		});
		if (api.error) {
			toast(api.error, {
				position: "bottom-right",
			});
		} else {
			toast("Success", {
				position: "bottom-right",
			});
		}
	}
</script>

<div
	class="h-full w-full flex items-center justify-center p-6 pt-20 overflow-hidden"
>
	<div
		class="w-full h-full max-w-4xl rounded-2xl border border-zinc-800 bg-zinc-50 dark:bg-zinc-900/70 backdrop-blur-xl shadow-2xl p-8 overflow-y-auto"
	>
		<div class="mb-8">
			<h1 class="text-3xl font-bold dark:text-zinc-200">Upload Project</h1>
			<p class="text-zinc-500 mt-2">
				Add details about your project before publishing.
			</p>
		</div>

		<form on:submit|preventDefault={submitProject} class="flex flex-col gap-6">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-5">
				<div class="flex flex-col gap-2">
					<label class="text-sm font-medium dark:text-zinc-300">
						Project Name
					</label>
					<input
						bind:value={title}
						placeholder="My Portfolio"
						class="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 dark:text-white px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-500"
					/>
				</div>

				<div class="flex flex-col gap-2">
					<label class="text-sm font-medium dark:text-zinc-300">
						Admin Code
					</label>
					<input
						bind:value={code}
						type="password"
						placeholder=""
						class="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 dark:text-white px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-500"
					/>
				</div>

				<div class="flex flex-col gap-2">
					<label class="text-sm font-medium dark:text-zinc-300">
						Cover Image
					</label>
					<input
						bind:value={imageUrl}
						placeholder="https://image-url.com"
						class="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 dark:text-white px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-500"
					/>
				</div>

				<div class="flex flex-col gap-2">
					<label class="text-sm font-medium dark:text-zinc-300">
						Project Link
					</label>
					<input
						bind:value={link}
						placeholder="https://..."
						class="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 dark:text-white px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-500"
					/>
				</div>

				<div class="md:col-span-2 flex flex-col gap-2">
					<label class="text-sm font-medium dark:text-zinc-300"> Tags </label>
					<input
						bind:value={tags}
						placeholder="svelte, ui, tailwind"
						class="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 dark:text-white px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-500"
					/>
				</div>

				<div class="md:col-span-2 flex flex-col gap-2">
					<label class="text-sm font-medium dark:text-zinc-300">
						Description
					</label>
					<textarea
						bind:value={description}
						rows="6"
						placeholder="Describe your project..."
						class="w-full resize-none rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 dark:text-white px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-500"
					/>
				</div>
			</div>

			<button
				type="submit"
				class="w-full rounded-2xl bg-zinc-900 dark:bg-zinc-50 px-6 py-3 text-sm font-semibold text-zinc-50 dark:text-zinc-950 transition hover:scale-[1.02] hover:bg-zinc-950/50 dark:hover:bg-zinc-50/90 active:scale-[0.98]"
			>
				Publish Project
			</button>
		</form>
	</div>
	<Toaster />
</div>
