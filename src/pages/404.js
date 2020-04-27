
import React, { Fragment } from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

export default () => (
	<Layout>
		<div className='w-100 h-100 p-2 mx-auto'>
		  <h2 className='title'>Upsi, wrong page</h2>
		  <Link to={'/'}>
		  	<p className='text'>Go back to safety</p>
		  </Link>
		</div>
	</Layout>
)
