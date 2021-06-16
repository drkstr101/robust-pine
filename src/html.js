/** @format */

import React from "react"
import PropTypes from "prop-types"
import { ThemeProvider } from "@watheia/kit.theme.theme-provider"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>{props.headComponents}</head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          This app works best with JavaScript enabled.
        </noscript>
        <ThemeProvider colorScheme="light">
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: props.body }}
          />
        </ThemeProvider>
        {props.postBodyComponents}
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
