<script lang="ts">
	import Profile from "@/assets/light.png";
	import { get } from "@/lib/fetch";
	import { onMount } from "svelte";
	let name = "";
	let role = "";
	let info = {};
	export let email;
	export let phone;
	export let location;

	onMount(async () => {
		const { data: a } = await get("dev");
		name = `${a.first_name} ${a.middle_name[0]}. ${a.last_name}`;
		role = a.position;
		info = a;
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
				{info.about}
			</p>
		</section>

		<section>
			<h2 class="text-xs font-bold uppercase tracking-wide text-black/70 mb-1">
				Experience
			</h2>

			<div class="flex flex-col gap-2 text-xs">
				{#each info.job as job}
					<div>
						<p class="font-semibold">{job.title} - {job.company}</p>
						<p class="text-black/70">{job.year}</p>
						<p class="text-black/80">
							{job.description}
						</p>
					</div>
				{/each}
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

			<div class="flex flex-col gap-2 text-xs">
				{#each info.skills as skill}
					<div>
						<p class="font-semibold">{skill.header}</p>
						<p class="text-black/70">{skill.content.join(", ")}</p>
					</div>
				{/each}
			</div>
		</section>
	</div>
</div>
