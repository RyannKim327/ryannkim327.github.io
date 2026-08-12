<script lang="ts">
  import { onMount } from "svelte";

  let blocks = $state<
    {
      id: number;
      x: number;
      y: number;
      tx: number;
      ty: number;
      size: number;
      delay: number;
      duration: number;
      color: string;
    }[]
  >([]);

  const colors = [
    "bg-blue-600/50 dark:bg-blue-400/30",
    "bg-indigo-600/50 dark:bg-indigo-400/30",
    "bg-cyan-600/50 dark:bg-cyan-400/30",
    "bg-purple-600/50 dark:bg-purple-400/30",
    "bg-teal-600/50 dark:bg-teal-400/30",
  ];

  onMount(() => {
    blocks = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      tx: (Math.random() - 0.5) * 200,
      ty: (Math.random() - 0.5) * 200,
      size: Math.random() * 150 + 100,
      delay: Math.random() * 2,
      duration: Math.random() * 10 + 20,
      color: colors[Math.floor(Math.random() * colors.length)],
    }));
  });
</script>

<div
  class="w-full h-full absolute inset-0 z-0 overflow-hidden pointer-events-none select-none"
>
  {#each blocks as block (block.id)}
    <div
      class="absolute {block.color} rounded-full blur-3xl opacity-50 dark:opacity-50"
      style="
				left: {block.x}%;
				top: {block.y}%;
				width: {block.size}px;
				height: {block.size}px;
				--tx: {block.tx}px;
				--ty: {block.ty}px;
				animation: float {block.duration}s infinite ease-in-out;
				animation-delay: -{block.delay}s;
				"
    ></div>
  {/each}
</div>

<style>
  @keyframes float {
    0%,
    100% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(var(--tx), var(--ty));
    }
  }
</style>
