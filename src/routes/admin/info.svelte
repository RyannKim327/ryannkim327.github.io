<script>
	import Input from "@/components/input.svelte";
	import Resume from "@/components/resume.svelte";
	import Textarea from "@/components/textarea.svelte";

	let input = $state("");
	let content = $state("");
</script>

<div class="min-h-screen w-full p-6">
	<div
		class="mx-auto flex w-full max-w-7xl gap-4 h-[90vh] overflow-hidden rounded-3xl border border-zinc-500 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900/70 backdrop-blur-xl p-4"
	>
		<div class="flex flex-col w-full md:w-1/2 gap-4">
			<Input
				class="w-full rounded-xl border border-zinc-500 bg-zinc-200 text-black dark:border-zinc-700 dark:bg-zinc-800 p-3 dark:text-white outline-none"
				type="text"
				placeholder=""
				bind:value={input}
			/>

			<Textarea
				class="flex-1 w-full resize-none rounded-xl border border-zinc-500 bg-zinc-200 text-black dark:border-zinc-700 dark:bg-zinc-800 p-4 dark:text-white outline-none"
				placeholder=""
				bind:value={content}
			/>

			<button
				class="self-end rounded-xl bg-zinc-800 text-white dark:bg-zinc-600 px-6 py-2 dark:text-white dark:hover:bg-zinc-900"
			>
				Download Resume
			</button>
		</div>

		<div
			class="hidden md:flex w-1/2 justify-center items-start overflow-y-auto"
		>
			<Resume />
		</div>
	</div>
</div>
