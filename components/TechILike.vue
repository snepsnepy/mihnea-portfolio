<template>
  <!-- Tech Section -->
  <div class="flex flex-col items-center gap-y-6">
    <p class="text-neutral text-3xl lg:text-5xl font-tomorrow font-bold">
      {{ !smallerOrEqualThanLg ? "TECH I LIKE" : "PORTFOLIO" }}
    </p>

    <GlowBorder
      v-if="!smallerOrEqualThanLg"
      class="relative flex flex-col w-full overflow-hidden rounded-full bg-transparent md:shadow-xl backdrop-blur-md"
      :color="[]"
    >
      <TechOrbit />
    </GlowBorder>
  </div>
</template>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from "@vueuse/core";

const breakpoints = useBreakpoints(breakpointsTailwind);
const smallerOrEqualThanLg = breakpoints.smallerOrEqual("lg"); // only smaller than lg
</script>

<style></style>
