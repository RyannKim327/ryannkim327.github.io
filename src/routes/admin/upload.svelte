<script lang="ts">
	import Input from "@/components/input.svelte";
	import { adminPostMultipart } from "@/lib/fetch";
	import toast from "svelte-french-toast";
	let file_code = $state("");
	let code = $state("");
	let file = $state<FileList | null>(null);
	let sending = $state(false);

	$effect(() => {
		if (file && file.length > 0) {
			console.log(file[0]);
		}
	});

	async function uploadFile() {
		if (!file) {
			toast("No file selected");
			return;
		}

		const formData = new FormData();
		formData.append("file", file[0] as Blob);

		sending = true;
		const res = await adminPostMultipart("upload/submit", code, formData);
		console.error(res);
		sending = false;

		if (res?.error) {
			toast(res.error);
		}

		if (res?.from.description) {
			toast(res.from.description);
			sending = false;
			return;
		}

		const file_ = res?.from.result;
		if (file_.video) {
			file_code = file_.video.file_id;
		} else if (file_.document) {
			file_code = file_.document.file_id;
		} else {
			const f = file_.photo;
			file_code = f[f.length - 1].file_id;
		}
	}
</script>

<div class="min-h-screen w-full flex items-center justify-center p-6">
	<div
		class="w-full max-w-2xl rounded border border-zinc-800 backdrop-blur-xl shadow-2xl p-8"
	>
		<div class="mb-8 text-center">
			<h1 class="text-3xl font-bold text-white">Upload File</h1>
			<p class="text-zinc-400 mt-2">Securely upload and manage your files</p>
		</div>

		<div class="flex flex-col gap-6">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
				<div class="flex flex-col gap-2">
					<label class="text-sm font-medium text-zinc-300"> File Code </label>
					<Input
						class="w-full rounded-xl border border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-500 focus:ring-2 focus:ring-blue-500"
						name="file_code"
						placeholder=""
						bind:value={file_code}
					/>
				</div>

				<div class="flex flex-col gap-2">
					<label class="text-sm font-medium text-zinc-300"> Admin Code </label>
					<Input
						class="w-full rounded-xl border border-zinc-700 bg-zinc-800 text-white placeholder:text-zinc-500 focus:ring-2 focus:ring-blue-500"
						name="code"
						type="password"
						placeholder=""
						bind:value={code}
					/>
				</div>
			</div>

			<div
				class="flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed border-zinc-700 bg-zinc-800/50 p-8 transition hover:border-white hover:bg-zinc-800"
			>
				<div class="text-center">
					<h2 class="text-lg font-semibold text-white">Choose a file</h2>
					<p class="text-sm text-zinc-400">
						Drag and drop or browse from your device
					</p>
				</div>

				<Input
					class="w-full cursor-pointer rounded-xl border border-zinc-700 bg-zinc-900 text-zinc-300 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-600 file:px-4 file:py-2 file:text-white hover:file:bg-blue-500"
					name="file"
					placeholder=""
					type="file"
					bind:file
				/>

				{#if file && file.length > 0}
					<div
						class="w-full rounded-xl bg-zinc-900 px-4 py-3 text-sm text-zinc-300 border border-zinc-700"
					>
						Selected File:
						<span class="font-medium text-white">
							{file[0].name}
						</span>
					</div>
				{/if}
			</div>

			<!-- Submit -->
			<button
				onclick={uploadFile}
				class="rounded-2xl bg-white px-6 py-2.5 text-sm font-semibold text-black transition hover:scale-[1.02] hover:bg-white/90 active:scale-[0.98]"
			>
				Upload File
			</button>
		</div>
	</div>
</div>
