<template>
  <Layout>
    <AppBanner heading="Akarui" subheading="start using:">
      <p class="p-sm">
        A gridsome starter inspired by the
        <a
          class="inline-flex border-b-4 border-primary leading-tight"
          href="https://fabrx.co/brightkit/"
          target="_blank"
          rel="noopener noreferrer"
          >bright kit.</a
        >
        Made with tailwind css. Integrates with sanity.io
      </p>
    </AppBanner>
    <section v-if="$page.posts.edges.length" class="mx-auto pt-10">
      <h2 class="font-bold mb-4 text-3xl">Latests Posts</h2>
      <PostList :posts="$page.posts.edges" />
    </section>
    <section v-if="$page.projects.edges.length" class="mx-auto pt-10">
      <h2 class="font-bold mb-4 text-3xl">Latest Project</h2>
      <ProjectList :projects="$page.projects.edges" />
    </section>
  </Layout>
</template>

<page-query>
  query{
    posts: allSanityPost (sortBy: "publishedAt" limit: 3) {
      edges {
        node {
          id
          slug {
            current
          }
          author {
            name
          }
          title
          publishedAt(format: "MMMM D, YYYY")
          mainImage {
            asset {
              id
              localFile(width: 660, quality: 80)
              url
            }
          }
        }
      }
    }
    projects: allSanityProject (sortBy: "completed" limit: 1) {
      edges {
        node {
          id
          slug {
            current
          }
          title
          mainImage {
            asset {
              id
              localFile(width: 1100, quality: 80)
              url
            }
          }
        }
      }
    }
  }
</page-query>

<script>
import AppBanner from '@/components/AppBanner'
import PostList from '@/components/Blog/PostList'
import ProjectList from '@/components/Project/ProjectList'

export default {
  components: {
    AppBanner,
    PostList,
    ProjectList,
  },
  metaInfo: {
    title: 'Home',
  },
}
</script>
