<template>
  <div
    class="relative flex w-[400px] h-[385px] lg:h-[450px] lg:w-[450px] flex-col items-center justify-center overflow-hidden rounded-lg"
  >
    <span
      class="pointer-events-none text-center text-8xl font-semibold leading-none"
    >
      🌍
    </span>

    <!-- Inner Circles -->
    <Orbit
      class="size-[30px] items-center justify-center border-none bg-transparent"
      :duration="20"
      :delay="20"
      :radius="80"
      :direction="ORBIT_DIRECTION.CounterClockwise"
    >
      <Icon name="logos:vue" size="32" />
    </Orbit>
    <Orbit
      class="size-[30px] items-center justify-center border-none bg-transparent"
      :duration="20"
      :delay="20"
      :radius="80"
    >
      <Icon name="logos:pinia" size="32" />
    </Orbit>
    <Orbit
      class="size-[30px] items-center justify-center border-none bg-transparent"
      :duration="20"
      :delay="10"
      :radius="80"
      path
      :direction="ORBIT_DIRECTION.CounterClockwise"
    >
      <Icon name="logos:nuxt-icon" size="32" />
    </Orbit>
    <!-- Outer Circles (reverse) -->
    <Orbit
      class="size-[50px] items-center justify-center border-none bg-transparent"
      :radius="190"
      :duration="20"
      path
    >
      <Icon name="devicon:typescript" size="32" />
    </Orbit>
    <Orbit
      class="size-[50px] items-center justify-center border-none bg-transparent"
      :radius="190"
      :duration="20"
      path
    >
      <Icon name="skill-icons:github-light" size="32" />
    </Orbit>
    <Orbit
      class="size-[50px] items-center justify-center border-none bg-transparent"
      :radius="190"
      :duration="20"
      :direction="ORBIT_DIRECTION.CounterClockwise"
      path
    >
      <Icon name="skill-icons:html" size="32" />
    </Orbit>
    <Orbit
      class="size-[50px] items-center justify-center border-none bg-transparent"
      :radius="190"
      :duration="20"
      :delay="200"
      :direction="ORBIT_DIRECTION.CounterClockwise"
    >
      <Icon name="devicon:javascript" size="32" />
    </Orbit>

    <Orbit
      class="items-center justify-center border-none bg-transparent text-4xl"
      :radius="140"
      :delay="4"
      path
    >
      <Icon name="logos:graphql" size="32" />
    </Orbit>
    <Orbit
      class="items-center justify-center border-none bg-transparent text-4xl"
      :radius="140"
      :delay="5"
      :direction="ORBIT_DIRECTION.CounterClockwise"
    >
      <Icon name="devicon:tailwindcss" size="32" />
    </Orbit>
    <Orbit
      class="items-center justify-center border-none bg-transparent text-4xl"
      :radius="140"
      :delay="5"
      :direction="ORBIT_DIRECTION.CounterClockwise"
    >
      <Icon name="skill-icons:css" size="32" />
    </Orbit>
  </div>
</template>

<script lang="ts" setup></script>

<style></style>
