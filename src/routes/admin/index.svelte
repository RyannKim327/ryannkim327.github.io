<script lang="ts">
	import AdminHeaders from "@/components/admin-headers.svelte";
	import { Toaster } from "svelte-french-toast";
	import Input from "@/components/input.svelte";
	import Info from "@/routes/admin/info.svelte";
	import Poetry from "@/routes/admin/poetry.svelte";
	import Blogs from "@/routes/admin/blogs.svelte";
	import { session } from "@/lib/storage";
	import Upload from "./upload.svelte";
	import Project from "./project.svelte";
	import Experiences from "./experiences.svelte";
	import Contact from "./contact.svelte";

	let { params } = $props<{ params: { page?: string } }>();

	const secret_code = "santol@mangga.com";
	const pages: Record<string, any> = {
		info: Info,
		experience: Experiences,
		poetry: Poetry,
		blogs: Blogs,
		upload: Upload,
		project: Project,
		contacts: Contact,
	};

	let admin = $state(session("token") ?? "");
	let verified = $state(admin === secret_code);

	function setAdmin() {
		session("token", admin);
		verified = admin === secret_code;
	}
</script>

<div class="h-full w-full flex items-center justify-center p-6">
	{#if verified}
		<div class="w-full h-full relative">
			<AdminHeaders page={params?.page ?? "info"} />
			<div class="pt-4 w-full h-full overflow-hidden">
				<svelte:component this={pages[params?.page ?? "info"] ?? Info} />
			</div>
			<Toaster />
		</div>
	{:else}
		<div
			class="w-full max-w-md rounded-2xl border border-zinc-300 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-2xl shadow-2xl p-8"
		>
			<div class="mb-8 text-center">
				<div
					class="h-16 w-16 bg-zinc-900 dark:bg-zinc-50 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg transition-transform hover:rotate-12"
				>
					<i class="fa-solid fa-lock text-2xl text-zinc-50 dark:text-zinc-950"
					></i>
				</div>
				<h1 class="text-3xl font-black dark:text-zinc-100 tracking-tight">
					Admin Access
				</h1>
				<p class="text-zinc-500 mt-3 font-medium">
					Please enter your secret code to continue
				</p>
			</div>

			<div class="flex flex-col gap-5">
				<div class="flex flex-col gap-2">
					<label
						class="text-xs font-black uppercase tracking-[0.2em] text-zinc-400 ml-1"
					>
						Security Token
					</label>
					<Input
						name="admin-code"
						type="password"
						bind:value={admin}
						placeholder="••••••••••••"
						class="w-full rounded-xl border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 dark:text-white p-4 focus:ring-2 focus:ring-zinc-500 outline-none transition-all shadow-inner"
					/>
				</div>

				<button
					onclick={setAdmin}
					class="w-full rounded-2xl bg-zinc-900 dark:bg-zinc-50 py-4 text-sm font-bold text-zinc-50 dark:text-zinc-950 uppercase tracking-widest transition-all hover:scale-[1.02] hover:bg-zinc-800 dark:hover:bg-white active:scale-[0.98] shadow-xl"
				>
					Verify Identity
				</button>
			</div>

			<div class="mt-8 text-center">
				<p
					class="text-[10px] uppercase tracking-widest text-zinc-400 font-bold"
				>
					Secure Environment &copy; 2026
				</p>
			</div>
		</div>
	{/if}
</div>
