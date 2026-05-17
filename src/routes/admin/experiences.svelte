<script lang="ts">
	import { onMount } from "svelte";
	import { adminPut, get } from "@/lib/fetch";
	import toast from "svelte-french-toast";

	type Experience = {
		title: string;
		year: number;
		icon: string;
		content: string[];
	};

	let experiences: Experience[] = $state([]);
	let code: string = $state("");

	let form: Experience = $state({
		title: "",
		year: new Date().getFullYear(),
		icon: "",
		content: [""],
	});

	let editing: boolean = $state(false);
	let editIndex: number | null = $state(null);
	let sending: boolean = $state(false);

	function addContentField() {
		form.content = [...form.content, ""];
	}

	function removeContentField(index: number) {
		form.content = form.content.filter((_, i) => i !== index);
	}

	async function saveExperience() {
		console.log("Sending");
		if (!form.title.trim()) return;

		if (editing && editIndex !== null) {
			sending = true;
			// TODO: To update a certain index
			experiences[editIndex] = form;
			experiences.reverse();

			const expResponse = await adminPut("experiences", code, experiences);
			if (expResponse.error) {
				toast(expResponse.error, {
					position: "bottom-right",
				});
				sending = false;
				experiences.reverse();
				return;
			}
			toast("Updated", {
				position: "bottom-right",
			});
			sending = false;
			experiences.reverse();
		}
		resetForm();
	}

	function editExperience(index: number) {
		const exp = experiences[index];
		form = { ...exp };
		editIndex = index;
	}

	function resetForm() {
		const currentYear = new Date().getFullYear();
		const current: Experience[] = experiences.filter((exp: Experience) => {
			return exp.year == currentYear;
		});

		if (current.length > 0) {
			form = current[0];
			editing = true;
			editIndex = 0;
		} else {
			form = {
				title: "",
				year: new Date().getFullYear(),
				icon: "",
				content: [""],
			};
			editing = false;
			editIndex = null;
		}
	}

	onMount(async () => {
		const { data } = await get("experiences");
		experiences = data.reverse();

		const currentYear = new Date().getFullYear();
		const current: Experience[] = experiences.filter((exp: Experience) => {
			return exp.year == currentYear;
		});

		if (current.length > 0) {
			form = current[0];
			editing = true;
			editIndex = 0;
		}
	});
</script>

<div class="h-full bg-zinc-950 text-white p-6 pt-20">
	<div class="flex w-full h-full gap-6">
		<div
			class="h-full w-[calc(50%-1rem)] rounded-2xl border border-zinc-800 bg-zinc-900 p-5 overflow-hidden"
		>
			<h2 class="mb-5 text-2xl font-bold">
				{editing && editIndex !== null ? "Update Experience" : "Add Experience"}
			</h2>

			<div class="flex-1 max-h-[calc(90%-0.5rem)] space-y-4 overflow-y-auto">
				<div>
					<label class="mb-2 block text-sm text-zinc-400"> Title </label>

					<input
						bind:value={form.title}
						type="text"
						placeholder="Beginner's Path"
						class="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none transition focus:border-cyan-500"
					/>
				</div>

				<div class="flex flex-row w-full gap-5">
					<div class="flex-1">
						<label class="mb-2 block text-sm text-zinc-400"> Year </label>

						<input
							bind:value={form.year}
							type="number"
							disabled={true}
							class="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none transition focus:border-cyan-500"
						/>
					</div>

					<div class="flex-1">
						<label class="mb-2 block text-sm text-zinc-400"> Admin Code </label>

						<input
							bind:value={code}
							type="password"
							class="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none transition focus:border-cyan-500"
						/>
					</div>
				</div>

				<div>
					<label class="mb-2 block text-sm text-zinc-400">
						Font Awesome Icon
					</label>

					<input
						bind:value={form.icon}
						type="text"
						placeholder="fa-solid fa-hourglass"
						class="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none transition focus:border-cyan-500"
					/>
				</div>

				<div>
					<div class="mb-3 flex items-center justify-between">
						<label class="text-sm text-zinc-400"> Content </label>

						<button
							onclick={addContentField}
							type="button"
							class="rounded-lg bg-cyan-500 px-3 py-1 text-sm font-medium text-black"
						>
							Add
						</button>
					</div>

					<div class="space-y-3">
						{#each form.content as item, index}
							<div class="flex gap-2">
								<input
									bind:value={form.content[index]}
									type="text"
									placeholder="Experience detail..."
									class="flex-1 rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 outline-none transition focus:border-cyan-500"
								/>

								<button
									onclick={() => removeContentField(index)}
									type="button"
									class="rounded-xl bg-red-500/20 px-4 text-red-400"
								>
									✕
								</button>
							</div>
						{/each}
					</div>
				</div>

				<div class="flex gap-3 pt-3">
					<button
						disabled={sending}
						onclick={saveExperience}
						class="flex-1 rounded-xl bg-cyan-500 py-3 font-semibold text-black transition hover:bg-cyan-400"
					>
						{editing && editIndex !== null ? "Update" : "Save"}
					</button>

					<button
						disabled={sending}
						onclick={resetForm}
						type="button"
						class="rounded-xl border border-zinc-700 px-5"
					>
						Reset
					</button>
				</div>
			</div>
		</div>

		<div class="flex flex-col w-[calc(50%-1rem)] h-full overflow-y-auto gap-5">
			{#each experiences as exp, index}
				<div
					class="rounded-2xl border border-zinc-800 bg-zinc-900 p-5 transition hover:border-cyan-500 w-full transition-all delay-75 ease-in-out"
				>
					<div class="mb-4 flex items-start justify-between">
						<div class="flex items-center gap-4">
							<div
								class="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl text-cyan-400"
							>
								<i class={exp.icon}></i>
							</div>

							<div>
								<h3 class="text-xl font-bold">
									{exp.title}
								</h3>

								<p class="text-sm text-zinc-400">
									{exp.year}
								</p>
							</div>
						</div>

						<div class="flex gap-2">
							<button
								disabled={sending}
								onclick={() => editExperience(index)}
								class="rounded-lg bg-yellow-500/10 px-4 py-2 text-sm text-yellow-400 transition hover:bg-yellow-500/20"
							>
								Edit
							</button>
						</div>
					</div>

					<ul class="space-y-2">
						{#each exp.content as item}
							<li class="flex items-start gap-3 text-zinc-300">
								<div class="mt-2 h-2 w-2 rounded-full bg-cyan-400"></div>
								<span>{item}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</div>
