import React from 'react'
import { graphql } from 'gatsby'

import Section from '../components/Section'

const Saas = ({ data }) => (
  <Section
    data={data}
    section={'saas'}
    title={'SaaS'}
  />
)

export default Saas

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___title, order: ASC}, filter: { frontmatter: { type: { eq: "saas" } } }) {
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