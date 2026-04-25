<script lang="ts">
  import Dark from "@/assets/dark.png";
  import Light from "@/assets/light.png";
</script>

<div
  id="hero"
  class="flex items-center h-full w-full snap-start pt-[25%] md:pt-[10%]"
>
  <div
    class="flex flex-col justify-center items-center md:items-end w-full h-full gap-3 md:gap-5 p-2"
  >
    <h1
      class="text-[2.5em] w-5/6 md:text-[calc(3rem)] md:w-5/6 text-center md:text-end"
    >
      Ryann Kim M. Sesgundo
    </h1>
    <h3 class="text-[1.25em] md:text-[1.75em] text-center md:text-end">
      A Full-Stack Software Developer
    </h3>
  </div>
  <div
    class="md:flex md:flex-col hidden justify-center h-full gap-5 text-[2rem] p-2"
  >
    <p class="baybayin-font">ᜇ</p>
    <p class="baybayin-font">ᜌ</p>
    <p class="baybayin-font">ᜈ᜔</p>
    <p class="baybayin-font">ᜃᜒ</p>
    <p class="baybayin-font">ᜋ᜔</p>
  </div>
  <div
    class="md:flex-col hidden md:flex w-full h-full items-start justify-start p-2 -mt-20"
  >
    <img
      class={`rounded-md hidden dark:inline h-[calc(50%-0.5rem)] mt-[calc(25%+1rem)]`}
      src={Dark}
      alt=""
    />
    <img
      class={`rounded-md inline dark:hidden h-[calc(75%-0.5rem)] mt-[calc(25%+1rem)]`}
      src={Light}
      alt=""
    />
  </div>
</div>
