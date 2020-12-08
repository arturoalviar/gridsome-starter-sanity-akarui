<template>
  <nav class="ml-auto">
    <ul class="flex">
      <li v-for="item in nav" :key="'nav-item-' + item.label">
        <g-link class="font-semibold lowercase ml-6" :to="item.to">
          {{ item.label }}
        </g-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      nav: [
        {
          label: 'about',
          to: '/about',
        },
        {
          label: 'blog',
          to: '/blog',
        },
        {
          label: 'projects',
          to: '/projects',
        },
      ],
    }
  },
}
</script>
