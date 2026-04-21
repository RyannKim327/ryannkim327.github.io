<script lang="ts">
	import Input from "@/components/input.svelte";

	let title = $state("");
</script>

<div class="flex w-full pt-25">
	<div>
		<Input name="title" placeholder="Title" value={title} />
	</div>
</div>
