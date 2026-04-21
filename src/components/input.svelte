<script lang="ts">
	export let placeholder: string;
	export let name: string;
	export let type: string = "text";
	export let value: string = "";
</script>

<div class="relative w-full border border-white custom-input m-2 p-2 rounded">
	<label
		class="dark:bg-[#111b1c] absolute transition-all duration-200 px-2 select-none"
		for={name}
	>
		{placeholder}
	</label>

	<input
		class="w-full outline-none"
		id={name}
		{type}
		onchange={(v: EventTarget) => {
			value = v.target.value;
		}}
		placeholder=" "
		bind:value
	/>
</div>

<style>
	.custom-input:has(input:not(:placeholder-shown)) label {
		font-size: 0.75rem;
		top: -0.5rem;
	}

	/* Optional: also float on focus */
	.custom-input:has(input:focus) label {
		font-size: 0.75rem;
		top: -0.5rem;
	}
</style>
