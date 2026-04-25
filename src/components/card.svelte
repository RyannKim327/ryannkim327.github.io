<script lang="ts">
	export let class_: string = "";
	export let onclick = () => {};
</script>

<div
	class={`flex flex-col bg-[#f0f8ff] dark:bg-[#212121] shadow-sm shadow-black dark:shadow-white p-2 rounded ${class_}`}
	{onclick}
>
	<slot />
</div>
