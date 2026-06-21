<script lang="ts">
  import Dark from "@/assets/dark2.png";
  import Light from "@/assets/light2.png";
  import { fly, fade } from "svelte/transition";
  import { onMount } from "svelte";

  let visible = $state(false);
  onMount(() => {
    visible = true;
  });
</script>

<div
  id="hero"
  class="relative flex items-center justify-center shrink-0 h-full w-full pt-[25%] md:pt-[5%] overflow-hidden snap-center"
>
  <div
    class="flex flex-col justify-center items-center md:items-end w-full md:w-[calc(45%-0.5rem)] h-full gap-3 md:gap-5 p-2 z-1"
  >
    {#if visible}
      <h1
        in:fly={{ x: 50, duration: 500, delay: 800 }}
        class="text-[2.5em] w-5/6 md:text-[calc(3rem)] md:w-4/6 text-center md:text-end font-bold"
      >
        Ryann Kim M. Sesgundo
      </h1>
      <h3
        in:fly={{ x: 50, duration: 500, delay: 800 }}
        class="text-[1.25em] md:text-[1.75em] text-center md:text-end opacity-80"
      >
        A Full-Stack Software Developer
      </h3>
    {/if}
  </div>

  <div
    class="md:flex md:flex-col hidden justify-center h-full gap-10 text-[2rem] p-2 z-5"
  >
    {#if visible}
      <p in:fade={{ delay: 300 }} class="baybayin-font">ᜇ</p>
      <p in:fade={{ delay: 400 }} class="baybayin-font">ᜌ</p>
      <p in:fade={{ delay: 500 }} class="baybayin-font">ᜈ᜔</p>
      <p in:fade={{ delay: 600 }} class="baybayin-font">ᜃᜒ</p>
      <p in:fade={{ delay: 700 }} class="baybayin-font">ᜋ᜔</p>
    {/if}
  </div>

  <div
    class="md:flex-col hidden md:flex w-full md:w-[calc(45%-0.5rem)] h-full items-start justify-center p-2 z-1"
  >
    {#if visible}
      <div
        in:fly={{ x: -50, duration: 500, delay: 800 }}
        class="flex items-center h-full w-full"
      >
        <img
          class={`rounded-md hidden dark:inline h-[calc(25rem)] drop-shadow-2xl`}
          src={Dark}
          alt=""
        />
        <img
          class={`rounded-md inline dark:hidden h-[calc(25rem)] drop-shadow-2xl`}
          src={Light}
          alt=""
        />
      </div>
    {/if}
  </div>
</div>
