<script lang="ts">
	export let icon: string;
	export let type: string = "fa-regular";
	export let name: string;
	export let selected: boolean = false;
</script>

<span
	class={`flex gap-1 items-center ${selected ? "text-red-500" : ""} transition-all delay-25 duration-150 ease-in-out`}
>
	<span class="p-1 aspect-square rounded">
		<i class={`${type} ${icon}`}></i>
	</span>
	<span
		class={`${
			selected ? "max-w-xs" : "max-w-0"
		} transition-all duration-75 overflow-hidden inline-block`}
	>
		{name}
	</span>
</span>
