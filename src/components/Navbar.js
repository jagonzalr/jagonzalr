import React, { Fragment, useEffect, useState, useContext } from 'react'
import { Link } from 'gatsby'
import Toggle from 'react-toggle'

import Head from './Head'
import MoonEmoji from './MoonEmoji'
import SunEmoji from './SunEmoji'
import ThemeContext from '../context/ThemeContext'

const Navbar = () => {
  const [theme, setTheme] = useContext(ThemeContext)
  return (
    <Fragment>
      <Head />
      <nav className="nav justify-content-between py-1 px-4">
        <Link className="navbar-brand small-text" to="/">
          {'< jagr />'}
        </Link>
        <div className="d-flex">
          <div
            className="dropdown"
            style={{
              paddingTop: '0.3125rem',
              paddingBottom: '0.3125rem',
              margin: '0 0.5em',
            }}
          >
            <a
              className="dropdown-toggle"
              type="button"
              id="moreButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              More
            </a>
            <ul className="dropdown-menu" aria-labelledby="moreButton">
              <li>
                <Link className="dropdown-item" to="/projects">
                  Projects
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/open-source">
                  Open Source
                </Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/saas">
                  SaaS
                </Link>
              </li>
            </ul>
          </div>
          <a
            href="https://blog.jagonzalr.com"
            target="_blank"
            rel="noopener"
            style={{
              paddingTop: '0.3125rem',
              paddingBottom: '0.3125rem',
              margin: '0 0.5em',
            }}
          >
            Blog
          </a>
        </div>
        <div
          className="d-inline-flex"
          style={{ paddingTop: '0.3125rem', paddingBottom: '0.3125rem' }}
        >
          <Toggle
            checked={theme === 'dark'}
            aria-label={
              theme === 'dark'
                ? 'Change to light theme'
                : 'Change to dark theme'
            }
            icons={{
              checked: <MoonEmoji />,
              unchecked: <SunEmoji />,
            }}
            onChange={(e) => {
              const theme = e.target.checked ? 'dark' : 'light'
              setTheme(theme)
            }}
          />
        </div>
      </nav>
    </Fragment>
  )
}

export default Navbar
