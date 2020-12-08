<template>
  <div class="aka-project-pagination mx-auto text-center pt-10">
    <g-link :to="`/projects/${next.slug.current}`">
      <AppImage :main-image="nextImage" />
      <p class="text-sm font-bold mt-4 mb-6 leading-none text-gray">next</p>
      <h2 class="text-lg font-black">{{ next.title }}</h2>
    </g-link>
  </div>
</template>

<script>
import AppImage from '@/components/AppImage'

export default {
  name: 'ProjectPagination',
  components: {
    AppImage,
  },
  props: {
    next: Object,
    nextImage: Object,
  },
}
</script>

<style lang="css" scoped>
.aka-project-pagination {
  max-width: 320px;
}
</style>
