import React from 'react'

import CycleText from '../components/CycleText'
import Layout from '../components/Layout'

const Main = () => {
  return (
    <Layout>
      <div className="row justify-content-start px-4">
        <div className="col col-md-12">
          <p className="text">
            <span className="accent-text">Hola</span>, my name is
          </p>
          <h1 className="title">José Antonio González Rodríguez</h1>
          <CycleText />
        </div>
      </div>
      <div className="row justify-content-start px-4">
        <div className="col col-md-12">
          <p className="text">
            I currently live in Porto and work at{' '}
            <a
              href="https://awesome-source.com/"
              target="_blank"
              className="bold-text"
              rel="noopener"
            >
              Awesome Source
            </a>{' '}
            where I build intelligent horticultural automation with{' '}
            <a
              href="https://coretex.ag/"
              target="_blank"
              className="bold-text"
              rel="noopener"
            >
              Coretex
            </a>{' '}
            and{' '}
            <a
              href="https://redseafarms.com/"
              target="_blank"
              className="bold-text"
              rel="noopener"
            >
              Red Sea Farms
            </a>
            .
          </p>
        </div>
      </div>
      <div className="row justify-content-start px-4">
        <div className="col col-md-12">
          <p className="text">
            Some of my skills are{' '}
            <a
              href="https://nodejs.org/"
              target="_blank"
              className="bold-text"
              rel="noopener"
            >
              Node.js
            </a>
            ,{' '}
            <a
              href="https://reactjs.org/"
              target="_blank"
              className="bold-text"
              rel="noopener"
            >
              React
            </a>
            ,{' '}
            <a
              href="https://golang.org/"
              target="_blank"
              className="bold-text"
              rel="noopener"
            >
              Go
            </a>
            ,{' '}
            <a
              href="https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2020-01-20&ci=AWS00720188"
              target="_blank"
              className="bold-text"
              rel="noopener"
            >
              AWS
            </a>
            ,{' '}
            <a
              href="https://www.terraform.io/"
              target="_blank"
              className="bold-text"
              rel="noopener"
            >
              Terraform
            </a>
            ,{' '}
            <a
              href="https://en.wikipedia.org/wiki/Serverless_computing"
              target="_blank"
              className="bold-text"
              rel="noopener"
            >
              Serverless
            </a>{' '}
            and{' '}
            <a
              href="https://en.wikipedia.org/wiki/Systems_architecture"
              target="_blank"
              className="bold-text"
              rel="noopener"
            >
              Systems Architecture
            </a>
            .
          </p>
        </div>
      </div>
      <div className="row justify-content-start px-4">
        <div className="col col-md-12">
          <p className="text">
            Find me at{' '}
            <a
              className="bold-text"
              href="https://github.com/jagonzalr"
              target="_blank"
              rel="noopener"
            >
              Github
            </a>
            ,{' '}
            <a
              className="bold-text"
              href="https://www.instagram.com/jagonzalr/"
              target="_blank"
              rel="noopener"
            >
              Instagram
            </a>{' '}
            or{' '}
            <a
              className="bold-text"
              href="https://www.linkedin.com/in/jagonzalr/"
              target="_blank"
              rel="noopener"
            >
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
      <div className="row justify-content-start px-4">
        <div className="col col-md-12">
          <p className="text">
            Made with{' '}
            <a
              className="bold-text"
              href="https://www.gatsbyjs.org/"
              target="_blank"
              rel="noopener"
            >
              Gatsbyjs
            </a>
            .
          </p>
        </div>
      </div>
    </Layout>
  )
}

export default Main
