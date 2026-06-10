<script>
  export let data = [
    {
      content: "I really love your portfolio! The animations are amazing.",
      email: "visitor@example.com",
      name: "Happy Visitor",
    },
    {
      content: "Are you available for freelance work?",
      email: "recruiter@company.com",
      name: "Jane Smith",
    },
  ];
</script>

<div class="min-h-screen w-full flex items-center justify-center p-6 pt-20">
  <div
    class="w-full max-w-4xl rounded-2xl border border-zinc-800 bg-zinc-50 dark:bg-zinc-900/70 backdrop-blur-xl shadow-2xl p-8 flex flex-col h-[80vh] overflow-hidden"
  >
    <div class="mb-8 flex items-center justify-between">
      <div>
        <h1 class="text-3xl font-bold dark:text-zinc-200">User Messages</h1>
        <p class="text-zinc-500 mt-2">View and manage inquiries from your portfolio</p>
      </div>
      <div class="bg-zinc-200 dark:bg-zinc-800 px-4 py-2 rounded-xl border border-zinc-300 dark:border-zinc-700">
        <span class="text-sm font-bold dark:text-zinc-400 uppercase tracking-widest">Total: {data.length}</span>
      </div>
    </div>

    <div class="flex-1 overflow-y-auto space-y-4 custom-scrollbar pr-2">
      {#each data as msg}
        <div class="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-800/40 p-6 transition hover:border-zinc-400 dark:hover:border-zinc-600 group">
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-4">
              <div class="h-12 w-12 rounded-xl bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-xl text-zinc-500 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 transition-colors">
                <i class="fa-solid fa-user"></i>
              </div>
              <div>
                <h3 class="font-bold text-lg dark:text-zinc-100">{msg.name}</h3>
                <p class="text-sm text-zinc-500 font-medium">{msg.email}</p>
              </div>
            </div>
            <button class="text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-red-500 transition-colors">
              Delete
            </button>
          </div>
          <div class="bg-zinc-100/50 dark:bg-zinc-900/50 rounded-xl p-4 border border-zinc-200/50 dark:border-zinc-700/50">
            <p class="text-zinc-700 dark:text-zinc-300 leading-relaxed italic">
              "{msg.content}"
            </p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>
