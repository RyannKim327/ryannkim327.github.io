<script lang="ts">
	import AdminHeaders from "@/components/admin-headers.svelte";
	import { Toaster } from "svelte-french-toast";
	import Input from "@/components/input.svelte";
	import Info from "@/routes/admin/info.svelte";
	import Poetry from "@/routes/admin/poetry.svelte";
	import Blogs from "@/routes/admin/blogs.svelte";
	import { session } from "@/lib/storage";
	import Upload from "./upload.svelte";

	export let params: { page?: string };

	const secret_code = "santol@mangga.com";
	const pages: Record<string, any> = {
		info: Info,
		poetry: Poetry,
		blogs: Blogs,
		upload: Upload,
	};

	let admin = session("token") ?? "";
	let verified = admin === secret_code;

	function setAdmin() {
		session("token", admin);
		verified = admin === secret_code;
	}
</script>

<div class="w-full h-full">
	{#if verified}
		<AdminHeaders page={params?.page ?? "info"} />
		<svelte:component this={pages[params?.page ?? "info"] ?? Info} />
		<Toaster />
	{:else}
		<div class="flex items-center justify-center w-full h-full">
			<div
				class="flex flex-col w-[25%] bg-[#121212] items-center justify-center gap-2"
			>
				<Input name="admin-code" bind:value={admin} placeholder="Admin Code" />
				<input type="submit" value="Submit code" onclick={setAdmin} />
			</div>
		</div>
	{/if}
</div>
