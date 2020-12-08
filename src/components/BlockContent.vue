<template>
  <PortableText
    v-if="hasBlocks"
    :blocks="blocks"
    :serializers="serializers"
    :projectId="$static.metadata.sanityOptions.projectId"
    :dataset="$static.metadata.sanityOptions.dataset"
  />
</template>

<static-query>
  {
    metadata {
      sanityOptions {
        projectId
        dataset
      }
    }

    localImages: allSanityImageAsset {
      edges {
        node {
          id
          localFile
          url
        }
      }
    }
  }
</static-query>

<script>
import PortableText from 'sanity-blocks-vue-component'

export default {
  props: {
    blocks: Array,
  },
  components: {
    PortableText,
  },
  computed: {
    hasBlocks() {
      return this.blocks && this.blocks.length
    },
  },
  data() {
    return {
      serializers: {
        types: {
          image: ({ node }) => {
            const localImage = this.$static.localImages.edges.find(
              ({ node: localImage }) => {
                if (localImage.id === node.asset._ref) {
                  return localImage
                }
              }
            )

            if (localImage) {
              const { node } = localImage

              return (
                <figure>
                  <g-image src={node.localFile} />
                </figure>
              )
            }

            return (
              <figure>
                <img
                  src={this.$urlForImage(
                    node,
                    this.$static.metadata.sanityOptions
                  )
                    .auto('format')
                    .quality(80)
                    .url()}
                  alt={node.alt}
                />
              </figure>
            )
          },
        },
      },
    }
  },
}
</script>

<style scoped>
h1 {
  @apply text-3xl leading-none;
}
h2 {
  @apply text-2xl leading-tight;
}
h3 {
  @apply text-xl leading-tight;
}
h4 {
  @apply text-lg leading-snug;
}
h5 {
  @apply text-base leading-normal;
}
h6 {
  @apply text-sm leading-normal;
}

blockquote {
  @apply border-l-4 border-primary italic pl-4 mb-8 text-lg text-gray;
}

figure {
  @apply mb-8;
}

ul {
  @apply list-disc ml-4 pb-4;
}

li {
  @apply leading-tight text-base mb-4;
}

p {
  @apply leading-relaxed text-base mb-8;
}

@screen lg {
  h1 {
    @apply text-5xl;
  }
  h2 {
    @apply text-4xl;
  }
  h3 {
    @apply text-3xl;
  }
  h4 {
    @apply text-2xl;
  }
  h5 {
    @apply text-xl;
  }
  h6,
  p {
    @apply text-lg;
  }
}
</style>
