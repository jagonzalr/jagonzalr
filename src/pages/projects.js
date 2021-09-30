import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

const Projects = ({ data }) => (
	<Layout>
    <div className='row py-1 px-4'>
      <div className='col-sm-12' style={{ marginBottom: '2rem', marginTop: '1rem' }}>
    		<h2 className='d-inline subtitle underline'>Projects</h2>
      </div>
  		{data.allMdx.edges.map(({ node }) => (
        <div key={node.id} className='col-sm-12 col-md-6 my-1'>
          <div className='card'>
            <div className='card-body'>
              <Link to={`/projects/${node.fields.slug}`}>
                <h5 className='card-title'>{node.frontmatter.title}</h5>
              </Link>
              <p className='card-text'>{node.frontmatter.tagline}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
	</Layout>
)

export default Projects

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___title, order: ASC}, filter: { frontmatter: { type: { eq: "project" } } }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tagline
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`