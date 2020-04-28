import React from 'react'

import '../styles/index.scss'

require('regenerator-runtime/runtime')

export default ({ children }) => (
	<div className='container mt-2'>
		{children}
	</div>
)