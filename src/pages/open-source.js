import React from 'react'
import { graphql } from 'gatsby'

import Section from '../components/Section'

const OpenSource = ({ data }) => (
  <Section
    data={data}
    section={'open-source'}
    title={'Open Source'}
  />
)

export default OpenSource

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___title, order: ASC}, filter: { frontmatter: { type: { eq: "open-source" } } }) {
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