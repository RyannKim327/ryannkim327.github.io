<script lang="ts">
  import { retrieval } from "@/lib/fetch.ts";

  let { project } = $props()
  console.log(project)
</script>

<div class="flex flex-col bg-[#babbbc] shadow-sm shadow-[#121212] dark:bg-[#252525] rounded-b-md w-2/3 overflow-hidden">
  <div class="flex flex-col relative justify-center w-full">
    {#if project.img}
      <img
        class="aspect-video w-full"
        src={retrieval("retrieve", { file: project.img ?? "" })} />
    {:else}
      <div
        class="flex items-center justify-center aspect-video w-full"
      >
        <p>Screenshot Soon</p>
      </div>
    {/if}
    <i class="cursor-pointer absolute right-3 top-3 z-1 aspect-square fa-regular fa-x" onClick={() => {project = null}}></i> 
    
    <div class="flex absolute flex-col gap-5 left-0 right-0 bottom-0 bg-[#f0f8ff]/50 dark:bg-[#252525]/50 backdrop-blur-sm p-5">
      <div class="flex flex-col gap-2">
        <p>{project.name}</p>
        <blockquote
          class="max-h-1/3 overflow-y-scroll border-l-2 border-l-white dark:border-l-black dark:borderd-l-white border-l-solid pl-3">
          {project.description}
        </blockquote>
        {#if project.category.length > 0}
          <div class="flex gap-2">
            {#each project.category as category}
              <span class="bg-white dark:bg-[#0c0c0c] shadow-md text-black dark:text-white px-2 rounded-full text-sm">{category}</span>
            {/each}
          </div>
        {/if}
        </div>
      {#if project.link}
        <button
          onclick={() => {
            window.open(project.link, "_blank");
          }}
          class="bg-white/50 dark:bg-[#0c0c0c]/50 border border-[#fafbfc] shadow-md dark:border-black border-solid rounded-full">
          Visit this link for proof
        </button>
      {/if}
    </div>
  </div>
</div>
