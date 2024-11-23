<template>
  <div class="flex xl:flex-col w-full h-full items-start xl:items-center">
    <div class="flex flex-col gap-y-4 lg:gap-y-6 items-center w-full">
      <p
        class="text-neutral text-center text-3xl lg:text-5xl font-tomorrow font-bold"
      >
        EXPERIENCE
      </p>
      <!-- Work Experience -->
      <GlowBorder
        class="relative flex flex-col overflow-hidden rounded-2xl border w-full bg-white/5 md:shadow-xl backdrop-blur-md"
        :color="['#8B5DFF', '#8B5DFF', '#4CC9FE']"
      >
        <BoxReveal color="#4CC9FE" :duration="0.8">
          <ClientOnly>
            <div class="relative flex w-full flex-col overflow-scroll pb-6">
              <AnimatedList class="w-full">
                <JobCard
                  v-for="(item, idx) in notifications"
                  :key="idx"
                  :name="item.name"
                  :description="item.description"
                  :icon="item.icon"
                  :color="item.color"
                  :time="item.time"
                  class="dark"
                />
              </AnimatedList>
            </div>
          </ClientOnly>
        </BoxReveal>
      </GlowBorder>
    </div>
  </div>
</template>

<script setup lang="ts">
const notifications = [
  {
    name: "Junior Software Engineer",
    description: "Continental Automotive Romania",
    time: "6y ago",
    icon: "img/continental.png",
    color: "#5a5a5a",
  },
  {
    name: "Frontend Developer",
    description: "Blockchain Engineering",
    time: "5y ago",
    icon: "img/bceng.png",
    color: "#FFFFFF",
  },
  {
    name: "Frontend Developer",
    description: "NShift",
    time: "3y ago",
    icon: "img/nshift.png",
    color: "#FFFFFF",
  },
  {
    name: "Frontend Developer",
    description: "Wallbid",
    time: "1y ago",
    icon: "img/wallbid.svg",
    color: "#FFFFFF",
  },
];
</script>
