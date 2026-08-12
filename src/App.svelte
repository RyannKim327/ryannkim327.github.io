<script lang="ts">
  import Router from "svelte-spa-router";
  import routes from "./routes";
  import AnimatedBackground from "./components/animated-background.svelte";
</script>

<div
  class="relative h-dvh w-dvw bg-white text-[#000000] dark:bg-black dark:text-white"
>
  <AnimatedBackground />
  <div class="absolute h-full w-full scrollbar-none">
    <Router {routes} useHash={true} />
  </div>
</div>
