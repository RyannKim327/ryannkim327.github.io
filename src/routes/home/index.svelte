<script lang="ts">
	import Header from "@/components/header.svelte";
	import About from "./about.svelte";
	import Hero from "./hero.svelte";
	import Projects from "./projects.svelte";
	import Blogs from "./blogs.svelte";
	import Contact from "./contact.svelte";

	let y = 0;

	function handleScroll() {
		const height = document.getElementById("main")?.scrollTop ?? 0;
		y = height;
	}
</script>

<svelte onscroll={handleScroll}></svelte>

<div class="px-5 w-full h-full">
	<Header
		scroll={Math.round(
			y / (document.getElementById("main")?.offsetHeight ?? 1),
		)}
	/>
	<div id="main" onscroll={handleScroll} class="h-full w-full overflow-scroll">
		<Hero />
		<About />
		<Projects />
		<Blogs />
		<Contact />
	</div>
</div>
