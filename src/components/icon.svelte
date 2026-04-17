<script lang="ts">
	export let icon: string
	export let type: string = "fa-regular"
	export let name: string
	export let selected: boolean = false

</script>

<span class={`flex gap-1 items-center ${selected ? "text-red-500" : ""}`}>
	<span class="p-1 aspect-square rounded">
		<i class={`${type} ${icon}`}></i>
	</span>
	<span class={``}>{name}</span>
</span>
