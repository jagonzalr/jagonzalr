import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'

const Posts = ({ data }) => (
	<Layout>
    <div className='row py-1 px-4'>
      <div className='col-sm-12' style={{ marginBottom: '2rem', marginTop: '1rem' }}>
    		<h2 className='d-inline subtitle underline'>Posts</h2>
      </div>
  		{data.allMdx.edges.map(({ node }) => (
        <div key={node.id} className='col-sm-12 mb-2 mt-1'>
          <small>{new Date(node.frontmatter.date).toDateString()}</small>
        	<a href={node.frontmatter.link} target='blank'>
  	        <h4>{node.frontmatter.title}</h4>
          </a>
          <p>{node.frontmatter.tagline}</p>
        </div>
      ))}
    </div>
	</Layout>
)

export default Posts

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}, filter: { frontmatter: { type: { eq: "post" } } }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            tagline
            date
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