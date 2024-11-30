<template>
  <div class="bg-black w-full items-center justify-center p-8 space-y-8">
    <p
      class="text-neutral text-center text-3xl lg:text-5xl font-tomorrow font-bold"
    >
      PROJECTS
    </p>
    <TracingBeam class="px-6">
      <div class="relative mx-auto max-w-2xl pt-4 antialiased">
        <div
          v-for="(item, index) in dummyContent"
          :key="`content-${index}`"
          class="mb-10"
        >
          <LinkPreview :url="item.url">
            <p class="text-accent text-3xl font-tomorrow font-bold">
              {{ item.title.toUpperCase() }}
            </p>
          </LinkPreview>

          <div class="prose prose-sm dark:prose-invert text-sm">
            <img
              v-if="item.image"
              :src="item.image"
              alt="blog thumbnail"
              class="mb-10 rounded-lg object-cover"
            />
            <div>
              <p
                v-for="(paragraph, idx) in item.description"
                :key="`desc-${idx}`"
                class="text-neutral text-lg font-tomorrow"
              >
                {{ paragraph }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </TracingBeam>
  </div>
</template>

<script setup lang="ts">
// Dummy content data
const dummyContent = [
  {
    title: "Romanian Programming Language",
    description: [
      "Starting as a personal project, RPL wants to become a programming language that allows the user to write code in the Romanian language in a fun and interactive way.",
    ],
    badge: "Inspira UI",
    image: "/img/rpl.png",
    url: "https://github.com/snepsnepy/romanian-programming-language",
  },
  {
    title: "Invata cu Snep",
    description: [
      "'Invata cu Snep' is a dynamic platform and community designed to provide access to mini IT courses and tutorials. Our mission is to make tech education simple, engaging, and accessible for everyone, fostering a supportive space where users can grow their skills and connect with like-minded learners.",
    ],
    badge: "Vue",
    image: "/img/snepteinvata.png",
    url: "https://main--invatacusnep.netlify.app/",
  },
  {
    title: "Who is snep?",
    description: [
      "'WHO IS SNEP?' is a 2D browser-based game that transforms a traditional portfolio into an engaging experience. Users can explore and interact with various elements, discovering projects and skills in a fun, immersive way.",
    ],
    badge: "Nuxt",
    image: "/img/whoissnep.png",
    url: "https://whoissnep.netlify.app/",
  },
];
</script>
