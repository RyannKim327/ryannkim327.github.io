<script lang="ts">
	export let class_: string = ""

</script>

<div class={`flex flex-col dark:bg-[#212121] p-2 rounded ${class_}`}>
	<slot />	
</div>
