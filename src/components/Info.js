
import React, { Fragment } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

export default () => {
	const data = useStaticQuery(
    graphql`
      query {
        allSocialLinksJson {
          nodes {
          	id
          	name
          	url
          }
        }
      }
    `
  )

  return (
  	<Fragment>
      <div className='item'>
      </div>
			<div className='section social-links'>
		    <ul>
		    	{data.allSocialLinksJson.nodes.map(({ id, name, url }) =>
		    		<li key={id}>
			        <a href={url} target='blank' aria-label={name}>
			          <i className={`icons8-${name.toLowerCase()}`}></i>
			        </a>
			      </li>
		    	)}
		    </ul>
		  </div>
		  <div className='section title'>
		    Mexican&nbsp;
		    <b>.</b>&nbsp;
		    Software Engineer&nbsp;
		    <b>.</b>&nbsp;
		    <a
		    	href='https://www.lonelyplanet.com/south-africa/cape-town'
		    	target='blank'
		    >
		    	Cape Town
		    </a>
  		</div>
  		<div className='section name'>
        <h2 style={{ marginBottom: '10px' }}>
        	José Antonio González Rodríguez
        </h2>
      </div>
      <div className='section living right'>
        <p>
          I currently work at&nbsp;
          <span>
            <a href='https://www.virtual-academies.com/' target='blank'>
            	Virtual Academies
            </a>
          </span>
        </p>
      </div>
		</Fragment>
	)
}
