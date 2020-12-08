<template>
  <Layout>
    <h1 class="aka-section-heading">Projects</h1>
    <ProjectList
      v-if="$page.projects.edges.length"
      :projects="$page.projects.edges"
    />
    <div v-else>
      <h3>Nothing here yet...</h3>
    </div>
    <Pager
      ariaLabel="Projects pagination navigation"
      class="aka-pagination-navigation flex flex-row items-center justify-center py-4 mt-4 w-full"
      linkClass="font-medium mx-2 p-2"
      :info="$page.projects.pageInfo"
    />
  </Layout>
</template>

<page-query>
query ($page: Int){
  projects: allSanityProject (sortBy: "completed", perPage: 3, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
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
import { Pager } from 'gridsome'
import ProjectList from '@/components/Project/ProjectList'

export default {
  components: {
    Pager,
    ProjectList,
  },
  metaInfo: {
    title: 'Projects',
  },
}
</script>
