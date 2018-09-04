import PropTypes from 'prop-types'
import React from 'react'

const Row = ({children, className, ...props}) => {
  const classes = className ? `row ${className}` : 'row'
  return <div {...props} className={classes}>{children}</div>
}

Row.propTypes = {
  children: PropTypes.any.isRequired
}

export default Row
