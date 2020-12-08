<template>
  <ul class="aka-blog-posts grid gap-8 items-stretch">
    <li v-for="(edge, index) in posts" :key="edge.node.id">
      <PostCard :index="index" :post="edge.node" />
    </li>
  </ul>
</template>

<script>
import PostCard from '@/components/Blog/PostCard'

export default {
  name: 'PostList',
  components: {
    PostCard,
  },
  props: {
    posts: Array,
  },
}
</script>

<style scoped>
@screen md {
  .aka-blog-posts {
    grid-template-columns: 1fr 1fr;
  }
  .aka-blog-posts li {
    grid-column: auto/span 1;
  }
}

@screen xl {
  .aka-blog-posts li:nth-child(3n + 1) {
    grid-column: auto/span 2;
  }
}
</style>
