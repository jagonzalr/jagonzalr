import React, { Fragment, useEffect, useState } from 'react'
import Toggle from 'react-toggle'
import { useStaticQuery, graphql } from 'gatsby'

import Head from './Head'
import MoonEmoji from './MoonEmoji'
import SunEmoji from './SunEmoji'

export default () => {
	const [theme, setTheme] = useState(localStorage.getItem('jagonzalr_theme') || 'light')
	useEffect(() => {
		if (!window.matchMedia) {
			return
		}

		let darkTheme = null
		const localTheme = localStorage.getItem('jagonzalr_theme')
		const listener = e => {
			let newTheme = e.matches ? 'dark' : 'light'
			setTheme(newTheme)
			localStorage.setItem('jagonzalr_theme', newTheme)
		}

		darkTheme = window.matchMedia('(prefers-color-scheme: dark)')
		darkTheme.addListener(listener)
		setTheme(localTheme || (darkTheme.matches ? 'dark' : 'light'))

		return () => {
			if (darkTheme) {
				darkTheme.removeListener(listener)
			}
		}
	}, [])

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
	        checked={theme === 'dark'}
	        icons={{
	          checked: <MoonEmoji />,
	          unchecked: <SunEmoji />
	        }}
	        onChange={e => {
	        	const theme = e.target.checked ? 'dark' : 'light'
	        	setTheme(theme)
	        	localStorage.setItem('jagonzalr_theme', theme)
	        }}
	      />
			</header>
		</Fragment>
	)
}
