import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

export default ({ data, location }) => (
	<Layout>
    <div className='row py-1 px-4'>
      <div className='col-sm-12' style={{ marginBottom: '2rem', marginTop: '1rem' }}>
    		<h2 className='d-inline subtitle underline'>Projects</h2>
      </div>
  		{data.allMdx.edges.map(({ node }) => (
        <div key={node.id} className='col-sm-12 my-1'>
        	<Link to={`/projects/${node.fields.slug}`}>
  	        <h4>{node.frontmatter.title}</h4>
          </Link>
          <p>{node.frontmatter.tagline}</p>
        </div>
      ))}
    </div>
	</Layout>
)

export const query = graphql`
  query {
    allMdx(sort: { fields: [frontmatter___title], order: ASC }) {
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