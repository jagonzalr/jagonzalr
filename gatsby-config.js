/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
    title: 'jagonzalr',
    description: 'Personal website',
    author: 'Jose Antonio Gonzalez Rodriguez',
    siteUrl: 'https://jagonzalr.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
  	'gatsby-plugin-sass',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    'gatsby-plugin-robots-txt',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: `${__dirname}/src/projects/`,
      },
    },
    {
	    resolve: 'gatsby-plugin-google-analytics',
	    options: {
	      trackingId: 'UA-111640764-1'
	    }
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
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
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md']
      }
    }
  ]
}