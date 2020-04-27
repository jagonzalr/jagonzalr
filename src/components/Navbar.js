import React, { Fragment, useEffect, useState } from 'react'
import { Link } from 'gatsby'

import Head from './Head'

export default () => {
	return (
		<Fragment>
			<Head />
			<nav className='nav justify-content-between px-4 mt-2 mb-4'>
				{/*<Link className='navbar-brand' to='/'>jagonzalr</Link>
				<Link className='navbar-link' to='/'>Projects</Link>*/}
	    </nav>
		</Fragment>
	)
}