
import React, { Fragment } from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Info from '../components/Info'
import Projects from '../components/Projects'
import Stack from '../components/Stack'

export default () => (
	<Fragment>
		<div className='wrapper'>
			<Header />
			<Info />
			<Stack/>
			<Projects />
			<Footer />
		</div>
	</Fragment>
)
