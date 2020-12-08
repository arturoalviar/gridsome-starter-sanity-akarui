const gql = String.raw

const createPagesQuery = gql`
  {
    allSanityPost(sortBy: "publishedAt") {
      edges {
        node {
          id
          mainImage {
            asset {
              id
            }
          }
          slug {
            current
          }
        }
      }
    }
    allSanityProject(sortBy: "completed") {
      edges {
        node {
          id
          mainImage {
            asset {
              id
            }
          }
          slug {
            current
          }
        }
      }
    }
  }
`

const createPagesWithPagination = ({ edges, path, component, createPage }) => {
  edges.forEach(({ node }, index) => {
    const { id } = node
    const prevNode = index === 0 ? edges[edges.length - 1] : edges[index - 1]
    const nextNode = index === edges.length - 1 ? edges[0] : edges[index + 1]
    const { id: prevID } = prevNode.node
    const { id: nextID } = nextNode.node

    createPage({
      component,
      path: `/${path}/${node.slug.current}`,
      context: {
        id,
        prevID,
        nextID,
      },
    })
  })
}

exports.createPagesQuery = createPagesQuery
exports.createPagesWithPagination = createPagesWithPagination
