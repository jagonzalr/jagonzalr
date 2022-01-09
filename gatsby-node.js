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
  const fileTemplate = path.resolve('./src/templates/file.js')
  await createPages('open-source', 'open-source', graphql, actions, fileTemplate)
  await createPages('project', 'projects', graphql, actions, fileTemplate)
  await createPages('saas', 'saas', graphql, actions, fileTemplate)
}

async function createPages(filter, path, graphql, actions, fileTemplate) {
	const { createPage } = actions
  const result = await graphql(`
    {
      files: allMdx(filter: {frontmatter: {type: {eq: "${filter}"}}}) {
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

  const files = result.data.files.edges
  files.forEach(({ node }) => {
    createPage({
      path: `/${path}/${node.fields.slug}`,
      component: fileTemplate,
      context: {
        slug: node.fields.slug
      }
    })
  })
}