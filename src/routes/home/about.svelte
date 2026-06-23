<script lang="ts">
  import Loader from "@/components/loader.svelte";
  import Card from "@/components/card.svelte";
  import { push } from "svelte-spa-router";
  import { retrieval } from "@/lib/fetch";

  let {
    certi = [],
    exps = [],
    parseData = false,
  }: {
    certi?: Record<string, any>[];
    exps?: Record<string, any>[];
    parseData?: boolean;
  } = $props();

  let active = $state("e");
</script>

<div
  id="about"
  class="flex flex-col shrink-0 p-5 pt-[25%] md:pt-[calc(5%+0.5rem)] w-full h-full gap-5 md:overflow-y-auto overflow-hidden snap-center"
>
  <div class="flex md:hidden flex-col w-full overflow-hidden gap-5">
    <div class="flex gap-5 w-full justify-center">
      <li
        onclick={() => {
          active = "e";
        }}
        class={`select-none cursor-pointer ${active === "e" ? "border border-black dark:border-white border-solid" : "bg-zinc-300 dark:bg-[#313131]"} px-2 rounded list-none text-[0.80em]`}
      >
        Experiences
      </li>
      <li
        onclick={() => {
          active = "c";
        }}
        class={`select-none cursor-pointer ${active === "c" ? "border border-black dark:border-white border-solid" : "bg-zinc-300 dark:bg-[#313131]"} px-2 rounded list-none text-[0.80em]`}
      >
        Certificates
      </li>
    </div>
    <div class="flex flex-col overflow-y-auto h-full gap-2 pb-10">
      {#if active === "e"}
        {#if exps.length > 0 && parseData}
          <div class="relative flex flex-col pl-1 gap-0">
            {#each exps as exp, i}
              <div
                class="relative flex flex-row gap-4 items-start pb-6 last:pb-0"
              >
                {#if i < exps.length - 1}
                  <div
                    class="absolute left-5 top-10 bottom-0 w-0.5 bg-black/30 dark:bg-white/30"
                  ></div>
                {/if}
                <span
                  class="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border border-black dark:border-white border-solid bg-white dark:bg-[#131313] shadow-sm transition-transform duration-300 hover:scale-110 flex-shrink-0"
                >
                  <i class={`${exp.icon} text-sm text-black dark:text-white`}
                  ></i>
                </span>
                <div
                  class="flex-1 flex flex-col p-4 border border-black dark:border-white border-solid rounded-xl bg-[#fafbff]/35 dark:bg-[#131313]/35 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#fafbff]/50 dark:hover:bg-[#131313]/50"
                >
                  <span
                    class="font-semibold text-base text-zinc-900 dark:text-white leading-tight"
                    >{exp.title}</span
                  >
                  <span
                    class="inline-flex items-center gap-1.5 px-2.5 py-1 text-[0.72rem] font-medium rounded-full border border-black/30 dark:border-white/30 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 mt-2 w-fit"
                  >
                    <i class="fa-regular fa-calendar-days text-[0.65rem]"></i>
                    {exp.year}
                  </span>
                  <div class="mt-3 space-y-1.5">
                    {#each exp.content as content}
                      <div
                        class="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed"
                      >
                        <span
                          class="text-zinc-400 dark:text-zinc-500 select-none mt-1 text-[0.65rem]"
                          >•</span
                        >
                        <span>{content}</span>
                      </div>
                    {/each}
                  </div>
                </div>
              </div>
            {/each}
          </div>
        {:else}
          <div class="relative flex flex-col pl-1 gap-0">
            {#each Array(3) as _, i (i)}
              <div
                class="relative flex flex-row gap-4 items-start pb-6 last:pb-0 animate-pulse"
              >
                {#if i < 2}
                  <div
                    class="absolute left-5 top-10 bottom-0 w-0.5 bg-zinc-300 dark:bg-zinc-700"
                  ></div>
                {/if}
                <span
                  class="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800/50 flex-shrink-0"
                >
                  <span
                    class="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500"
                  ></span>
                </span>
                <div
                  class="flex-1 flex flex-col p-4 border border-zinc-200 dark:border-zinc-800 border-solid rounded-xl bg-[#fafbff]/15 dark:bg-[#131313]/15 backdrop-blur-md gap-3"
                >
                  <Loader class="h-4 rounded-full w-2/3"></Loader>
                  <Loader class="h-3 rounded-full w-1/4"></Loader>
                  <div class="space-y-2 mt-2">
                    {#each Array(3) as _, j (j)}
                      <Loader class="h-3 rounded-full w-full"></Loader>
                    {/each}
                  </div>
                </div>
              </div>
            {/each}
          </div>
        {/if}
      {:else if certi.length > 0 && parseData}
        {#each certi as cert}
          <Card
            onclick={() => {
              cert.link ? window.open(cert.link, "_blank") : null;
            }}
            class="flex flex-wrap aspect-video w-full md:w-[calc(50%-1rem)] rounded !p-0"
          >
            <img
              class="h-full w-full"
              src={cert.url.startsWith("http")
                ? cert.url
                : retrieval("retrieve", { file: cert.url ?? "" })}
              alt={cert.source}
            />
          </Card>
        {/each}
        <Card
          class="flex flex-wrap items-center justify-center aspect-video w-full md:w-[calc(50%-1rem)] rounded"
          onclick={() => {
            push("/certificates");
          }}
        >
          <span>Click to see more</span>
        </Card>
      {:else}
        {#each Array(6) as _, i (i)}
          <div
            class="flex flex-wrap aspect-video w-full md:w-[calc(50%-1rem)] rounded"
          >
            <Loader class="w-full h-full">Loading...</Loader>
          </div>
        {/each}
      {/if}
    </div>
  </div>
  <div
    class="hidden md:flex flex-row w-full h-full gap-5 overflow-y-auto overflow-x-hidden"
  >
    <div
      class="flex flex-col w-full md:w-[calc(50%-0.5rem)] overflow-y-auto pr-2 gap-0 pt-1"
    >
      {#if exps.length > 0 && parseData}
        <div class="relative flex flex-col pl-1 gap-0 pb-10">
          {#each exps as exp, i}
            <div
              class="relative flex flex-row gap-4 items-start pb-6 last:pb-0"
            >
              {#if i < exps.length - 1}
                <div
                  class="absolute left-5 top-10 bottom-0 w-0.5 bg-black/30 dark:bg-white/30"
                ></div>
              {/if}
              <span
                class="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border border-black dark:border-white border-solid bg-white dark:bg-[#131313] shadow-sm transition-transform duration-300 hover:scale-110 flex-shrink-0"
              >
                <i class={`${exp.icon} text-sm text-black dark:text-white`}></i>
              </span>
              <div
                class="flex-1 flex flex-col p-4 border border-black dark:border-white border-solid rounded-xl bg-[#fafbff]/35 dark:bg-[#131313]/35 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#fafbff]/50 dark:hover:bg-[#131313]/50"
              >
                <span
                  class="font-semibold text-base text-zinc-900 dark:text-white leading-tight"
                  >{exp.title}</span
                >
                <span
                  class="inline-flex items-center gap-1.5 px-2.5 py-1 text-[0.72rem] font-medium rounded-full border border-black/30 dark:border-white/30 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 mt-2 w-fit"
                >
                  <i class="fa-regular fa-calendar-days text-[0.65rem]"></i>
                  {exp.year}
                </span>
                <div class="mt-3 space-y-1.5">
                  {#each exp.content as content}
                    <div
                      class="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed"
                    >
                      <span
                        class="text-zinc-400 dark:text-zinc-500 select-none mt-1 text-[0.65rem]"
                        >•</span
                      >
                      <span>{content}</span>
                    </div>
                  {/each}
                </div>
              </div>
            </div>
          {/each}
        </div>
      {:else}
        <div class="relative flex flex-col pl-1 gap-0">
          {#each Array(3) as _, i (i)}
            <div
              class="relative flex flex-row gap-4 items-start pb-6 last:pb-0 animate-pulse"
            >
              {#if i < 2}
                <div
                  class="absolute left-5 top-10 bottom-0 w-0.5 bg-zinc-300 dark:bg-zinc-700"
                ></div>
              {/if}
              <span
                class="relative z-10 flex items-center justify-center w-10 h-10 rounded-full border border-dashed border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800/50 flex-shrink-0"
              >
                <span
                  class="w-1.5 h-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500"
                ></span>
              </span>
              <div
                class="flex-1 flex flex-col p-4 border border-zinc-200 dark:border-zinc-800 border-solid rounded-xl bg-[#fafbff]/15 dark:bg-[#131313]/15 backdrop-blur-md gap-3"
              >
                <Loader class="h-4 rounded-full w-2/3"></Loader>
                <Loader class="h-3 rounded-full w-1/4"></Loader>
                <div class="space-y-2 mt-2">
                  {#each Array(3) as _, j (j)}
                    <Loader class="h-3 rounded-full w-full"></Loader>
                  {/each}
                </div>
              </div>
            </div>
          {/each}
        </div>
      {/if}
    </div>
    <div
      class="flex flex-row flex-wrap gap-2 w-full md:w-[calc(50%-0.5rem)] overflow-y-auto"
    >
      {#if certi.length > 0 && parseData}
        {#each certi as cert}
          <Card
            onclick={() => {
              cert.link ? window.open(cert.link, "_blank") : null;
            }}
            class="flex flex-wrap aspect-video w-full md:w-[calc(50%-1rem)] rounded !p-0"
          >
            <img
              class="h-full w-full"
              src={cert.url.startsWith("http")
                ? cert.url
                : retrieval("retrieve", { file: cert.url ?? "" })}
              alt={cert.source}
            />
          </Card>
        {/each}
        <Card
          class="flex flex-wrap items-center justify-center aspect-video w-full md:w-[calc(50%-1rem)] rounded"
          onclick={() => {
            push("/certificates");
          }}
        >
          <span>Click to see more</span>
        </Card>
      {:else}
        {#each Array(6) as _, i (i)}
          <div
            class="flex flex-wrap aspect-video w-full md:w-[calc(50%-1rem)] rounded"
          >
            <Loader class="w-full h-full">Loading...</Loader>
          </div>
        {/each}
      {/if}
    </div>
  </div>
</div>
