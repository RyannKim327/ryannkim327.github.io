<script lang="ts">
	import Input from "@/components/input.svelte";
	let file_code = ""
	let code = ""
	let file: FileList | null = null
	
	$: if (file && file.length > 0) {
		console.log(file[0]);
	}
</script>

<div class="flex w-full pt-25 h-full overflow-hidden gap-3 items-center justify-center">
	<div
		class="flex flex-col w-full h-full md:w-[calc(66.666%-0.5rem)] items-center justify-start"
	>
		<div class="flex w-full gap-2 justify-center">
			<Input
				class_="flex-1 w-full"
				name="file_code"
				placeholder="File Code"
				bind:value={file_code}
			/>
			<Input
				class_="flex-1 w-full"
				name="code"
				type="password"
				placeholder="Admin Code"
				bind:value={code}
			/>
		</div>
		<div class="flex w-full gap-2 justify-center">
			{#if file && file.length > 0}
				<p>{file[0].name}</p>
			{/if}
			<Input
				class_="flex-1 w-full"
				name="file"
				placeholder="Upload File"
				bind:file={file}
				type="file"
			/>
			</div>
	</div>
</div>
