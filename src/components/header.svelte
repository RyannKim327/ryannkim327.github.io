<script lang="ts">
	import Logo from "@/assets/logo.png";
	import Icon from "@/components/icon.svelte";

	let current = "";
</script>

<div class="flex items-center justify-center py-4 fixed top-[0.25rem] w-full">
	<nav
		class="flex flex-row items-center gap-2 p-2 bg-[#252525] rounded-full px-4"
	>
		<img src={Logo} alt="logo" class="aspect-square w-12" />
		<ul class="flex items-center gap-2">
			<li class="cursor-pointer">
				<Icon icon="fa-user" name="About" selected={true} />
			</li>
			<li class="cursor-pointer">
				<Icon icon="fa-folder-open" name="Projects" />
			</li>
			<li class="cursor-pointer">
				<Icon icon="fa-rss" type="fa-solid" name="Blogs" />
			</li>
			<li class="cursor-pointer">
				<Icon icon="fa-address-card" name="Contact" />
			</li>
		</ul>
	</nav>
</div>
