module.exports = {
  siteMetadata: {
    title: 'My Recipe Box',
    subTitle: 'Tracking delicious ingredients for your shopping list',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-glamor',
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true,
      },
    },
    {
      resolve: `gatsby-source-drupal`,
      options: {
        baseUrl: `https://live-contentacms.pantheonsite.io/`,
        apiBase: `api`, // optional, defaults to `jsonapi`
      },
    },
  ],

}
