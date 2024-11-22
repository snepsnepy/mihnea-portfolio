<template>
  <div>
    <Vortex
      background-color="black"
      class="flex flex-col min-h-screen items-center justify-center px-2 md:px-10 overflow-scroll"
    >
      <ClientOnly>
        <div class="z-[10] container mx-auto">
          <slot />
        </div>
      </ClientOnly>
    </Vortex>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
