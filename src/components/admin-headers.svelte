<script lang="ts">
	import { push } from "svelte-spa-router";
	import Logo from "@/assets/logo.png";
	import Icon from "@/components/icon.svelte";
	export let page: string = "";

	const pages = [
		{
			type: "fa-solid",
			icon: "fa-pen",
			name: "Poetry",
		},
		{
			type: "fa-solid",
			icon: "fa-rss",
			name: "Blogs",
		},
	];
</script>

<div
	class="flex items-center justify-center py-4 fixed top-[0.25rem] w-full z-10 select-none"
>
	<nav
		class="flex flex-row items-center gap-3 p-2 bg-[#f0f8ff] shadow-sm shadow-[#121212] dark:bg-[#252525] rounded-full px-8"
	>
		<img
			onclick={() => {
				push(page !== "info" ? "/admin" : "/");
			}}
			src={Logo}
			alt="logo"
			class={`aspect-square w-5 drop-shadow-black drop-shadow-xs`}
		/>
		<ul class="flex items-center gap-2">
			{#each pages as p}
				<li
					onclick={() => {
						push(`/admin/${p.name.toLowerCase()}`);
					}}
					class="cursor-pointer"
				>
					<Icon
						type={p.type}
						icon={p.icon}
						name={p.name}
						selected={page.toLowerCase() === p.name.toLowerCase()}
					/>
				</li>
			{/each}
		</ul>
	</nav>
</div>
