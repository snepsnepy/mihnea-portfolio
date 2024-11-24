<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 h-screen xl:h-full items-start py-20 w-full"
  >
    <AboutMe />
    <TechILike />
    <div
      v-if="!smallerOrEqualThanXl"
      class="flex flex-col gap-y-6 h-full justify-between"
    >
      <WorkExp />
      <Social />
    </div>

    <WorkExp v-if="smallerOrEqualThanXl" />
    <Social v-if="smallerOrEqualThanXl" />
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "base-layout",
});
</script>
