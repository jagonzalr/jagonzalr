import React from 'react'

export default () => {
	return (
		<footer className='footer mt-5 py-4'>
      <div className='container'>
        <div className='row'>
          <div className='col text-center'>
            <span className='credit'>
              Made with&nbsp;
              <a
                href='https://www.gatsbyjs.org/'
                rel='noopener noreferrer'
                target='_blank'
              >
                Gatsby
              </a>
            </span>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col text-center'>
            <span className='credit'>
            	Icons&nbsp;from&nbsp;
				      <a
				        href='https://icons8.com'
				        target='_blank'
				        rel='noopener noreferrer'
				      >
				        Icons8
				      </a>
				    </span>
          </div>
        </div>
      </div>
    </footer>
	)
}
