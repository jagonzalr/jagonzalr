import React, { Fragment, useState } from 'react'
import Toggle from 'react-toggle'
import { useStaticQuery, graphql } from 'gatsby'

import Head from './Head'
import MoonEmoji from './MoonEmoji'
import SunEmoji from './SunEmoji'

export default () => {
	const [theme, setTheme] = useState('light')
	const data = useStaticQuery(
    graphql`
      query {
        allSocialLinksJson {
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
		<Fragment>
			<Head theme={theme} />
			<header>
				<div className='social-links'>
		      <ul>
		        {data.allSocialLinksJson.nodes.map(({ id, name, url }) =>
		          <li key={id}>
		            <a href={url} target='blank' aria-label={name}>
		              <i className={`icons8-${name.toLowerCase()}`}></i>
		            </a>
		          </li>
		        )}
		      </ul>
		     </div>
	      <Toggle
	        defaultChecked={false}
	        icons={{
	          checked: <MoonEmoji />,
	          unchecked: <SunEmoji />
	        }}
	        onChange={e => setTheme(e.target.checked ? 'dark' : 'light')}
	      />
			</header>
		</Fragment>
	)
}
