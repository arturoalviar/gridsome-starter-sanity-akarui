<template>
  <li class="relative flex flex-auto w-full">
    <g-link class="block w-full" :to="projectUrl">
      <AppImage
        class="aka-card-image relative flex flex-auto w-full"
        image-classes="block w-full h-full object-cover absolute"
        :main-image="project.mainImage"
        placeholder
      />

      <h2
        class="font-bold text-xl text-center leading-loose mt-6 mb-4 lg:mt-10 lg:mb-8"
      >
        {{ project.title }}
      </h2>
    </g-link>
  </li>
</template>


<script>
import AppImage from '@/components/AppImage'

export default {
  name: 'ProjectCard',
  components: {
    AppImage,
  },
  computed: {
    projectUrl() {
      return `/projects/${this.project.slug.current}`
    },
  },
  props: {
    project: Object,
    index: Number,
  },
}
</script>

