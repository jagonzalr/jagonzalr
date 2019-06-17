
import React from 'react'
import { Link } from 'gatsby'

export default () => (
	<div className='wrong-page'>
	  <h2 className='wrong-page-title'>Upsi, wrong page</h2>
	  <Link to={'/'}>
	  	<p className='wrong-page-subtitle'>Go back to safety</p>
	  </Link>
	</div>
)
