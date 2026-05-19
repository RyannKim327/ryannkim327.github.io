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

<div class="flex items-center justify-center h-full w-full px-6 py-12">
	<div class="max-w-4xl mx-auto">
		<form
			on:submit|preventDefault={submitProject}
			class="border border-neutral-300 dark:border-neutral-800 p-8 space-y-8"
		>
			<div>
				<h1 class="text-3xl font-semibold">Upload Project</h1>

				<p class="text-sm text-neutral-500 mt-1">
					Add details about your project before publishing.
				</p>
			</div>

			<div class="grid md:grid-cols-2 gap-5">
				<div class="space-y-2">
					<label class="text-sm text-neutral-500"> Project Name </label>

					<input
						bind:value={title}
						placeholder="My Portfolio"
						class="w-full border border-neutral-300 dark:border-neutral-800 px-4 py-3 bg-transparent outline-none focus:border-black dark:focus:border-white"
					/>
				</div>

				<!-- Link -->
				<div class="space-y-2">
					<label class="text-sm text-neutral-500"> Admin Code </label>

					<input
						bind:value={code}
						placeholder=""
						type="password"
						class="w-full border border-neutral-300 dark:border-neutral-800 px-4 py-3 bg-transparent outline-none focus:border-black dark:focus:border-white"
					/>
				</div>

				<!-- Image -->
				<div class="space-y-2">
					<label class="text-sm text-neutral-500"> Cover Image </label>

					<input
						bind:value={imageUrl}
						placeholder="https://image-url.com"
						class="w-full border border-neutral-300 dark:border-neutral-800 px-4 py-3 bg-transparent outline-none focus:border-black dark:focus:border-white"
					/>
				</div>
				<div class="space-y-2">
					<label class="text-sm text-neutral-500"> Project Link </label>

					<input
						bind:value={link}
						placeholder="https://..."
						class="w-full border border-neutral-300 dark:border-neutral-800 px-4 py-3 bg-transparent outline-none focus:border-black dark:focus:border-white"
					/>
				</div>
				<!-- Tags -->
				<div class="md:col-span-2 space-y-2">
					<label class="text-sm text-neutral-500"> Tags </label>

					<input
						bind:value={tags}
						placeholder="svelte, ui, tailwind"
						class="w-full border border-neutral-300 dark:border-neutral-800 px-4 py-3 bg-transparent outline-none focus:border-black dark:focus:border-white"
					/>
				</div>

				<!-- Description -->
				<div class="md:col-span-2 space-y-2">
					<label class="text-sm text-neutral-500"> Description </label>

					<textarea
						bind:value={description}
						rows="6"
						placeholder="Describe your project..."
						class="w-full resize-none border border-neutral-300 dark:border-neutral-800 px-4 py-3 bg-transparent outline-none focus:border-black dark:focus:border-white"
					/>
				</div>
			</div>

			<button
				type="submit"
				class="px-6 py-3 border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
			>
				Publish Project
			</button>
		</form>
	</div>
	<Toaster />
</div>
