<template>
  <div class="flex flex-col gap-y-4 lg:gap-y-6 h-full justify-between">
    <p
      class="text-neutral text-center text-3xl lg:text-5xl font-tomorrow font-bold"
    >
      WHO AM I?
    </p>

    <!-- My Name Is -->
    <GlowBorder
      class="relative flex flex-col w-full overflow-hidden rounded-2xl border bg-white/5 md:shadow-xl backdrop-blur-sm"
      :color="['#8B5DFF', '#8B5DFF', '#4CC9FE']"
    >
      <p
        class="text-lg lg:text-2xl lg:leading-[40px] text-white text-left font-tomorrow font-thin"
      >
        Im'
      </p>
      <h2 class="text-3xl lg:text-5xl text-neutral font-semibold font-tomorrow">
        Mihnea <br />
        Savulescu 👋
      </h2>
    </GlowBorder>

    <!-- About Me -->
    <GlowBorder
      class="relative flex flex-col w-full overflow-hidden rounded-2xl border bg-white/5 md:shadow-xl backdrop-blur-sm"
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

      <p class="text-sm lg:text-base text-neutral font-tomorrow">
        As a Vue.js virtuoso with over <b>5 years</b> of experience, I’m not
        just building web applications—I’m crafting digital experiences that
        blend innovation with rock-solid reliability. My journey through the
        world of frontend technologies has honed my expertise in creating
        interfaces that are as intuitive as they are powerful.
      </p>
    </GlowBorder>

    <!-- Download Resume -->
    <GlowBorder
      class="relative flex flex-col w-full overflow-hidden rounded-2xl border bg-white/5 md:shadow-xl backdrop-blur-sm"
      :color="['#8B5DFF', '#8B5DFF', '#4CC9FE']"
    >
      <div class="flex justify-between items-center">
        <p class="text-base lg:text-xl text-neutral font-bold font-tomorrow">
          MY RESUME
        </p>

        <a href="/files/cv.pdf" download @click="getCV">
          <Icon
            name="line-md:download-loop"
            size="32"
            class="text-neutral hover:text-accent hover:cursor-pointer"
          />
        </a>
      </div>
    </GlowBorder>
  </div>
</template>

<script setup lang="ts">
import confetti from "canvas-confetti";

const getCV = () => {
  launchFireworks();
};

// Function to trigger the confetti fireworks
const launchFireworks = () => {
  const duration = 5 * 1000; // 5 seconds
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

  // Helper function to get a random value between a range
  function randomInRange(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  const interval = window.setInterval(() => {
    const timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }

    const particleCount = 50 * (timeLeft / duration);

    // Confetti from left side
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
    });

    // Confetti from right side
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
    });
  }, 250);
};
</script>
