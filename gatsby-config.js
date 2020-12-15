module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: "gatsby-source-bigcommerce",
      options: {
        // REQUIRED
        clientId: process.env.GATSBY_API_CLIENT_ID,
        secret: process.env.GATSBY_API_SECRET,
        accessToken: process.env.GATSBY_API_TOKEN,
        storeHash: process.env.GATSBY_API_STORE_HASH,

        //TODO: env vars

        // clientId: "qbrbfgh35pe3fs6l07dc6cr4f0zee5q",
        // secret:
        //   "83a217f3aa3ca349d9e80502003f946936a28d61d7fdf9a7e2737dd5e70d44c7",
        // accessToken: "9xrrtjaoww1sgtajj15chcd3x2cgt2a",
        // storeHash: "u8yeb0alvk",
        endpoints: {
          BigCommerceProducts:
            "/catalog/products?include=images,variants,custom_fields,options,modifiers,videos",
          BigCommerceCategories: "/catalog/categories",
          BigCommerceBrands: "/catalog/brands",
        },
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
