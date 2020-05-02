import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/Layout'

export default ({ data }) => {
	const project = data.mdx
	return (
		<Layout>
			<div className='row py-1 px-4'>
      	<div className='col-sm-12' style={{ marginBottom: '1rem', marginTop: '1rem' }}>
					<h2 className='d-inline subtitle underline'>{project.frontmatter.title}</h2>
				</div>
				<div className='col-sm-12'>
					<p className='text'>{project.frontmatter.tagline}</p>
					<a
						className='bold-text text'
						href={project.frontmatter.link}
						target='_blank'
					>
						{project.frontmatter.link}
					</a>
				</div>
			</div>
			<div className='row py-1 px-4 mt-3'>
				<div className='col-sm-12'>
					<MDXRenderer>{project.body}</MDXRenderer>
				</div>
			</div>
		</Layout>
	)
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        tagline
        link
      }
    }
  }
 `