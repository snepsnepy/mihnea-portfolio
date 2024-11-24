<template>
  <div
    :class="
      cn(
        'relative  min-h-fit cursor-pointer overflow-hidden rounded-2xl p-4',
        // animation styles
        'transition-all duration-200 ease-in-out hover:scale-[103%]',
        // light styles
        'bg-neutral/20 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
        // dark styles
        'transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset] w-full'
      )
    "
  >
    <div class="flex flex-row items-center gap-3">
      <div
        class="flex size-12 items-center justify-center rounded-2xl"
        :style="`background-color: ${color}`"
      >
        <NuxtImg :src="icon" width="40" height="40" />
      </div>
      <div class="flex flex-col overflow-hidden">
        <div
          class="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white"
        >
          <span class="text-sm sm:text-lg text-white">{{ name }}</span>
          <span class="mx-1 text-white">·</span>
          <span class="text-xs text-neutral">{{ time }}</span>
        </div>
        <p class="text-sm font-normal text-white/50">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { cn } from "~/utils/utils";

type NotificationProps = {
  name: string;
  description: string;
  time: string;
  icon: string;
  color: string;
};

withDefaults(defineProps<NotificationProps>(), {
  name: "",
  description: "",
  time: "",
  icon: "",
  color: "",
});
</script>
