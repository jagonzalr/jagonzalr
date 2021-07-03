import React, { useEffect, useState, useContext } from 'react'
import useInterval from 'use-interval'

import CycleText from '../components/CycleText'
import Layout from '../components/Layout'
import ThemeContext from '../context/ThemeContext'

const Main = () => {
	const [index, setIndex] = useState(0)
	const [doodle, setDoodle] = useState(null)
	const theme = useContext(ThemeContext)[0]

	useInterval(() => {
		setIndex(index + 1)
	}, 2500)

	useEffect(() => {
		if (index % 3 === 0) setDoodle('coffee')
		if (index % 3 === 1) setDoodle('stroll')
		if (index % 3 === 2) setDoodle('zombie')
	}, [index])

	return (
		<Layout>
			<div className='row justify-content-start px-4'>
				<div className='col col-md-12'>
					<p className='text'>
						<span className='accent-text'>Hola</span>, my name is
					</p>
					<h1 className='title'>José Antonio González Rodríguez</h1>
					<CycleText />
				</div>
			</div>
			<div className='row justify-content-start px-4'>
				<div className='col col-md-12'>
					<p className='text'>
						I currently live in Lisbon building experiential learning at{' '}
						<a
							href='https://virtual-academies.com'
							target='_blank'
							className='bold-text'
							rel='noopener'
						>
							Virtual Academies
						</a>{' '}
						{' '}the future of sustainable cultivation at{' '}
						<a
							href='https://coretex.ag/'
							target='_blank'
							className='bold-text'
							rel='noopener'
						>
							Coretex
						</a>{' '}
						{' '}and helping people generate transcripts in minutes with{' '}
						<a
							href='https://transcribeninja.com/'
							target='_blank'
							className='bold-text'
							rel='noopener'
						>
							Transcribe Ninja
						</a>.
					</p>
				</div>
			</div>
			<div className='row justify-content-start px-4'>
				<div className='col col-md-12'>
					<p className='text'>
						Some of my skills are {' '}
						<a
							href='https://golang.org/'
							target='_blank'
							className='bold-text'
							rel='noopener'
						>
							Go
						</a>,{' '}
						<a
							href='https://nodejs.org/'
							target='_blank'
							className='bold-text'
							rel='noopener'
						>
							Node.js
						</a>,{' '}
						<a
							href='https://reactjs.org/'
							target='_blank'
							className='bold-text'
							rel='noopener'
						>
							React
						</a>,{' '}
						<a
							href='https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2020-01-20&ci=AWS00720188'
							target='_blank'
							className='bold-text'
							rel='noopener'
						>
							AWS
						</a>,{' '}
						<a
							href='https://www.terraform.io/'
							target='_blank'
							className='bold-text'
							rel='noopener'
						>
							Terraform
						</a>{' '}and{' '}
						<a
							href='https://en.wikipedia.org/wiki/Systems_design'
							target='_blank'
							className='bold-text'
							rel='noopener'
						>
							Systems Design
						</a>.
					</p>
				</div>
			</div>
			<div className='row justify-content-start px-4'>
				<div className='col col-md-12'>
					<p className='text'>
						Find me at{' '}
						<a
							className='bold-text'
							href='https://github.com/jagonzalr'
							target='_blank'
							rel='noopener'
						>
							Github
						</a>,{' '}
						<a
							className='bold-text'
							href='https://www.instagram.com/jagonzalr/'
							target='_blank'
							rel='noopener'
						>
							Instagram
						</a>{' '}
						or{' '}
						<a
							className='bold-text'
							href='https://www.linkedin.com/in/jagonzalr/'
							target='_blank'
							rel='noopener'
						>
							LinkedIn
						</a>
						.
					</p>
				</div>
			</div>
			<div className='row justify-content-start px-4'>
				<div className='col col-md-12'>
					<p className='text'>
						Made with <a className='bold-text' href='https://www.gatsbyjs.org/' target='_blank' rel='noopener'>Gatsbyjs</a>.
					</p>
				</div>
			</div>
		</Layout>
	)
}

export default Main
