import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Link } from 'gatsby'
import Toggle from 'react-toggle'

import Head from './Head'
import MoonEmoji from './MoonEmoji'
import SunEmoji from './SunEmoji'
import ThemeContext from '../context/ThemeContext'
import LogoDark from '../images/LogoDark.svg'
import LogoLight from '../images/LogoLight.svg'

export default () => {
	const [theme, setTheme] = useContext(ThemeContext)
	return (
		<Fragment>
			<Head />
			<nav className='nav justify-content-between py-1 px-4'>
				<Link className='navbar-brand' to='/'>
					{theme === 'dark' ?
						<LogoDark /> :
						<LogoLight />
					}
				</Link>
				<Link to='/projects'>Projects</Link>
				<div className='d-inline-flex'>
					<Toggle
		        checked={theme === 'dark'}
		        aria-label={theme === 'dark' ? 'Change to light theme' : 'Change to dark theme'}
		        icons={{
		          checked: <MoonEmoji />,
		          unchecked: <SunEmoji />
		        }}
		        onChange={e => {
		        	const theme = e.target.checked ? 'dark' : 'light'
		        	setTheme(theme)
		        }}
		      />
		    </div>
	    </nav>
		</Fragment>
	)
}