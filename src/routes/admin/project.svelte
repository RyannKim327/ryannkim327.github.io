<script lang="ts">
	import Input from "@/components/input.svelte";

	let title = $state("");
	let imageUrl = $state("");
	let description = $state("");
	let tags = $state("");

	function submitProject() {
		// handle submit logic here
		console.log({ title, imageUrl, description, tags });
	}
</script>

<div class="min-h-screen flex items-center justify-center px-4">
	<form
		class="w-full max-w-lg space-y-5 border border-neutral-300 dark:border-neutral-800 p-6 rounded-none"
		on:submit|preventDefault={submitProject}
	>
		<h1 class="text-xl font-semibold tracking-wide">Upload Project</h1>
		<script lang="ts">
			import Input from "@/components/input.svelte";

			let title = $state("");
			let imageUrl = $state("");
			let description = $state("");
			let tags = $state("");
			function submitProject() {}
		</script>
		<!-- Title -->
		<div class="space-y-1">
			<label class="text-sm text-neutral-600 dark:text-neutral-400">Title</label
			>
			<input
				bind:value={title}
				placeholder="Project title"
				class="w-full bg-transparent border border-neutral-300 dark:border-neutral-800 px-3 py-2 outline-none focus:border-black dark:focus:border-white"
			/>
		</div>

		<!-- Image URL -->
		<div class="space-y-1">
			<label class="text-sm text-neutral-600 dark:text-neutral-400"
				>Image URL</label
			>
			<input
				bind:value={imageUrl}
				placeholder="https://..."
				class="w-full bg-transparent border border-neutral-300 dark:border-neutral-800 px-3 py-2 outline-none focus:border-black dark:focus:border-white"
			/>
		</div>

		<!-- Description -->
		<div class="space-y-1">
			<label class="text-sm text-neutral-600 dark:text-neutral-400"
				>Description</label
			>
			<textarea
				bind:value={description}
				placeholder="Describe your project..."
				rows="4"
				class="w-full bg-transparent border border-neutral-300 dark:border-neutral-800 px-3 py-2 outline-none focus:border-black dark:focus:border-white resize-none"
			></textarea>
		</div>

		<!-- Tags -->
		<div class="space-y-1">
			<label class="text-sm text-neutral-600 dark:text-neutral-400">Tags</label>
			<input
				bind:value={tags}
				placeholder="e.g. svelte, tailwind, ui"
				class="w-full bg-transparent border border-neutral-300 dark:border-neutral-800 px-3 py-2 outline-none focus:border-black dark:focus:border-white"
			/>
		</div>

		<!-- Submit -->
		<button
			type="submit"
			class="w-full border border-black dark:border-white py-2 text-sm tracking-wide hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
		>
			Publish Project
		</button>
	</form>
</div>
