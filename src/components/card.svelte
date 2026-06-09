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
	class={`flex flex-col bg-[#f0f8ff] dark:bg-[#212121] shadow-sm shadow-black dark:shadow-white p-2 rounded transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-blue-500/20 dark:hover:shadow-blue-400/30 ${className}`}
	{onclick}
>
	{@render children?.()}
</div>
