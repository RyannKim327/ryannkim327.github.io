<script lang="ts">
	import Logo from "@/assets/logo.png";
	import Icon from "@/components/icon.svelte";

	export let scroll: number = 0;

	function scrollme(id: string) {
		const p = document.getElementById(id);
		if (p) {
			p.scrollIntoView({
				behavior: "smooth",
			});
		}
	}
</script>

<div class="flex items-center justify-center py-4 fixed top-[0.25rem] w-full">
	<nav
		class="flex flex-row items-center gap-3 p-2 bg-[#252525] rounded-full px-8"
	>
		<img
			onclick={() => {
				scrollme("hero");
			}}
			src={Logo}
			alt="logo"
			class="aspect-square w-12"
		/>
		<ul class="flex items-center gap-2">
			<li
				onclick={() => {
					scrollme("about");
				}}
				class="cursor-pointer"
			>
				<Icon icon="fa-user" name="About" selected={scroll === 1} />
			</li>
			<li
				onclick={() => {
					scrollme("projects");
				}}
				class="cursor-pointer"
			>
				<Icon icon="fa-folder-open" name="Projects" selected={scroll === 2} />
			</li>
			<li
				onclick={() => {
					scrollme("blogs");
				}}
				class="cursor-pointer"
			>
				<Icon
					icon="fa-rss"
					type="fa-solid"
					name="Blogs"
					selected={scroll === 3}
				/>
			</li>
			<li
				onclick={() => {
					scrollme("contact");
				}}
				class="cursor-pointer"
			>
				<Icon icon="fa-address-card" name="Contact" selected={scroll === 4} />
			</li>
		</ul>
	</nav>
</div>
