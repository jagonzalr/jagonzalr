/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	siteMetadata: {
    title: 'jagonzalr',
    github: 'https://github.com/jagonzalr'
  },
  plugins: [
    'gatsby-plugin-eslint',
  	'gatsby-plugin-sass',
  	'gatsby-plugin-react-helmet',
  	'gatsby-transformer-json',
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
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
        display: `standalone`,
        icon: 'src/images/favicon.png'
      }
    },
    'gatsby-plugin-offline'
  ]
}