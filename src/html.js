import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              let darkScheme = null
              const storageKey = 'jagonzalrTheme'
              const darkClass = 'dark'
              const lightClass = 'light'
              const localTheme = window.localStorage.getItem(storageKey)

              function setTheme(theme) {
                const addClass = theme === 'dark' ? darkClass : lightClass
                const removeClass = theme === 'dark' ? lightClass : darkClass
                document.body.classList.add(addClass)
                document.body.classList.remove(removeClass)
              }

              if (window.matchMedia) {
                darkScheme = window.matchMedia('(prefers-color-scheme: dark)')
              }

              if (localTheme) {
                setTheme(localTheme)
              } else if (darkScheme) {
                setTheme(darkScheme.matches ? 'dark' : 'light')
              } else {
                setTheme('light')
              }
            `
          }}
        />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
