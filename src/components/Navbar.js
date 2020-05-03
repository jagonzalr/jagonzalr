import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Link } from 'gatsby'
import Toggle from 'react-toggle'

import Head from './Head'
import MoonEmoji from './MoonEmoji'
import SunEmoji from './SunEmoji'
import ThemeContext from '../context/ThemeContext'

export default () => {
	const [theme, setTheme] = useContext(ThemeContext)
	return (
		<Fragment>
			<Head />
			<nav className='nav justify-content-between py-1 px-4'>
				<Link className='navbar-brand small-text' to='/'>
					{'< jagr />'}
				</Link>
				<Link to='/projects' style={{ paddingTop: '0.3125rem', paddingBottom: '0.3125rem' }}>Projects</Link>
				<div className='d-inline-flex' style={{ paddingTop: '0.3125rem', paddingBottom: '0.3125rem' }}>
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