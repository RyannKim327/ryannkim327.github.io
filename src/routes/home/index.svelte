<script lang="ts">
	import Header from "@/components/header.svelte";
	import About from "./about.svelte";
	import Hero from "./hero.svelte";
	import Projects from "./projects.svelte";
	import Blogs from "./blogs.svelte";
	import Contact from "./contact.svelte";
	import Feedback from "./feedback.svelte";
	import { Toaster } from "svelte-french-toast";
	import Ai from "@/components/ai.svelte";

	let y = 0;

	function handleScroll() {
		const height = document.getElementById("main")?.scrollTop ?? 0;
		y = height;
	}
	addEventListener("keydown", (ev: KeyboardEvent) => {
		const key = ev.keyCode;
		const keys = {
			65: "about",
			66: "blogs",
			67: "contact",
			72: "hero",
			80: "projects",
		};
		if (
			document.activeElement?.tagName.toLowerCase() !== "input" &&
			document.activeElement?.tagName.toLowerCase() !== "textarea"
		) {
			const p = document.getElementById(keys[key] ?? "");
			if (p) {
				p.scrollIntoView({
					behavior: "smooth",
				});
			}
		}
	});
</script>

<svelte onscroll={handleScroll}></svelte>

<div class="px-5 w-full h-full">
	<Header
		scroll={Math.round(
			y / (document.getElementById("main")?.offsetHeight ?? 1),
		)}
	/>
	<div
		id="main"
		onscroll={handleScroll}
		class="h-full w-full overflow-scroll snap-y snap-mandatory"
	>
		<Hero />
		<About />
		<Projects />
		<Blogs />
		<Feedback />
		<Contact />
		<Toaster />
		<Ai />
	</div>
</div>
