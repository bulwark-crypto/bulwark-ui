import PropTypes from 'prop-types'
import React from 'react'

import {monokai} from 'react-syntax-highlighter/styles/hljs'
import Highlighter from 'react-syntax-highlighter'

const Source = ({code, type}) => (
  <Highlighter
    language={type}
    showLineNumbers
    startingLineNumber={1}
    style={monokai}>{code}</Highlighter>
)

Source.defaultProps = {
  type: 'javascript'
}

Source.propTypes = {
  code: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['javascript']).isRequired
}

export default Source
