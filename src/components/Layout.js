import React from 'react'

import '../styles/index.scss'

export default ({ children }) => {
	return (
		<div className='container mt-2'>
			{children}
		</div>
	)
}