<script lang="ts">
  import Profile from "@/assets/light.png";
  import { get } from "@/lib/fetch";
  import { onMount } from "svelte";
  let name = "";
  let role = "";
  let info = {};
  let hackathons = [];
  let education = [];
  export let email;
  export let phone;
  export let location;

  onMount(async () => {
    const { data: a } = await get("dev");
    name = `${a.first_name} ${a.middle_name[0]}. ${a.last_name}`;
    role = a.position;
    info = a;
    email = a.email || "ryannsesgundo@protonmail.com";
    phone = a.phone || "+63912 345 6789";
    location = a.location || "Lucena City";
    hackathons = a.hackathons;
    education = a.education;
  });
</script>

<div
  id="resume"
  class="w-full max-w-[600px] bg-white text-black border border-zinc-400 rounded-xl overflow-hidden p-8 font-serif text-xs"
>
  <!-- Header -->
  <header class="text-center mb-6">
    <h1 class="text-3xl font-bold uppercase tracking-wide">
      {name}
    </h1>

    <p class="mt-2">
      {location} • {phone} • {email}
    </p>

    {#if role}
      <p class="italic mt-1">
        {role}
      </p>
    {/if}
  </header>

  <!-- Profile -->
  <section class="mb-5">
    <h2 class="text-sm font-bold uppercase border-b border-black pb-1 mb-2">
      Profile
    </h2>

    <p class="leading-relaxed">
      {info.about}
    </p>
  </section>

  <!-- Professional Experience -->
  {#if info.job?.length}
    <section class="mb-5">
      <h2 class="text-sm font-bold uppercase border-b border-black pb-1 mb-2">
        Professional Experience
      </h2>

      <div class="flex flex-col gap-4">
        {#each info.job as job}
          <div>
            <div class="flex justify-between items-baseline">
              <p class="font-bold">
                {job.title}
              </p>

              <p class="italic text-black/70">
                {job.year}
              </p>
            </div>

            <p class="italic">
              {job.company}
            </p>

            <p class="mt-1 leading-relaxed">
              {job.description}
            </p>
          </div>
        {/each}
      </div>
    </section>
  {/if}

  <!-- Hackathon Experience -->
  {#if hackathons?.length}
    <section class="mb-5">
      <h2 class="text-sm font-bold uppercase border-b border-black pb-1 mb-2">
        Hackathon Experience
      </h2>

      <div class="flex flex-col gap-4">
        {#each hackathons as hackathon}
          <div>
            <div class="flex justify-between items-baseline">
              <p class="font-bold">
                {hackathon.name}
              </p>

              <p class="italic text-black/70">
                {hackathon.year}
              </p>
            </div>

            <p class="italic">
              {hackathon.organizer}
              {#if hackathon.position}
                • {hackathon.position}
              {/if}
            </p>

            <p class="mt-1 leading-relaxed">
              {hackathon.description}
            </p>

            {#if hackathon.technologies?.length}
              <p class="mt-1">
                <span class="font-bold">Technologies:</span>
                {hackathon.technologies.join(", ")}
              </p>
            {/if}
          </div>
        {/each}
      </div>
    </section>
  {/if}

  <!-- Education -->
  {#if education?.length}
    <section class="mb-5">
      <h2 class="text-sm font-bold uppercase border-b border-black pb-1 mb-2">
        Education
      </h2>

      <div class="flex flex-col gap-4">
        {#each education as edu}
          <div>
            <div class="flex justify-between items-baseline">
              <p class="font-bold">
                {edu.degree}
              </p>

              <p class="italic text-black/70">
                {edu.year}
              </p>
            </div>

            <p class="italic">
              {edu.school}
            </p>

            {#if edu.description}
              <p class="mt-1 leading-relaxed">
                {edu.description}
              </p>
            {/if}
          </div>
        {/each}
      </div>
    </section>
  {/if}

  <!-- Certifications -->
  {#if info.certifications?.length}
    <section class="mb-5">
      <h2 class="text-sm font-bold uppercase border-b border-black pb-1 mb-2">
        Certifications
      </h2>

      <div class="flex flex-col gap-4">
        {#each info.certifications as cert}
          <div>
            <div class="flex justify-between items-baseline">
              <p class="font-bold">
                {cert.name}
              </p>

              <p class="italic text-black/70">
                {cert.year}
              </p>
            </div>

            <p class="italic">
              {cert.issuer}
            </p>

            {#if cert.description}
              <p class="mt-1 leading-relaxed">
                {cert.description}
              </p>
            {/if}
          </div>
        {/each}
      </div>
    </section>
  {/if}

  <!-- Skills -->
  {#if info.skills?.length}
    <section>
      <h2 class="text-sm font-bold uppercase border-b border-black pb-1 mb-2">
        Skills
      </h2>

      <div class="flex flex-col gap-2">
        {#each info.skills as skill}
          <p>
            <span class="font-bold">
              {skill.header}:
            </span>
            {skill.content.join(", ")}
          </p>
        {/each}
      </div>
    </section>
  {/if}
</div>
