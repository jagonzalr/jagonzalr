import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const Section = ({ data, section, title }) => (
  <Layout>
    <div className="row py-2 px-4">
      <div
        className="col-sm-12"
        style={{ marginBottom: '2rem', marginTop: '1rem' }}
      >
        <h2 className="d-inline subtitle underline">{title}</h2>
      </div>
      {data.allMdx.edges.map(({ node }) => (
        <div key={node.id} className="col-sm-12 col-md-6 my-1">
          <div className="card">
            <div className="card-body">
              <Link to={`/${section}/${node.fields.slug}`}>
                <h5 className="card-title">{node.frontmatter.title}</h5>
              </Link>
              <p className="card-text">{node.frontmatter.tagline}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </Layout>
)

export default Section
