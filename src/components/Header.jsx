import React, { Fragment, useEffect, useState } from 'react'
import Toggle from 'react-toggle'
import Cache from '@aws-amplify/cache'

import Head from './Head'
import MoonEmoji from './MoonEmoji'
import SunEmoji from './SunEmoji'

const SOCIAL_LINKS = [
	{
		'url': 'https://github.com/jagonzalr',
		'name': 'Github'
	},
	{
		'url': 'https://www.instagram.com/jagonzalr',
		'name': 'Instagram'
	},
	{
		'url': 'https://www.linkedin.com/in/jagonzalr',
		'name': 'LinkedIn'
	}
]

export default () => {
	const [theme, setTheme] = useState(Cache.getItem('jagonzalr_theme') || 'light')
	useEffect(() => {
		if (!window.matchMedia) {
			return
		}

		let darkTheme = null
		const localTheme = Cache.getItem('jagonzalr_theme')
		const listener = e => {
			let newTheme = e.matches ? 'dark' : 'light'
			setTheme(newTheme)
			Cache.setItem('jagonzalr_theme', newTheme)
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

	return (
		<Fragment>
			<Head theme={theme} />
			<header>
				<div className='social-links'>
		      <ul>
		        {SOCIAL_LINKS.map(({ name, url }) =>
		          <li key={url}>
		            <a href={url} target='_blank' aria-label={name}>
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
	        	Cache.setItem('jagonzalr_theme', theme)
	        }}
	      />
			</header>
		</Fragment>
	)
}
