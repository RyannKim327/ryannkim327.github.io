<script lang="ts">
	import Header from "@/components/header.svelte";
	import About from "./about.svelte";
	import Hero from "./hero.svelte";
	import Projects from "./projects.svelte";
	import Blogs from "./blogs.svelte";
	import Contact from "./contact.svelte";
	import Feedback from "./feedback.svelte";
	import toast, { Toaster } from "svelte-french-toast";
	import Ai from "@/components/ai.svelte";
	import { onMount } from "svelte";
	import { get } from "@/lib/fetch";

	let y = $state(0);

	let blogs = $state<Record<string, any>[]>([]);
	let categories = $state<string[]>([]);
	let certificates = $state<Record<string, any>[]>([]);
	let experiences = $state<Record<string, any>[]>([]);
	let feedback = $state<Record<string, any>[]>([]);
	let projects = $state<Record<string, any>[]>([]);

	function handleScroll() {
		const height = document.getElementById("main")?.scrollTop ?? 0;
		y = height;
	}

	$effect(() => {
		const handleKeydown = (ev: KeyboardEvent) => {
			const key = ev.keyCode;
			const keys: Record<number, string> = {
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
		};

		window.addEventListener("keydown", handleKeydown);
		return () => window.removeEventListener("keydown", handleKeydown);
	});

	onMount(async () => {
		try {
			const [b, c, e, f, p] = await Promise.all([
				get("blog"),
				get("certs"),
				get("experiences"),
				get("feedback"),
				get("projects"),
			]);

			const programs = p.data.projects.sort(
				(a: Record<string, any>, b: Record<string, any>) =>
					a.name.localeCompare(b.name),
			);

			blogs = b.data;
			categories = ["all", ...p.data.categories];
			certificates = c.data;
			experiences = e.data;
			feedback = f.data;

			projects = programs;
		} catch (err: any) {
			toast.error(err.toString(), {
				position: "bottom-right",
			});
		}
	});
</script>

<svelte:window onscroll={handleScroll} />

<div class="px-5 w-full h-full">
	<Header
		scroll={Math.round(
			y / (document.getElementById("main")?.offsetHeight ?? 1),
		)}
	/>
	<div
		id="main"
		onscroll={handleScroll}
		class="h-full w-full overflow-hidden overflow-y-scroll snap-y snap-mandatory"
	>
		<Hero />
		<About exps={experiences} certi={certificates} />
		<Projects {projects} totalProjects={projects} {categories} />
		<Blogs {blogs} />
		<Feedback feedbacks={feedback} />
		<Contact />
		<Toaster />
		<Ai {projects} expr={experiences} {blogs} />
	</div>
	<Toaster />
</div>
