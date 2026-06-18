<script lang="ts">
  let { params }: { params: { id: string } } = $props();

  import Markdown from "@/components/markdown.svelte";
  import HomeButton from "@/components/home-button.svelte";
  import { get } from "@/lib/fetch.ts";
  import { session } from "@/lib/storage.ts";
  import { Toaster, toast } from "svelte-french-toast";
  import { onMount } from "svelte";

  const secret_code = "santol@mangga.com";
  let verified = $state(session("token") === secret_code);

  let blog = $state<any>({});

  onMount(async () => {
    const api = await get("blog", {
      id: params.id,
    });
    if (api.error) {
      toast.error(api.error, {
        position: "bottom-right",
      });
    } else {
      blog = api.data;
    }
  });
</script>

<div
  class="flex flex-wrap p-2 w-full h-full gap-2 overflow-hidden overflow-y-auto pt-[5%]"
>
  <HomeButton title={blog.title} description={blog.content} past="/blogs" />
  {#if verified}
    <div class="flex fixed top-0 right-0 p-5 pointer-events-none z-10">
      <a
        href="#/admin/edit-blog/{params.id}"
        class="flex flex-row items-center gap-3 p-2 bg-zinc-900 text-zinc-50 dark:bg-zinc-50 dark:text-zinc-950 shadow-sm shadow-[#121212] rounded-full px-8 pointer-events-auto select-none cursor-pointer text-[0.75rem] font-bold transition hover:scale-[1.05] active:scale-[0.95]"
      >
        Edit Post
      </a>
    </div>
  {/if}
  <div class="w-full h-full overflow-hidden px-5">
    <Markdown content={blog.content} />
  </div>
  <Toaster />
</div>
