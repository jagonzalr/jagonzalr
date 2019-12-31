
import React, { Fragment } from 'react'

export default () => {
  return (
  	<Fragment>
      <div className='section title'>
        Mexican&nbsp;
        <b>.</b>&nbsp;
        Software Engineer&nbsp;
        <b>.</b>&nbsp;
        <a
          href='https://www.lonelyplanet.com/south-africa/cape-town'
          target='_blank'
        >
          Cape Town
        </a>
      </div>
      <div className='section name'>
        <h1 style={{ marginBottom: '10px' }}>José Antonio <span className='detail'>González Rodríguez</span></h1>
      </div>
      <div className='section living right'>
        <p>
          I currently work at&nbsp;
          <span>
            <a href='https://www.virtual-academies.com/' target='_blank'>
            	Virtual Academies
            </a>
          </span>
        </p>
      </div>
		</Fragment>
	)
}
