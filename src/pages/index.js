
import React, { Fragment } from 'react'

import Head from '../components/Head'
import Info from '../components/Info'
import Projects from '../components/Projects'
import Stack from '../components/Stack'

export default () => (
	<Fragment>
		<Head />
		<div className='wrapper'>
			<Info />
			<Stack/>
			<Projects />
		</div>
	</Fragment>
)
