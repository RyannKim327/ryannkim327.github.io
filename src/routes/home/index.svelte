<script lang="ts">
	import Header from "@/components/header.svelte";
	import About from "./about.svelte";
	import Hero from "./hero.svelte";

	let y = 0;

	function handleScroll() {
		y = document.getElementById("main")?.scrollTop ?? 0;
	}
</script>

<svelte onscroll={handleScroll} />

<div class="px-5 w-full h-full">
	<Header />
	<span class="fixed bottom-1">{y}</span>
	<div id="main" onscroll={handleScroll} class="h-full w-full overflow-scroll">
		<Hero />
		<About />
	</div>
</div>
