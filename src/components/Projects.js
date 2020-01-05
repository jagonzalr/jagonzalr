import React from 'react'

const PROJECTS = [
  {
    'url': 'https://capturaless.com',
    'name': 'Capturaless'
  },
  {
    'url': 'https://npmpopularity.com',
    'name': 'NPM Popularity'
  },
  {
    'url': 'https://meetingcosts.com',
    'name': 'Meeting Costs'
  },
  {
    'url': 'https://theuniqueid.com',
    'name': 'The Unique ID'
  },
  {
    'url': 'https://opensourcelicences.com',
    'name': 'Open Source Licences'
  }
]

export default () => {
  return (
  	<div className='section projects right'>
      <p className='intro'>My current projects</p>
      <ul>
        {PROJECTS.map(({ name, url }) =>
          <li key={url}>
            <span>
              <a href={url} target='_blank'>
                {name}
              </a>
            </span>
          </li>
        )}
      </ul>
    </div>
	)
}
