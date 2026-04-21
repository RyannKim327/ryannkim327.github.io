<script lang="ts">
	import Input from "@/components/input.svelte";
	import Textarea from "@/components/textarea.svelte";

	let title = $state("");
	let code = $state("");
	let content = $state("");
</script>

<div class="flex w-full pt-25 h-full overflow-hidden gap-3">
	<div
		class="flex flex-col w-full h-full md:w-[calc(66.666%-0.5rem)] items-center justify-start"
	>
		<div class="flex w-full gap-2 justify-center">
			<Input
				class_="flex-1 w-full"
				name="title"
				placeholder="Title"
				bind:value={title}
			/>
			<Input
				class_="flex-1 w-full"
				name="code"
				placeholder="Admin Code"
				bind:value={code}
			/>
		</div>
		<Textarea
			class_="flex-1"
			bind:value={content}
			name="content"
			placeholder="Content"
		/>
		<div class="flex w-full">
			<input
				class="border border-solid border-white p-1"
				type="submit"
				value="Post Poem"
			/>
		</div>
	</div>
	<div class="hidden md:flex flex-col h-full w-[calc(33.333%-0.5rem)] px-1">
		<span>{title}</span>
		<hr />
		<div class="flex flex-col overflow-y-auto h-full">
			{#each content.split("\n") as c}
				<span>
					{c}
				</span>
			{/each}
		</div>
	</div>
</div>
