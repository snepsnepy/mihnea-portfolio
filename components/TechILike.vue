<template>
  <div class="flex flex-col gap-y-4 lg:gap-y-6 h-full justify-between">
    <!-- Tech Section -->
    <div class="flex flex-col items-center gap-y-4 lg:gap-y-6">
      <p class="text-neutral text-3xl lg:text-5xl font-tomorrow font-bold">
        TECH I LIKE
      </p>

      <TechOrbit />
    </div>

    <div class="flex flex-col items-center gap-y-4 lg:gap-y-6">
      <p class="text-neutral text-3xl lg:text-5xl font-tomorrow font-bold">
        PROJECTS
      </p>

      <GlowBorder
        class="relative flex flex-col w-full overflow-hidden rounded-2xl border p-0 bg-white/5 md:shadow-xl backdrop-blur-md hover:cursor-pointer hover:scale-[103%] transition-all duration-200 ease-in-out"
        :color="['#8B5DFF', '#8B5DFF', '#4CC9FE']"
      >
        <SafariMockup
          url="inspira-ui.com"
          src="/img/site.png"
          class="dark size-full"
        />
      </GlowBorder>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
