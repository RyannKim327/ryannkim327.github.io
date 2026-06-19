<script lang="ts">
  import { adminPost } from "@/lib/fetch";
  import { storage } from "@/lib/storage";
  import toast, { Toaster } from "svelte-french-toast";

  let init = false;

  let title: string = $state(storage("title") ?? "") as string;
  let code = $state("");
  let content: string = $state(storage("content") ?? "") as string;

  $effect(() => {
    if (!init) {
      storage("title", title);
      storage("content", content);
    }
  });

  async function submit() {
    const cont = content
      .trim()
      .split("\n")
      .filter((con) => con !== "" && !con.startsWith("-"));

    const data = await adminPost("poetry/submit", code, {
      title,
      content: cont,
    });

    if (data.error) {
      toast.error(data.error, {
        position: "bottom-right",
      });
    } else {
      storage("title", "");
      storage("content", "");

      title = "";
      content = "";
      code = "";

      toast.success("Poem posted successfully", {
        position: "bottom-right",
      });
    }
  }
</script>

<div class="h-full w-full flex items-center justify-center p-6 overflow-hidden">
  <div
    class="w-full max-w-5xl h-full rounded-2xl border border-zinc-800 bg-zinc-50 dark:bg-zinc-900/70 backdrop-blur-xl shadow-2xl p-8 grid grid-cols-1 md:grid-cols-2 gap-8 overflow-y-auto"
  >
    <div class="flex flex-col gap-6">
      <div>
        <h1 class="text-3xl font-bold dark:text-zinc-200">Create Poem</h1>
        <p class="text-zinc-500 mt-2">Express your thoughts in verses</p>
      </div>

      <div class="grid grid-cols-1 gap-4">
        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium dark:text-zinc-300"> Title </label>
          <input
            bind:value={title}
            placeholder="The Silent Echo"
            class="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 dark:text-white px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-500"
          />
        </div>

        <div class="flex flex-col gap-2">
          <label class="text-sm font-medium dark:text-zinc-300">
            Admin Code
          </label>
          <input
            type="password"
            bind:value={code}
            placeholder=""
            class="w-full rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 dark:text-white px-4 py-3 outline-none focus:ring-2 focus:ring-zinc-500"
          />
        </div>
      </div>

      <div class="flex flex-col gap-2">
        <label class="text-sm font-medium dark:text-zinc-300"> Content </label>
        <textarea
          bind:value={content}
          placeholder="Write your poem..."
          class="w-full min-h-[300px] rounded-xl border border-zinc-300 dark:border-zinc-700 bg-zinc-200 dark:bg-zinc-800 dark:text-white p-4 outline-none resize-none focus:ring-2 focus:ring-zinc-500"
        ></textarea>
      </div>

      <button
        onclick={submit}
        class="w-full rounded-2xl bg-zinc-900 dark:bg-zinc-50 px-6 py-3 text-sm font-semibold text-zinc-50 dark:text-zinc-950 transition hover:scale-[1.02] hover:bg-zinc-950/50 dark:hover:bg-zinc-50/90 active:scale-[0.98]"
      >
        Publish Poem
      </button>
    </div>

    <!-- PREVIEW -->
    <div
      class="flex flex-col h-full rounded-2xl border border-dashed border-zinc-700 bg-zinc-300 dark:bg-zinc-800/50 p-8 overflow-hidden"
    >
      <h2
        class="text-sm uppercase tracking-widest text-zinc-500 mb-6 font-bold"
      >
        Preview
      </h2>

      <div class="flex-1 overflow-y-auto pr-2 custom-scrollbar">
        <h1
          class="text-3xl font-serif font-bold mb-6 dark:text-zinc-100 italic"
        >
          {title || "Untitled Poem"}
        </h1>

        <div
          class="space-y-4 text-zinc-800 dark:text-zinc-300 leading-relaxed text-lg italic"
        >
          {#each content.split("\n") as line}
            <p>{line === "" ? "\u00A0" : line}</p>
          {/each}
        </div>
      </div>
    </div>
  </div>
  <Toaster />
</div>
