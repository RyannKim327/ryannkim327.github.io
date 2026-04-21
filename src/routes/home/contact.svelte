<script lang="ts">
	import Input from "@/components/input.svelte";
	import Textarea from "@/components/textarea.svelte";
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
			<Input name="name" value="" placeholder="Full name or Company name" />
			<Input name="email" value="" placeholder="Email" />
		</div>
		<Textarea name="content" value="" placeholder="Content"></Textarea>
		<div class="flex w-full justify-end">
			<input
				class="bg-[#f0f8ff] text-[#121212] dark:bg-[#121212] dark:text-[#f0f8ff] resize-none px-2 rounded"
				type="submit"
				value="Send Message"
			/>
		</div>
	</div>
</div>
