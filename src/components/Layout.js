import React from 'react'

import Navbar from './Navbar'

import '../styles/index.scss'

const Layout = ({ children }) => {
	return (
		<div className='container mt-2'>
			<div className='w-100 h-100 p-2 mx-auto'>
				<Navbar />
				{children}
			</div>
		</div>
	)
}

export default Layout
