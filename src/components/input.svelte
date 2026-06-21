<script lang="ts">
  let {
    placeholder,
    name,
    type = "text",
    class: className = "",
    value = $bindable(""),
    file = $bindable(null),
  }: {
    placeholder: string;
    name: string;
    type?: string;
    class?: string;
    value?: string;
    file?: FileList | null;
  } = $props();
</script>

<div
  class={`${className} relative w-full border border-zinc-900 dark:border-zinc-100 custom-input m-2 p-2 rounded`}
>
  <label
    class="absolute transition-all duration-200 px-2 select-none"
    for={name}
  >
    {placeholder}
  </label>

  {#if type === "file"}
    <input
      autocomplete="off"
      class="w-full outline-none"
      id={name}
      type="file"
      onchange={(e) => {
        file = (e.target as HTMLInputElement).files;
      }}
    />
  {:else}
    <input
      class="w-full outline-none"
      id={name}
      {type}
      autocomplete="off"
      placeholder=" "
      bind:value
    />
  {/if}
</div>

<style>
  .custom-input:has(input:not(:placeholder-shown)) label {
    font-size: 0.75rem;
    top: -0.5rem;
  }

  /* Optional: also float on focus */
  .custom-input:has(input:focus) label {
    font-size: 0.75rem;
    top: -0.5rem;
  }
</style>
