import PropTypes from 'prop-types'
import React from 'react'

const ProgressBar = ({v, ...rest}) => (
  <div block='progressbar' {...rest} style={{...rest.style, width: `${v}%`}} />
)

ProgressBar.propTypes = {
  v: PropTypes.number.isRequired
}

export default ProgressBar
