<script lang="ts">
  import Input from "@/components/input.svelte";
  import Textarea from "@/components/textarea.svelte";
  import Markdown from "@/components/markdown.svelte";
  import { adminPost } from "@/lib/fetch.ts";
  import { session } from "@/lib/storage.ts";
  import { toast } from "svelte-french-toast";

  let title = $state("");
  let code = $state(session("admin")?.toString() ?? "");
  let content = $state("");

  let tags = $state("");
  let media = $state("");

  async function submitBlog() {
    if (!title.trim() || !content.trim()) {
      toast.error("Title and Content are required", {
        position: "bottom-right",
      });
      return;
    }

    const res = await adminPost("blog", code, {
      title,
      content,
      tags,
      media,
    });

    if (res.error) {
      toast.error(res.error.toString(), { position: "bottom-right" });
    } else {
      toast.success("Blog posted successfully!", { position: "bottom-right" });
      title = "";
      content = "";
      tags = "";
      media = "";
    }
  }
</script>

<div
  class="flex items-center justify-center h-full w-full p-6 pt-20 overflow-hidden"
>
  <div
    class="flex flex-col h-full w-full max-w-7xl rounded-2xl border border-zinc-800 bg-zinc-50 dark:bg-zinc-900/70 backdrop-blur-xl shadow-2xl p-8"
  >
    <div class="mb-8">
      <h1 class="text-3xl font-bold dark:text-zinc-200">Create Blog Post</h1>
      <p class="text-zinc-500 mt-2">Write markdown content with live preview</p>
    </div>

    <div
      class="flex flex-1 flex-col gap-6 h-full overflow-y-auto overflow-x-hidden"
    >
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium dark:text-zinc-300"> Title </label>
          <Input
            class="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 dark:text-white placeholder:text-zinc-500 focus:ring-2 focus:ring-zinc-500"
            name="title"
            placeholder=""
            bind:value={title}
          />
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium dark:text-zinc-300"> Tags </label>
          <Input
            class="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 dark:text-white placeholder:text-zinc-500 focus:ring-2 focus:ring-zinc-500"
            name="tags"
            placeholder=""
            bind:value={tags}
          />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="flex flex-col gap-2 col-span-2">
          <label class="text-sm font-medium dark:text-zinc-300">
            Media Files
          </label>
          <Input
            class="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 dark:text-white placeholder:text-zinc-500 focus:ring-2 focus:ring-zinc-500"
            name="media"
            placeholder=""
            bind:value={media}
          />
        </div>
      </div>

      <div
        class="grid flex-1 grid-cols-1 gap-6 overflow-hidden lg:grid-cols-2 min-h-[50vh]"
      >
        <div
          class="flex h-full flex-col overflow-hidden rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800/30"
        >
          <div
            class="flex items-center justify-between border-b border-zinc-300 dark:border-zinc-700 px-5 py-4 bg-zinc-300/50 dark:bg-zinc-800/50"
          >
            <h2
              class="text-xs uppercase tracking-widest font-bold text-zinc-500"
            >
              Markdown Editor
            </h2>
            <div
              class="rounded-full bg-zinc-500 px-3 py-1 text-[10px] font-bold text-white animate-pulse"
            >
              LIVE
            </div>
          </div>

          <Textarea
            class="h-full border-0 resize-none bg-transparent p-5 text-sm dark:text-zinc-200 outline-none placeholder:text-zinc-500"
            name="content"
            placeholder=""
            bind:value={content}
          />
        </div>

        <div
          class="flex h-full flex-col rounded-2xl border border-zinc-700 border-dashed bg-zinc-200 dark:bg-zinc-800/10"
        >
          <div
            class="border-b border-zinc-700 border-dashed px-5 py-4 text-xs uppercase tracking-widest font-bold text-zinc-500"
          >
            Preview
          </div>

          <div
            class="flex-1 p-6 custom-scrollbar dark:prose-invert prose prose-zinc max-w-none"
          >
            <Markdown {content} />
          </div>
        </div>
      </div>

      <div class="flex items-center justify-end gap-3">
        <button
          class="rounded-2xl border border-zinc-300 dark:border-zinc-700 bg-transparent px-6 py-2.5 text-sm font-semibold text-zinc-500 transition hover:bg-zinc-100 dark:hover:bg-zinc-800"
        >
          Save Draft
        </button>

        <button
          onclick={submitBlog}
          class="rounded-2xl bg-zinc-900 dark:bg-zinc-50 px-8 py-2.5 text-sm font-semibold text-zinc-50 dark:text-zinc-950 transition hover:scale-[1.02] hover:bg-zinc-950/50 dark:hover:bg-zinc-50/90 active:scale-[0.98]"
        >
          Post Blog
        </button>
      </div>
    </div>
  </div>
</div>
