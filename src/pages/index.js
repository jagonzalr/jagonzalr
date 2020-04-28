import React, { Fragment, useEffect, useState, useRef } from 'react'
import { useTyping } from 'use-typing'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import CoffeeDoodle from '../images/CoffeeDoodle.svg'
import StrollingDoodle from '../images/StrollingDoodle.svg'
import ZombieingDoodle from '../images/ZombieingDoodle.svg'

const OPTIONS = [
	'software engineer',
	'Mexican',
	'AWS Certified',
	'cinephile',
	'casual gamer',
	'bibliophile',
	'Netflix binger',
	'amateur photographer'
]

export default () => {
	const [index, setIndex] = useState(0)
	const [img, setImg] = useState(null)

	const text = useTyping({ phrases: OPTIONS })

	useEffect(() => {
		changeImg()
	}, [])

	const changeImg = () => {
		const number = Math.floor(Math.random() * 3) + 1
		if (number === 1) setImg(CoffeeDoodle)
		if (number === 2) setImg(StrollingDoodle)
		if (number === 3) setImg(ZombieingDoodle)
	}

	return (
		<Fragment>
			<Layout>
				<div className='w-100 h-100 p-2 mx-auto'>
					<Navbar />
					<div className='row py-1 px-4 mb-2'>
						<div className='col-sm-12 col-md-6 col-lg-8'>
							<p className='text'>
								<span className='blue-text'>Hola</span>, my name is
							</p>
							<h1 className='title'>José Antonio González Rodríguez</h1>
							<p className='text'>
								and I'm{' '}
								{!text.startsWith('A') &&
									<Fragment>
										{text.startsWith('a') ? 'an' : 'a'}{' '}
									</Fragment>
								}
								<span
									className='blue-text'
								>
									{text}
								</span>.
							</p>
						</div>
						<div className='col-md-6 col-lg-4 d-none d-md-block'>
							{img && <img src={img} className='img-fluid w-100 h-100' />}
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
				</div>
			</Layout>
		</Fragment>
	)
}
