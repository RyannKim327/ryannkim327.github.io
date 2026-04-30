<script lang="ts">
	export let icon: string;
	export let type: string = "fa-regular";
	export let name: string;
	export let selected: boolean = false;
</script>

<span
	class={`flex gap-1 items-center justify-center ${selected ? "bg-[#babebd]/75 dark:bg-[#555555] px-2 rounded-full text-red-800 dark:text-red-500" : ""} transition-all delay-25 duration-150 ease-in-out`}
>
	<span class="p-[2px] aspect-square rounded h-full">
		<i class={`aspect-square ${type} ${icon} `}></i>
	</span>
	<span
		class={`${
			selected ? "max-w-xs" : "max-w-0"
		} items-center h-full transition-all duration-75 overflow-hidden inline-block text-[0.75rem]`}
	>
		{name}
	</span>
</span>
