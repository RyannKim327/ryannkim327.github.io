<script lang="ts">
	import Router from "svelte-spa-router";
	import routes from "./routes";
</script>

<div
	class="h-dvh w-dvw bg-[#fafbff] text-[#111b1c] dark:bg-zinc-950 dark:text-[#fafbff]"
>
	<div class="h-full w-full">
		<Router {routes} useHash={true} />
	</div>
</div>
