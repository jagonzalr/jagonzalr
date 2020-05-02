import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

import Layout from '../components/Layout'

export default ({ data }) => {
	const project = data.mdx
	return (
		<Layout>
			<div className='row py-1 px-4'>
      	<div className='col-sm-12'>
					<h2 className='subtitle'>{project.frontmatter.title}</h2>
					<p>{project.frontmatter.tagline}</p>
					<a
						className='bold-text'
						href={project.frontmatter.link}
						target='_blank'
					>
						{project.frontmatter.link}
					</a>
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