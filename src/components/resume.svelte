<script lang="ts">
	import Profile from "@/assets/light.png";
	import { get } from "@/lib/fetch";
	import { onMount } from "svelte";
	let name = "";
	let role = "";
	export let email;
	export let phone;
	export let location;

	onMount(async () => {
		const { data: a } = await get("dev");
		name = `${a.first_name} ${a.middle_name[0]}. ${a.last_name}`;
		role = a.position;
	});
</script>

<div
	class="w-full max-w-[600px] aspect-[210/297] bg-white text-black shadow-2xl overflow-hidden rounded-xl flex flex-col"
>
	<div
		class="flex items-center justify-between px-6 py-4 border-b border-black/10"
	>
		<div class="flex items-center gap-3">
			<div
				class="w-14 aspect-square overflow-hidden rounded-full border border-black"
			>
				<img src={Profile} alt="Profile" class="w-full h-full object-cover" />
			</div>

			<div class="flex flex-col leading-tight">
				<span class="font-semibold text-sm">{name}</span>
				<span class="text-xs text-black/70">{role}</span>
			</div>
		</div>

		<div class="flex flex-col text-right text-xs font-serif italic">
			<span>{email}</span>
			<span>{phone}</span>
			<span>{location}</span>
		</div>
	</div>

	<div class="flex flex-col gap-4 p-6 text-sm overflow-hidden">
		<section>
			<h2 class="text-xs font-bold uppercase tracking-wide text-black/70 mb-1">
				Summary
			</h2>
			<p class="text-xs text-black/80">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placeholder
				summary text describing the candidate.
			</p>
		</section>

		<section>
			<h2 class="text-xs font-bold uppercase tracking-wide text-black/70 mb-1">
				Experience
			</h2>

			<div class="flex flex-col gap-2 text-xs">
				<div>
					<p class="font-semibold">Job Title - Company Name</p>
					<p class="text-black/70">2023 - Present</p>
					<p class="text-black/80">
						Placeholder description of responsibilities and achievements.
					</p>
				</div>

				<div>
					<p class="font-semibold">Previous Role - Company</p>
					<p class="text-black/70">2021 - 2023</p>
					<p class="text-black/80">
						Placeholder description of previous work experience.
					</p>
				</div>
			</div>
		</section>

		<section>
			<h2 class="text-xs font-bold uppercase tracking-wide text-black/70 mb-1">
				Education
			</h2>

			<div class="flex flex-col gap-2 text-xs">
				<div>
					<p class="font-semibold">Degree - University Name</p>
					<p class="text-black/70">2017 - 2021</p>
					<p class="text-black/80">
						Placeholder for academic background details.
					</p>
				</div>
			</div>
		</section>

		<section>
			<h2 class="text-xs font-bold uppercase tracking-wide text-black/70 mb-1">
				Skills
			</h2>

			<div class="flex flex-wrap gap-2 text-xs">
				<span class="px-2 py-1 border border-black/20 rounded">JavaScript</span>
				<span class="px-2 py-1 border border-black/20 rounded">Svelte</span>
				<span class="px-2 py-1 border border-black/20 rounded">Node.js</span>
				<span class="px-2 py-1 border border-black/20 rounded">UI Design</span>
			</div>
		</section>
	</div>
</div>
