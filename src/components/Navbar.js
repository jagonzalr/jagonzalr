import React, { Fragment, useEffect, useState } from 'react'
import Toggle from 'react-toggle'
import Cache from '@aws-amplify/cache'
import { Link } from 'gatsby'

import Head from './Head'
import MoonEmoji from './MoonEmoji'
import SunEmoji from './SunEmoji'

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
			<nav className='nav justify-content-between px-4 mt-2 mb-4'>
				<Link className='navbar-brand' to='/'>jagonzalr</Link>
				<Link className='navbar-link' to='/'>Projects</Link>
	    </nav>
		</Fragment>
	)
}