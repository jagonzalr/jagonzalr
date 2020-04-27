/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
    title: 'jagonzalr',
    description: 'Personal website',
    author: 'Jose Antonio Gonzalez Rodriguez'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
  	`gatsby-plugin-sass`,
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
	    resolve: 'gatsby-plugin-google-analytics',
	    options: {
	      trackingId: 'UA-111640764-1'
	    }
	  },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jagonzalr`,
        short_name: `jagonzalr`,
        start_url: `/`,
        background_color: `#2e27f8`,
        theme_color: `#2e27f8`,
        display: `minimal-ui`,
        icon: 'src/images/favicon.png'
      }
    },
    'gatsby-plugin-offline'
  ]
}