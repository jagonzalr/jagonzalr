
import React, { Fragment, useEffect, useState, useRef } from 'react'

import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import AWSCertified from '../images/aws-certified.png'
import StrollingDoodle from '../images/StrollingDoodle.svg'

function useInterval(callback, delay) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

const OPTIONS = [
	'software engineer',
	'Mexican',
	'AWS Certified',
	'amateur photographer',
	'casual gamer',
	'cinephile',
	'bibliophile',
	'Netflix binger'
]

export default () => {
	const [index, setIndex] = useState(0)

	useInterval(() => {
		setIndex((index + 1) % OPTIONS.length)
	}, 2500)

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
								{index !== 2 &&
									<Fragment>
										{index === 3 ? 'an' : 'a'}{' '}		
									</Fragment>
								}
								{index !== 2 ?
									<span
										className='blue-text'
									>
										{OPTIONS[index]}
									</span> :
									<img
										className='img-fluid mt-n2'
										style={{ width: '30%' }}
										src={AWSCertified}
									/>
								}.
							</p>
						</div>
						<div className='col-md-6 col-lg-4 d-none d-md-block'>
							<img src={StrollingDoodle} className='img-fluid w-100 h-100' />
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
									href='https://www.linkedin.com/in/jagonzalr/'
									target='_blank'
								>
									LinkedIn
								</a>{' '}
								or{' '}
								<a
									className='bold-text'
									href='https://www.instagram.com/jagonzalr/'
									target='_blank'
								>
									Instagram
								</a>.
							</p>
						</div>
					</div>
				</div>
			</Layout>
		</Fragment>
	)
}
