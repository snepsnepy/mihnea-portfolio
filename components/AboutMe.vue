<template>
  <div class="flex flex-col gap-y-4 lg:gap-y-6">
    <!-- My Name Is -->
    <GlowBorder
      class="relative flex flex-col w-full overflow-hidden rounded-2xl border bg-white/5 md:shadow-xl backdrop-blur-md"
      :color="['#8B5DFF', '#8B5DFF', '#4CC9FE']"
    >
      <BoxReveal color="#4CC9FE" :duration="0.8">
        <p
          class="text-lg lg:text-2xl lg:leading-[40px] text-white text-left font-tomorrow font-thin"
        >
          Im'
        </p>
        <h2
          class="text-3xl lg:text-5xl text-neutral font-semibold font-tomorrow"
        >
          Mihnea <br />
          Savulescu 👋
        </h2>
      </BoxReveal>
    </GlowBorder>

    <!-- About Me -->
    <GlowBorder
      class="relative flex flex-col w-full overflow-hidden rounded-2xl border bg-white/5 md:shadow-xl backdrop-blur-md"
      :color="['#8B5DFF', '#8B5DFF', '#4CC9FE']"
    >
      <div class="flex items-center justify-between">
        <p class="text-sm text-accent">About Me</p>
        <Icon
          name="ri:arrow-right-up-line"
          size="32"
          class="text-white hover:text-accent hover:cursor-pointer"
        />
      </div>

      <BoxReveal color="#4CC9FE" :duration="0.8" class="mt-12">
        <p class="text-sm lg:text-base text-neutral font-tomorrow">
          As a Vue.js virtuoso with over <b>5 years</b> of experience, I’m not
          just building web applications—I’m crafting digital experiences that
          blend innovation with rock-solid reliability. My journey through the
          world of frontend technologies has honed my expertise in creating
          interfaces that are as intuitive as they are powerful.
        </p>
      </BoxReveal>
    </GlowBorder>

    <!-- Download Resume -->
    <GlowBorder
      class="relative flex flex-col w-full overflow-hidden rounded-2xl border bg-white/5 md:shadow-xl backdrop-blur-md"
      :color="['#8B5DFF', '#8B5DFF', '#4CC9FE']"
    >
      <BoxReveal color="#4CC9FE" :duration="0.8">
        <div class="flex justify-between items-center">
          <p class="text-base lg:text-xl text-neutral font-bold font-tomorrow">
            MY RESUME
          </p>
          <Icon
            name="line-md:download-loop"
            size="32"
            class="text-neutral hover:text-accent hover:cursor-pointer"
          />
        </div>
      </BoxReveal>
    </GlowBorder>
  </div>
</template>
