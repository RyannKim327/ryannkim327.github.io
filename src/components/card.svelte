<script lang="ts">
	import type { Snippet } from "svelte";

	let {
		class: className = "",
		onclick = () => {},
		children,
	}: {
		class?: string;
		onclick?: () => void;
		children?: Snippet;
	} = $props();
</script>

<div
	class={`flex flex-col bg-[#f0f8ff] dark:bg-[#212121] shadow-sm shadow-black dark:shadow-white p-2 rounded ${className}`}
	{onclick}
>
	{@render children?.()}
</div>
