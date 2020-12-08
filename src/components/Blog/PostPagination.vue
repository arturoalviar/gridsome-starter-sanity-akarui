<template>
  <footer
    class="blog-post-pagination relative grid gap-8 grid-cols-2 w-full mt-10 py-4"
  >
    <div class="post-pagination-item is-prev relative text-sm">
      <g-link
        class="inline-block leading-snug py-2"
        :to="`/blog/${prev.slug.current}`"
        :aria-label="`Previous post: ${next.title}`"
      >
        <span class="block font-semibold text-tiny leading-loose text-primary"
          >previous</span
        >
        {{ prev.title }}
      </g-link>
    </div>
    <div class="post-pagination-item is-next text-right">
      <g-link
        class="inline-block leading-snug py-2"
        :to="`/blog/${next.slug.current}`"
        :aria-label="`Next post: ${next.title}`"
      >
        <span class="block font-semibold text-tiny leading-loose text-primary"
          >next</span
        >
        {{ next.title }}
      </g-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'PostPagination',
  props: {
    prev: Object,
    next: Object,
  },
}
</script>
