const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({ node, getNode, basePath: 'pages' }).replace(/\//g, '')
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const projectTemplate = path.resolve('./src/templates/project.js')

	const { createPage } = actions
  const result = await graphql(`
    {
      projects: allMdx {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              tagline
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  const projects = result.data.projects.edges
  projects.forEach(({ node }) => {
    createPage({
      path: `/projects/${node.fields.slug}`,
      component: projectTemplate,
      context: {
        slug: node.fields.slug
      }
    })
  })
}