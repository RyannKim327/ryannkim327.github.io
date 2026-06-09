<script lang="ts">
	import Input from "@/components/input.svelte";
	import Textarea from "@/components/textarea.svelte";
	import { post } from "@/lib/fetch";
	import toast from "svelte-french-toast";
	import Footer from "./footer.svelte";
	import Icon from "@/components/icon.svelte";

	let name = $state("");
	let email = $state("");
	let content = $state("");

	async function sendContact() {
		const api = await post("contact/submit", {
			name,
			email,
			content,
		});
		if (api.error) {
			toast(api.error, {
				position: "bottom-right",
			});
		} else {
			toast("Sent to the developer", {
				position: "bottom-right",
			});
		}
	}
</script>

<div
	id="contact"
	class="flex flex-col p-2 pt-[25%] md:pt-[7%] w-full h-full gap-2 overflow-hidden overflow-y-auto snap-start justify-between"
>
	<iframe
		src="https://www.google.com/maps/embed/v1/place?q=Ibabang+Iyam&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
		title="Location"
		loading="lazy"
		allowFullScreen={false}
		class="aspect-video md:aspect-auto md:h-[calc(50%-0.5rem)] w-full dark:grayscale dark:invert transition ease-in delay-100"
	></iframe>
	<div class="flex flex-col flex-1 gap-2">
		<div class="flex w-full gap-2">
			<Input
				name="name"
				bind:value={name}
				placeholder="Full name or Company name"
			/>
			<Input name="email" bind:value={email} placeholder="Email" />
		</div>
		<div class="flex h-25">
			<Textarea
				class="h-full"
				name="content"
				bind:value={content}
				placeholder="Content"
			></Textarea>
		</div>
		<div class="flex w-full justify-between mt-5 p-2">
			<div class="flex items-center gap-1">
				<i
					onclick={() => {
						location.href = "https://fb.me/masterpieceofpaper";
					}}
					class="fa-brands fa-square-facebook text-[2rem]"
				></i>
				<i
					onclick={() => {
						location.href = "https://github.com/RyannKim327";
					}}
					class="fa-brands fa-square-github text-[2rem]"
				></i>
				<i
					onclick={() => {
						location.href = "https://linkedin.com/in/ryannkim327";
					}}
					class="fa-brands fa-square-linkedin text-[2rem]"
				></i>
				<i
					onclick={() => {
						location.href = "https://npmjs.com/~ryannkim327";
					}}
					class="fa-brands fa-npm"
				></i>
			</div>
			<input
				class="dark:bg-[#f0f8ff] dark:text-[#121212] bg-[#121212] text-[#f0f8ff] resize-none px-2 rounded"
				type="submit"
				value="Send Message"
				onclick={sendContact}
			/>
		</div>
	</div>
	<Footer />
</div>
