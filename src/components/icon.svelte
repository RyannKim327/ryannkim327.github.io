<script lang="ts">
	let {
		icon,
		type = "fa-regular",
		name,
		selected = false,
	}: {
		icon: string;
		type?: string;
		name: string;
		selected?: boolean;
	} = $props();
</script>

<span
	class={`flex gap-1 items-center justify-center ${selected ? "bg-[#babebd]/75 dark:bg-[#555555] px-2 rounded-full text-zinc-800 dark:text-zinc-200" : "text-zinc-500"} transition-all delay-25 duration-150 ease-in-out`}
>
	<span class="p-[2px] aspect-square rounded">
		<i class={`aspect-square ${type} ${icon} `}></i>
	</span>
	<span
		class={`${
			selected ? "max-w-xs font-bold" : "max-w-0"
		} items-center h-full transition-all duration-75 overflow-hidden inline-block text-[0.75rem]`}
	>
		{name}
	</span>
</span>
