import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

export default ({ data, location }) => (
	<Layout>
    <div className='row py-1 px-4'>
      <div className='col-sm-12' style={{ marginBottom: '2rem', marginTop: '1rem' }}>
    		<h2 className='d-inline subtitle underline'>Posts</h2>
      </div>
  		{data.allMdx.edges.map(({ node }) => (
        <div key={node.id} className='col-sm-12 my-1'>
        	<a href={node.frontmatter.link} target='blank'>
  	        <h4>{node.frontmatter.title}</h4>
          </a>
          <p>{node.frontmatter.tagline}</p>
        </div>
      ))}
    </div>
	</Layout>
)

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___title, order: ASC}, filter: { frontmatter: { type: { eq: "post" } } }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tagline
            link
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