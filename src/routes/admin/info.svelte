<script>
	import Input from "@/components/input.svelte";
	import Resume from "@/components/resume.svelte";
	import Textarea from "@/components/textarea.svelte";

	let input = $state("");
	let content = $state("");
</script>

<div class="min-h-screen w-full p-6">
	<div
		class="mx-auto flex w-full max-w-7xl gap-4 h-[90vh] overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-xl p-4"
	>
		<!-- LEFT: Editor -->
		<div class="flex flex-col w-full md:w-1/2 gap-4">
			<Input
				class="w-full rounded-xl border border-zinc-700 bg-zinc-800 p-3 text-white outline-none"
				type="text"
				placeholder=""
				bind:value={input}
			/>

			<Textarea
				class="flex-1 w-full resize-none rounded-xl border border-zinc-700 bg-zinc-800 p-4 text-white outline-none"
				placeholder=""
				bind:value={content}
			/>

			<button
				class="self-end rounded-xl bg-blue-600 px-6 py-2 text-white hover:bg-blue-500"
				on:click={downloadResume}
			>
				Download Resume
			</button>
		</div>

		<!-- RIGHT: Resume Component -->
		<div
			class="hidden md:flex w-1/2 justify-center items-start overflow-y-auto"
		>
			<Resume />
		</div>
	</div>
</div>
