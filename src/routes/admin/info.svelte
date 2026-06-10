<script>
	import Input from "@/components/input.svelte";
	import Resume from "@/components/resume.svelte";
	import Textarea from "@/components/textarea.svelte";

	let input = $state("");
	let content = $state("");
</script>

<div class="min-h-screen w-full flex items-center justify-center p-6 pt-20">
	<div
		class="w-full max-w-7xl rounded-2xl border border-zinc-800 bg-zinc-50 dark:bg-zinc-900/70 backdrop-blur-xl shadow-2xl p-8 flex flex-col md:flex-row h-[85vh] gap-8 overflow-hidden"
	>
		<div class="flex flex-col w-full md:w-1/2 gap-6 overflow-hidden">
			<div>
				<h1 class="text-3xl font-bold dark:text-zinc-200">Manage Resume</h1>
				<p class="text-zinc-500 mt-2">Update your professional profile and resume content</p>
			</div>

			<div class="flex flex-col gap-4 flex-1 overflow-hidden">
				<div class="flex flex-col gap-2">
					<label class="text-sm font-medium dark:text-zinc-300"> Profile Summary </label>
					<Input
						class="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 dark:text-white px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-500"
						type="text"
						placeholder="Aspiring Full-Stack Developer..."
						bind:value={input}
					/>
				</div>

				<div class="flex flex-col gap-2 flex-1 overflow-hidden">
					<label class="text-sm font-medium dark:text-zinc-300"> Resume Content (Markdown) </label>
					<Textarea
						class="flex-1 w-full resize-none rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 dark:text-white p-5 outline-none focus:ring-2 focus:ring-zinc-500 custom-scrollbar"
						placeholder="## Experience..."
						bind:value={content}
					/>
				</div>
			</div>

			<div class="flex gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
				<button
					class="flex-1 rounded-2xl bg-zinc-900 dark:bg-zinc-50 py-3 text-sm font-semibold text-zinc-50 dark:text-zinc-950 transition hover:scale-[1.02] hover:bg-zinc-950/50 dark:hover:bg-zinc-50/90 active:scale-[0.98]"
				>
					Save Changes
				</button>
				<button
					class="px-6 rounded-2xl border border-zinc-300 dark:border-zinc-700 text-zinc-500 font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
				>
					Download PDF
				</button>
			</div>
		</div>

		<div
			class="hidden md:flex flex-1 flex-col rounded-2xl border border-dashed border-zinc-700 bg-zinc-300 dark:bg-zinc-800/50 p-8 overflow-hidden"
		>
			<h2 class="text-xs uppercase tracking-widest font-bold text-zinc-500 mb-6">
				Live Preview
			</h2>
			<div class="flex-1 overflow-y-auto custom-scrollbar pr-2">
				<Resume />
			</div>
		</div>
	</div>
</div>
