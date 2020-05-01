import React, { Fragment, useEffect, useState, useRef, useContext } from 'react'

import CycleText from '../components/CycleText'
import Layout from '../components/Layout'
import ThemeContext from '../context/ThemeContext'

import CoffeeDoodleDark from '../images/CoffeeDoodleDark.svg'
import CoffeeDoodleLight from '../images/CoffeeDoodleLight.svg'
import StrollingDoodleDark from '../images/StrollingDoodleDark.svg'
import StrollingDoodleLight from '../images/StrollingDoodleLight.svg'
import ZombieingDoodleDark from '../images/ZombieingDoodleDark.svg'
import ZombieingDoodleLight from '../images/ZombieingDoodleLight.svg'

export default () => {
	const [index, setIndex] = useState(0)
	const [doodles, setDoodles] = useState([])
	const [img, setImg] = useState(null)
	const theme = useContext(ThemeContext)[0]

	useEffect(() => {
		const number = Math.floor(Math.random() * 3) + 1
		if (number === 1) setDoodles([CoffeeDoodleDark, CoffeeDoodleLight])
		if (number === 2) setDoodles([StrollingDoodleDark, StrollingDoodleLight])
		if (number === 3) setDoodles([ZombieingDoodleDark, ZombieingDoodleLight])
	}, [])

	useEffect(() => {
		changeImg()
	}, [doodles.length, theme])

	const changeImg = () => {
		const [darkDoodle, lightDoodle] = doodles
		setImg(theme === 'dark' ? darkDoodle : lightDoodle)
	}

	return (
		<Fragment>
			<Layout>
				<div className='row py-1 px-4'>
					<div className='col-sm-12 col-md-6 col-lg-8'>
						<p className='text'>
							<span className='accent-text'>Hola</span>, my name is
						</p>
						<h1 className='title'>José Antonio González Rodríguez</h1>
						<CycleText />
					</div>
					<div className='col-md-6 col-lg-4 d-none d-md-block'>
						{img && <img src={img} className='img-fluid w-100 h-100' alt='Doodle Image' />}
					</div>
				</div>
				<div className='row justify-content-start py-1 px-4'>
					<div className='col col-md-8 col-lg-7'>
						<p className='text'>
							I currently live in Cape Town building experiential learning at{' '}
							<a
								className='bold-text'
								href='https://virtual-academies.com'
								target='_blank'
							>
								Virtual Academies
							</a>.
						</p>
					</div>
				</div>
				<div className='row justify-content-end py-1 px-4'>
					<div className='col col-md-8 col-lg-7'>
						<p className='text'>
							My tech stack includes{' '}
							<a
								href='https://nodejs.org/'
								target='_blank'
								className='bold-text'
							>
								Node.js
							</a>,{' '}
							<a
								href='https://reactjs.org/'
								target='_blank'
								className='bold-text'
							>
								React
							</a>,{' '}
							<a
								href='https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2020-01-20&ci=AWS00720188'
								target='_blank'
								className='bold-text'
							>
								AWS
							</a>,{' '}
							<a
								href='https://serverless.com/'
								target='_blank'
								className='bold-text'
							>
								Serverless
							</a>
							{' '}and{' '}
							<a
								href='https://www.terraform.io/'
								target='_blank'
								className='bold-text'
							>
								Terraform
							</a>.
						</p>
					</div>
				</div>
				<div className='row justify-content-start py-1 px-4'>
					<div className='col col-md-8 col-lg-7'>
						<p className='text'>
							Find me at{' '}
							<a
								className='bold-text'
								href='https://github.com/jagonzalr'
								target='_blank'
							>
								Github
							</a>,{' '}
							<a
								className='bold-text'
								href='https://www.instagram.com/jagonzalr/'
								target='_blank'
							>
								Instagram
							</a>{' '}
							or{' '}
							<a
								className='bold-text'
								href='https://www.linkedin.com/in/jagonzalr/'
								target='_blank'
							>
								LinkedIn
							</a>
							.
						</p>
					</div>
				</div>
				<div className='row justify-content-end py-1 px-4'>
					<div className='col col-md-8 col-lg-7'>
						<p className='text'>
							Made with <a className='bold-text' href='https://www.gatsbyjs.org/' target='_blank'>Gatsbyjs</a>,{' '}
							doodles from <a className='bold-text' href='https://www.opendoodles.com/' target='_blank'>Open Doodles</a>.
						</p>
					</div>
				</div>
			</Layout>
		</Fragment>
	)
}
