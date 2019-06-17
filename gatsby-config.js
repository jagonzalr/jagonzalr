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
  	'gatsby-transformer-json',
    {
      resolve:'gatsby-source-filesystem',
      options: {
        path: './src/data/'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `jagonzalr`,
        short_name: `jagonzalr`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        display: `standalone`,
        icon: `src/images/icon.png`
      }
    },
    'gatsby-plugin-offline'
  ]
}