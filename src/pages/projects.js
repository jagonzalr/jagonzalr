import React from 'react'
import { graphql } from 'gatsby'

import Section from '../components/Section'

const Projects = ({ data }) => (
  <Section data={data} section={'projects'} title={'Projects'} />
)

export default Projects

export const query = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { type: { eq: "project" } } }
    ) {
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
