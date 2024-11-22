<template>
  <div class="flex min-h-screen py-8 items-start lg:items-center">
    <!-- Left & Center Column -->
    <div
      class="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-x-4 gap-y-4 lg:gap-x-6 w-full"
    >
      <AboutMe />
      <TechILike />
    </div>

    <!-- Last Column -->
    <div class="flex flex-col items-start">
      <GlowBorder
        class="relative flex flex-col w-full overflow-hidden rounded-2xl border bg-white/5 md:shadow-xl backdrop-blur-md"
        :color="['#8B5DFF', '#8B5DFF', '#4CC9FE']"
      >
        <BoxReveal color="#4CC9FE" :duration="0.8">
          <p class="text-sm text-accent p-2">Experience</p>
          <ClientOnly>
            <div
              class="relative flex h-[500px] w-full flex-col p-2 overflow-scroll"
            >
              <AnimatedList>
                <template #default>
                  <JobCard
                    v-for="(item, idx) in notifications"
                    :key="idx"
                    :name="item.name"
                    :description="item.description"
                    :icon="item.icon"
                    :color="item.color"
                    :time="item.time"
                  />
                </template>
              </AnimatedList>
            </div>
          </ClientOnly>
        </BoxReveal>
      </GlowBorder>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "base-layout",
});

const notifications = [
  {
    name: "Payment received",
    description: "Inspira UI",
    time: "15m ago",
    icon: "/assets/img/continental.png",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Inspira UI",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Inspira UI",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Inspira UI",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
  {
    name: "Payment received",
    description: "Inspira UI",
    time: "15m ago",
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "User signed up",
    description: "Inspira UI",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "New message",
    description: "Inspira UI",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "New event",
    description: "Inspira UI",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];
</script>
