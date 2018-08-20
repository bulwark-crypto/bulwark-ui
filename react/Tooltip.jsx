import PropTypes from 'prop-types'
import React from 'react'

const Tooltip = ({bgcolor, children, content, fgcolor, position, ...props}) => {
  return (
    <div {...props} className="tooltip">
      <div
        className={`tooltip__content tooltip__content--${position}`}
        style={{backgroundColor: bgcolor, color: fgcolor}}>
        {content}
      </div>
      {children}
    </div>
  )
}

Tooltip.defaultProps = {
  bgcolor: 'black',
  fgcolor: 'white',
  position: 'top'
}

Tooltip.propTypes = {
  bgcolor: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  content: PropTypes.any.isRequired,
  fgcolor: PropTypes.string.isRequired,
  position: PropTypes.oneOf([
    'top',
    'right',
    'bottom',
    'left'
  ]).isRequired
}

export default Tooltip
