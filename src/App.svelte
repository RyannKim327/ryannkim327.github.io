<script lang="ts">
	import Router from "svelte-spa-router";
	import routes from "@/routes";
</script>

<div
	class="h-dvh w-dvw bg-[#fafbff] text-[#111b1c] dark:bg-[#111b1c] dark:text-[#fafbff]"
>
	<Router {routes} useHash={true} />
</div>
