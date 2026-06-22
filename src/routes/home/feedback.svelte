<script lang="ts">
  import Card from "@/components/card.svelte";
  import Loader from "@/components/loader.svelte";

  let {
    feedbacks = [],
    parseData = false,
  }: { feedbacks?: Record<string, any>[]; parseData?: boolean } = $props();
</script>

<div
  id="feedback"
  class="flex flex-col shrink-0 gap-2 p-2 pt-[25%] md:pt-[calc(5%+0.5rem)] h-full w-full items-center justify-center overflow-y-auto snap-center"
>
  <div
    class="flex flex-wrap gap-2 p-2 items-start justify-center overflow-y-auto w-full h-full"
  >
    {#if feedbacks.length > 0 && parseData}
      {#each feedbacks as feedback}
        <Card
          class="aspect-video w-full md:w-[calc(25%-0.5rem)] justify-start gap-2"
        >
          <div class="flex flex-col">
            <span class="font-bold text-[1.5rem]">{feedback.application}</span>
            <span class="text-[0.75rem]">
              {feedback.userId ?? "No user provided"}
            </span>
          </div>
          <span class="italic text-[1rem]">{feedback.message}</span>
        </Card>
      {/each}
    {:else if parseData}
      <div>
        <span>No Feedback submitted</span>
      </div>
    {:else}
      {#each Array(8) as _, i (i)}
        <Loader
          class="aspect-video w-full md:w-[calc(25%-0.5rem)] justify-between"
        ></Loader>
      {/each}
    {/if}
  </div>
  <span class="serif italic">
    Please send your feedback by using one of my projects/services
  </span>
</div>
