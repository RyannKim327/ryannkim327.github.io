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

<div class="h-full w-full flex items-center justify-center p-6 pt-20">
	<div
		class="w-full max-w-7xl rounded-2xl border border-zinc-800 bg-zinc-50 dark:bg-zinc-900/70 backdrop-blur-xl shadow-2xl p-8 flex flex-col md:flex-row h-[85vh] gap-8 overflow-hidden"
	>
		<!-- FORM SECTION -->
		<div class="flex flex-col w-full md:w-2/5 gap-6 overflow-hidden">
			<div>
				<h2 class="text-3xl font-bold dark:text-zinc-200">
					{editing && editIndex !== null
						? "Update Experience"
						: "Add Experience"}
				</h2>
				<p class="text-zinc-500 mt-2">Manage your professional journey</p>
			</div>

			<div class="flex-1 space-y-5 overflow-y-auto pr-2 custom-scrollbar">
				<div class="flex flex-col gap-2">
					<label class="text-sm font-medium dark:text-zinc-300"> Title </label>
					<input
						bind:value={form.title}
						type="text"
						placeholder="Beginner's Path"
						class="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 dark:text-white px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-500"
					/>
				</div>

				<div class="grid grid-cols-2 gap-4">
					<div class="flex flex-col gap-2">
						<label class="text-sm font-medium dark:text-zinc-300"> Year </label>
						<input
							bind:value={form.year}
							type="number"
							disabled={true}
							class="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900 opacity-50 dark:text-white px-4 py-3 outline-none"
						/>
					</div>

					<div class="flex flex-col gap-2">
						<label class="text-sm font-medium dark:text-zinc-300">
							Admin Code
						</label>
						<input
							bind:value={code}
							type="password"
							placeholder=""
							class="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 dark:text-white px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-500"
						/>
					</div>
				</div>

				<div class="flex flex-col gap-2">
					<label class="text-sm font-medium dark:text-zinc-300">
						Font Awesome Icon
					</label>
					<input
						bind:value={form.icon}
						type="text"
						placeholder="fa-solid fa-hourglass"
						class="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 dark:text-white px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-500"
					/>
				</div>

				<div class="space-y-4">
					<div class="flex items-center justify-between">
						<label class="text-sm font-medium dark:text-zinc-300">
							Content
						</label>
						<button
							onclick={addContentField}
							type="button"
							class="rounded-lg bg-zinc-200 dark:bg-zinc-700 px-3 py-1 text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-600 transition"
						>
							Add Point
						</button>
					</div>

					<div class="space-y-3">
						{#each form.content as item, index}
							<div class="flex gap-2 group">
								<input
									bind:value={form.content[index]}
									type="text"
									placeholder="Experience detail..."
									class="flex-1 rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 dark:text-white px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-500"
								/>
								<button
									onclick={() => removeContentField(index)}
									type="button"
									class="rounded-xl bg-red-500/10 hover:bg-red-500/20 px-4 text-red-500 transition-colors"
								>
									✕
								</button>
							</div>
						{/each}
					</div>
				</div>
			</div>

			<div
				class="flex gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800"
			>
				<button
					disabled={sending}
					onclick={saveExperience}
					class="flex-1 rounded-2xl bg-zinc-900 dark:bg-zinc-50 py-3 text-sm font-semibold text-zinc-50 dark:text-zinc-950 transition hover:scale-[1.02] hover:bg-zinc-950/50 dark:hover:bg-zinc-50/90 active:scale-[0.98]"
				>
					{editing && editIndex !== null ? "Update" : "Save"}
				</button>
				<button
					disabled={sending}
					onclick={resetForm}
					type="button"
					class="px-6 rounded-2xl border border-zinc-300 dark:border-zinc-700 text-zinc-500 font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
				>
					Reset
				</button>
			</div>
		</div>

		<!-- LIST SECTION -->
		<div
			class="flex-1 flex flex-col gap-5 overflow-y-auto pr-2 custom-scrollbar"
		>
			<h3
				class="text-xs uppercase tracking-[0.2em] font-black text-zinc-400 dark:text-zinc-600 mb-2"
			>
				History
			</h3>
			{#each experiences as exp, index}
				<div
					class="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/30 dark:bg-zinc-800/30 p-6 transition-all hover:border-zinc-400 dark:hover:border-zinc-600 group"
				>
					<div class="mb-4 flex items-start justify-between">
						<div class="flex items-center gap-4">
							<div
								class="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-800 text-2xl text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-200 transition-colors"
							>
								<i class={exp.icon}></i>
							</div>

							<div>
								<h3 class="text-xl font-bold dark:text-zinc-100">
									{exp.title}
								</h3>
								<p class="text-sm font-medium text-zinc-500">
									{exp.year}
								</p>
							</div>
						</div>

						<button
							disabled={sending}
							onclick={() => editExperience(index)}
							class="rounded-xl bg-yellow-500/10 hover:bg-yellow-500/20 px-4 py-2 text-xs font-bold uppercase tracking-wider text-yellow-600 dark:text-yellow-400 transition"
						>
							Edit
						</button>
					</div>

					<ul class="space-y-3">
						{#each exp.content as item}
							<li
								class="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed"
							>
								<div
									class="mt-1.5 h-1.5 w-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700 flex-shrink-0"
								></div>
								<span>{item}</span>
							</li>
						{/each}
					</ul>
				</div>
			{/each}
		</div>
	</div>
</div>
