import React, { Fragment } from 'react'
import Helmet from 'react-helmet'

export default ({ theme }) => (
  <Fragment>
    <Helmet>
      <meta charSet='utf-8' />
      <meta name='author' content='Jose Antonio Gonzalez Rodriguez' />
      <meta name='description' content='My personal website build with GatsbyJS.' />
      <meta name='theme-color' content='#ffffff' />
      <meta name='keywords' content='jagonzalr, Virtual Academies, Github, AWS, GatsbyJS' />
      <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
      <meta http-equiv='Content-Security-Policy' content='upgrade-insecure-requests' />
      <title>jagonzalr</title>
      <body className={theme} />
    </Helmet>
  </Fragment>
)
