import PropTypes from 'prop-types'
import React from 'react'

const Code = ({children}) => (
  <pre block='code'>{children}</pre>
)

Code.propTypes = {
  children: PropTypes.node.isRequired
}

export default Code
