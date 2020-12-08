<template>
  <div class="bg-primary flex flex-col items-center justify-center">
    <ImagePlaceholder class="w-20 lg:w-40 fill-current" />
  </div>
</template>

<script>
import ImagePlaceholder from '@/assets/images/main-image-placeholder.svg?inline'

export default {
  name: 'AppImagePlaceholder',
  components: {
    ImagePlaceholder,
  },
}
</script>