
import React, { Fragment } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

const NotFound = () => (
	<Layout>
		<div className='row py-1 px-4'>
			<div className='col-sm-12 col-md-6 col-lg-8'>
	  		<h1 className='title'>Upsi, wrong page</h1>
	  		<Link to={'/'} className='bold-text text'>
	  			Go back to safety
	  		</Link>
	  	</div>
	  </div>
	</Layout>
)

export default NotFound
