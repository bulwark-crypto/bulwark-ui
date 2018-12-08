import PropTypes from 'prop-types'
import React from 'react'

// this can stay, we're probally not going to do our own grid system
const Col = ({children, lg, md, sm, xs, ...props}) => {
  let classes = `col-xs-${xs}`
  if (props.className) {
    classes = props.className
  } else {
    if (sm) classes = `${classes} col-sm-${sm}`
    if (md) classes = `${classes} col-md-${md}`
    if (lg) classes = `${classes} col-lg-${lg}`
  }

  return (
    <div {...props} className={classes}>{children}</div>
  )
}

Col.defaultProps = {lg: 0, md: 0, sm: 0, xs: 12}

Col.propTypes = {
  lg: PropTypes.number,
  md: PropTypes.number,
  sm: PropTypes.number,
  xs: PropTypes.number
}

export default Col
