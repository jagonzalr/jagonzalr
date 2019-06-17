
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
	const data = useStaticQuery(
    graphql`
      query {
        allProjectsJson {
          nodes {
          	id
          	name
          	url
          }
        }
      }
    `
  )

  return (
  	<div className='section projects right'>
      <p className='intro'>My current projects</p>
      <ul>
        {data.allProjectsJson.nodes.map(({ id, name, url }) =>
          <li key={id}>
            <span>
              <a href={url} target='blank'>
                {name}
              </a>
            </span>
          </li>
        )}
      </ul>
    </div>
	)
}
