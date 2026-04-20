<script lang="ts">
	import AdminHeaders from "@/components/admin-headers.svelte";
	import Info from "@/routes/admin/info.svelte";
	import Poetry from "./poetry.svelte";
	import Blogs from "./blogs.svelte";

	export let params: { page?: string };

	const pages: Record<string, any> = {
		info: Info,
		poetry: Poetry,
		blogs: Blogs,
	};
</script>

<div>
	<AdminHeaders page={params?.page ?? "info"} />
	<svelte:component this={pages[params?.page ?? "info"] ?? Info} />
</div>
