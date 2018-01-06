module.exports = {
  pathPrefix: '/gatsby-flo',
  siteMetadata: {
    title: `Florence Li Ting Fong`,
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `gallery`,
        path: `${__dirname}/src/gallery`,
      },
    },
  ]
}
