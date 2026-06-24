<script>
  import Input from "@/components/input.svelte";
  import Resume from "@/components/resume.svelte";
  import { onMount } from "svelte";
  import html2pdf from "html2pdf.js";

  function downloadPDF() {
    const element = document.querySelector("#resume");

    html2pdf(element);
    // .from(element)
    // .set({
    //   margin: 0,
    //   filename: "resume.pdf",
    //   image: { type: "jpeg", quality: 1 },
    //   html2canvas: { scale: 2 },
    //   jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    // })
    // .save();
  }
</script>

<div class="h-full w-full flex items-center justify-center p-6 pt-20">
  <div
    class="w-full max-w-7xl rounded-2xl border border-zinc-800 bg-zinc-50 dark:bg-zinc-900/70 backdrop-blur-xl shadow-2xl p-8 flex flex-col md:flex-row h-[85vh] gap-8 overflow-hidden"
  >
    <div class="flex flex-col w-full md:w-1/2 gap-6 overflow-hidden">
      <!-- Header -->
      <div>
        <h1 class="text-3xl font-bold dark:text-zinc-200">Manage Resume</h1>
        <p class="text-zinc-500 mt-2">
          Update your professional profile and resume content
        </p>
      </div>
      <!-- ACTION BUTTONS -->
      <div
        class="flex gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800"
      >
        <button
          class="flex-1 rounded-2xl bg-zinc-900 dark:bg-zinc-50 py-3 text-sm font-semibold text-zinc-50 dark:text-zinc-950 transition hover:scale-[1.02] hover:bg-zinc-950/50 dark:hover:bg-zinc-50/90 active:scale-[0.98]"
        >
          Save Changes
        </button>

        <button
          onclick={downloadPDF}
          class="px-6 rounded-2xl border border-zinc-300 dark:border-zinc-700 text-zinc-500 font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
        >
          Download PDF
        </button>
      </div>
    </div>

    <div
      class="hidden md:flex flex-1 flex-col rounded-2xl border border-dashed border-zinc-700 bg-zinc-300 dark:bg-zinc-800/50 p-8 overflow-hidden overflow-y-auto"
    >
      <h2
        class="text-xs uppercase tracking-widest font-bold text-zinc-500 mb-6"
      >
        Live Preview
      </h2>
      <div class="flex-1 custom-scrollbar pr-2">
        <Resume />
      </div>
    </div>
  </div>
</div>
