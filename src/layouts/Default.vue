<template>
  <div class="layout flex flex-col relative min-h-screen">
    <header class="flex items-center mb-6 h-20">
      <div class="container flex items-center justify-between">
        <div class="app-logo">
          <g-link to="/">
            <strong>{{ $static.metadata.siteName }}</strong>
          </g-link>
        </div>
        <AppNav />
        <ThemeToggle />
      </div>
    </header>
    <div class="app-slot container mb-8">
      <slot />
    </div>
    <AppFooter />
  </div>
</template>

<static-query>
  query {
    metadata {
      siteName
    }
  }
</static-query>

<script>
import AppNav from '@/components/AppNav.vue'
import AppFooter from '@/components/AppFooter.vue'
import ThemeToggle from '@/components/ThemeToggle.vue'

export default {
  components: {
    AppNav,
    AppFooter,
    ThemeToggle,
  },
}
</script>

<style>
.container {
  @apply relative mx-auto w-full;
}
</style>
