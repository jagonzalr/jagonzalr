
import React, { Fragment } from 'react'
import { Link } from 'gatsby'

import Head from '../components/Head'

export default () => (
	<Fragment>
		<Head />
		<div className='wrong-page'>
		  <h2 className='wrong-page-title'>Upsi, wrong page</h2>
		  <Link to={'/'}>
		  	<p className='wrong-page-subtitle'>Go back to safety</p>
		  </Link>
		</div>
	</Fragment>
)
