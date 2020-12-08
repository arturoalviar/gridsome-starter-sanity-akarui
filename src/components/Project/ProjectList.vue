<template>
  <ul class="aka-projects grid gap-8 items-stretch">
    <ProjectCard
      v-for="project in projects"
      :key="project.node.id"
      :project="project.node"
    />
  </ul>
</template>

<script>
import ProjectCard from '@/components/Project/ProjectCard'

export default {
  name: 'ProjectList',
  components: {
    ProjectCard,
  },
  props: {
    projects: Array,
  },
}
</script>

<style scoped>
@screen md {
  .aka-projects {
    grid-template-columns: 1fr 1fr;
  }

  .aka-projects li {
    grid-column: auto/span 1;
  }
}

@screen lg {
  .aka-projects li:nth-child(3n + 1) {
    grid-column: auto/span 2;
  }
}
</style>
