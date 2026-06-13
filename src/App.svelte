<script lang="ts">
	import Router from "svelte-spa-router";
	import routes from "./routes";
	import AnimatedBackground from "./components/animated-background.svelte";
</script>

<div
	class="relative h-dvh w-dvw bg-[#fafbff] text-[#111b1c] dark:bg-zinc-950 dark:text-[#fafbff]"
>
	<AnimatedBackground />
	<div class="absolute h-full w-full scrollbar-none">
		<Router {routes} useHash={true} />
	</div>
</div>
