<script lang="ts">
	let {
		placeholder,
		name,
		value = $bindable(),
		class: class_ = "",
		h = "h-full",
	}: {
		placeholder: string;
		name: string;
		value: string;
		class?: string;
		h?: string;
	} = $props();
</script>

<div
	class={`${class_} relative w-full border border-white custom-input m-2 p-2 rounded`}
>
	<label
		class=" absolute transition-all duration-200 px-2 select-none"
		for={name}
	>
		{placeholder}
	</label>

	<textarea
		class={`w-full outline-none flex-1 ${h} resize-none`}
		id={name}
		oninput={(v: Event) => {
			value = (v.target as HTMLTextAreaElement).value;
		}}
		placeholder=" "
		bind:value
	></textarea>
</div>

<style>
	.custom-input:has(textarea:not(:placeholder-shown)) label {
		font-size: 0.75rem;
		top: -0.5rem;
	}

	/* Optional: also float on focus */
	.custom-input:has(textarea:focus) label {
		font-size: 0.75rem;
		top: -0.5rem;
	}
</style>
