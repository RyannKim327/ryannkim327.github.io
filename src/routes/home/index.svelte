<script lang="ts">
  import Header from "@/components/header.svelte";
  import About from "./about.svelte";
  import Achievements from "./achievements.svelte";
  import Hero from "./hero.svelte";
  import Projects from "./projects.svelte";
  import Blogs from "./blogs.svelte";
  import Contact from "./contact.svelte";
  import Feedback from "./feedback.svelte";
  import toast, { Toaster } from "svelte-french-toast";
  import Ai from "@/components/ai.svelte";
  import { onMount } from "svelte";
  import { get } from "@/lib/fetch";
  import axios from "axios";
  import AnimatedBackground from "@/components/animated-background.svelte";

  let y = $state(0);

  let blogs = $state<Record<string, any>[]>([]);
  let categories = $state<string[]>([]);
  let certificates = $state<Record<string, any>[]>([]);
  let experiences = $state<Record<string, any>[]>([]);
  let achievements = $state<Record<string, any>[]>([]);
  let feedback = $state<Record<string, any>[]>([]);
  let github = $state<Record<string, any>[]>([]);
  let projects = $state<Record<string, any>[]>([]);
  let resume = $state<Record<string, any>>({});
  let wakatime = $state<Record<string, any>>({});

  let parseData = $state(false);
  let loaded = $state(false);

  let slider;

  function handleScroll() {
    const width = document.getElementById("main")?.scrollLeft ?? 0;
    y = width / 2;
  }

  function handleWheel(event) {
    event.preventDefault();

    slider.scrollBy({
      left: event.deltaY,
      behavior: "smooth",
    });
  }

  $effect(() => {
    const handleKeydown = (ev: KeyboardEvent) => {
      const key = ev.keyCode;
      const keys: Record<number, string> = {
        65: "about",
        66: "blogs",
        67: "contact",
        71: "achievements",
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
      const [b, c, d, e, f, g, p, w] = await Promise.all([
        get("blog?limit=7"),
        get("certs"),
        get("dev"),
        get("experiences"),
        get("feedback"),
        axios.get(
          "https://api.github.com/users/RyannKim327/repos?sort=updated",
        ),
        get("projects"),
        get("wakatime"),
      ]);

      const programs = p.data.projects.sort(
        (a: Record<string, any>, b: Record<string, any>) =>
          a.name.localeCompare(b.name),
      );

      blogs = b.data;
      categories = ["all", ...p.data.categories];
      certificates = c.data;
      experiences = e.data.reverse();
      feedback = f.data;
      github = g.data.slice(12);
      projects = programs;
      resume = d.data;
      wakatime = w.data;
      loaded = true;
      parseData = true;
    } catch (err: any) {
      toast.error(err.toString(), {
        position: "bottom-right",
      });
      parseData = true;
    }
  });
</script>

<svelte:window onscroll={handleScroll} />

<div class="w-full h-full relative">
  <Header
    scroll={Math.round(
      y / (document.getElementById("main")?.offsetHeight ?? 1),
    )}
  />
  <div
    bind:this={slider}
    id="main"
    onwheel={handleWheel}
    onscroll={handleScroll}
    class="flex justify-start h-full w-full overflow-hidden overflow-x-scroll snap-x snap-mandatory px-5 scrollbar-none"
  >
    <Hero />
    <About exps={experiences} certi={certificates} {parseData} />
    <Projects {projects} totalProjects={projects} {categories} {parseData} />
    <Blogs {blogs} {parseData} />
    <Feedback feedbacks={feedback} {parseData} />
    <Contact />
    <Toaster />
    <Ai
      {wakatime}
      {resume}
      projects={github}
      expr={experiences}
      {blogs}
      {achievements}
      parseData={loaded}
    />
  </div>
  <Toaster />
</div>
