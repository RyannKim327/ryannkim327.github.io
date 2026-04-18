<script lang="ts">
	import Dark from "@/assets/dark.png"
</script>

<div id="hero" class="flex items-center h-full w-full">
	<div class="flex flex-col justify-center items-center md:items-end w-full h-full gap-2 md:gap-5 p-2">
		<h1 class="text-[2em] w-5/6 md:text-[3em] md:w-5/6 text-center md:text-end md:mt-[calc(25%-1rem)]">
      Ryann Kim M. Sesgundo
    </h1>
    <h3 class="text-[0.75em] md:text-[1.75em] text-center md:text-end">
      A Full-Stack Software Developer
    </h3>
  </div>
  <div class="md:flex-col hidden md:flex w-full h-full items-start justify-start p-2">
		<img class={`rounded-md hidden dark:inline h-[calc(75%-0.5rem)] mt-[calc(20%-1rem)]`} src={Dark} alt="">
	</div>
</div>
