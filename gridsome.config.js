require('dotenv').config({
  path: '.env',
})
const tailwind = require('tailwindcss')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteName: 'Akarui',
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwind()],
      },
    },
  },
  plugins: [
    {
      use: 'gridsome-plugin-svg',
      options: {
        goesBothWays: true,
      },
    },
    {
      use: 'gridsome-source-sanity',
      options: {
        projectId: `${process.env.SANITY_PROJECT_ID}`,
        dataset: `${process.env.SANITY_DATASET}`,
        // comment out or delete the line below if you are not using a token
        token: `${process.env.SANITY_TOKEN}`,
        overlayDrafts: !isProd,
        watchMode: !isProd,
      },
    },
    {
      use: '@noxify/gridsome-plugin-remote-image',
      options: {
        cache: false,
        typeName: 'SanityImageAsset',
        schemaType: 'Image',
        sourceField: 'url',
        targetField: 'localFile',
        targetPath: 'src/assets/sanity/images',
      },
    },
  ],
}
