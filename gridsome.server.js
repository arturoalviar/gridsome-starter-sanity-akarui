const dataStore = require('./data-store')
const {
  createPagesQuery,
  createPagesWithPagination,
} = require('./src/utils/createPages')

module.exports = function(api) {
  // fix Type with name "SanityDocument" does not exists error
  api.createSchema(({ addSchemaTypes }) => {
    addSchemaTypes(`
      type SanityDocument implements Node @infer {
        id: ID!
      }
    `)
  })

  api.loadSource(store => {
    // Use the Data store API here: https://gridsome.org/docs/data-store-api
    store.addMetadata('sanityOptions', dataStore.sanity)
  })

  api.createPages(async ({ graphql, createPage }) => {
    const { data } = await graphql(createPagesQuery)

    const allSanityPosts = data.allSanityPost.edges
    const allSanityProjects = data.allSanityProject.edges

    createPagesWithPagination({
      edges: allSanityPosts,
      component: './src/templates/Post.vue',
      path: 'blog',
      createPage,
    })
    createPagesWithPagination({
      edges: allSanityProjects,
      component: './src/templates/Project.vue',
      path: 'projects',
      createPage,
    })
  })
}
