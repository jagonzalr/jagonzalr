
'use strict'

import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './worker'
import './assets/styles/index.scss'

const App = () => {
  return (
    <div className="wrapper">
      <div className="section social-links">
        <ul>
          <li>
            <a href="https://github.com/jagonzalr" target="blank" aria-label="Github">
              <i className="icons8-github"></i>
            </a>
          </li>
          <li style={{fontSize: '45px'}}>
            <a href="https://www.instagram.com/jagonzalr/" target="blank" aria-label="Instagram">
              <i className="icons8-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/jagonzalr/" target="blank" aria-label="Linkedin">
              <i className="icons8-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="section title">
        Mexican <b>.</b> Software Engineer <b>.</b> <a href="https://www.lonelyplanet.com/south-africa/cape-town" target="blank">Cape Town</a>
      </div>
      <div className="section name">
        <h2>José Antonio González Rodríguez</h2>
      </div>
      <div className="section living right">
        <p>
          I currently work at&nbsp;
          <span>
            <a href="https://proversity.org" target="blank">Proversity</a>
          </span>
        </p>
      </div>
      <div className="section stack left">
        <p className="intro">My current stack</p>
        <ul>
          <li>
            <span><a href="https://www.djangoproject.com/" target="blank">Django</a></span>,&nbsp;
            <span>
              <a href="http://www.django-rest-framework.org/" target="blank">
                DRF
              </a>
            </span>&nbsp;
            and&nbsp;
            <span>
              <a href="http://flask.pocoo.org/" target="blank">
                Flask
              </a>
            </span>
          </li>
          <li>
            <span>
              <a href="https://nodejs.org/" target="blank">
                Node.js
              </a>
            </span>
            ,&nbsp;
            <span>
              <a href="https://reactjs.org/" target="blank">
                React
              </a>
            </span>
            ,&nbsp;
            <span>
              <a href="https://redux.js.org/" target="blank">
                Redux
              </a>
            </span>&nbsp;
            and&nbsp;
            <span>
              <a href="https://redux-saga.js.org/" target="blank">
                Redux-Saga
              </a>
            </span>
          </li>
          <li>
            <span>
              <a href="https://developer.apple.com/documentation/objectivec" target="blank">
                Objective C
              </a>
            </span>&nbsp;
            and <span>
              <a href="https://developer.apple.com/documentation/swift" target="blank">
                Swift
              </a>
            </span>
          </li>
          <li>
            <span>
              <a href="https://aws.amazon.com/es/lambda/" target="blank">
                GraphQL
              </a>
            </span>&nbsp;
            and&nbsp;
            <span>
              <a href="https://serverless.com/" target="blank">
                Serverless
              </a>
            </span>&nbsp;
          </li>
          <li>
            <span>
              <a href="https://webpack.js.org/" target="blank">
                Webpack
              </a>
            </span>&nbsp;
            and&nbsp;
            <span>
              <a href="https://gulpjs.com/" target="blank">
                Gulp
              </a>
            </span>
          </li>
          <li>
            CI / CD with&nbsp;
            <span>
              <a href="https://circleci.com/" target="blank">
                Circle CI
              </a>
            </span>
          </li>
          <li>
            <span>
              <a href="https://aws.amazon.com/" target="blank">
                AWS
              </a>
            </span>&nbsp;
            (Amplify, Lambda, SNS, S3,
          </li>
          <li>
            CloudFront, SQS, SES, EB,
          </li>
          <li>
            Elastic Transcoder, Route53)
          </li>
        </ul>
      </div>
      <div className="section projects right">
        <p className="intro">My current projects</p>
        <ul>
          <li>
            <span>
              <a href="https://meetingcosts.com" target="blank">
                meetingcosts
              </a>
            </span>
          </li>
          <li>
            <span>
              <a href="https://npmpopularity.com" target="blank">
                NPM Popularity
              </a>
            </span>
          </li>
          <li>
            <span>
              <a href="https://opensourcelicences.com" target="blank">
                Open Source Licences
              </a>
            </span>
          </li>
        </ul>
      </div>
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

registerServiceWorker()
