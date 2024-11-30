<template>
  <div class="flex flex-col items-center w-full gap-y-4 lg:gap-y-6">
    <p
      class="text-neutral text-center text-3xl lg:text-5xl font-tomorrow font-bold"
    >
      SOCIAL
    </p>
    <GlowBorder
      class="relative flex flex-col w-fit overflow-hidden rounded-2xl items-center border bg-white/5 md:shadow-xl backdrop-blur-sm"
      :color="['#8B5DFF', '#8B5DFF', '#4CC9FE']"
    >
      <BoxReveal color="#4CC9FE" :duration="0.8">
        <Dock class="m-0 border-none">
          <DockIcon>
            <img
              src="https://www.svgrepo.com/show/452047/linkedin-1.svg"
              alt=""
            />
          </DockIcon>
          <DockIcon>
            <img src="https://www.svgrepo.com/show/452210/git.svg" alt="" />
          </DockIcon>
          <DockIcon>
            <img
              src="https://www.svgrepo.com/show/110197/whatsapp.svg"
              alt=""
            />
          </DockIcon>
          <DockIcon>
            <img
              src="https://www.svgrepo.com/show/303161/gmail-icon-logo.svg"
              alt=""
            />
          </DockIcon>
        </Dock>
      </BoxReveal>
    </GlowBorder>

    <div class="flex flex-col items-center w-full">
      <p class="text-primary text-center text-sm font-sans font-semibold">
        DEVELOPED BY
      </p>
      <NuxtImg src="/img/logo.png" class="w-24" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
