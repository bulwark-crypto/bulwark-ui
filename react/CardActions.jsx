import PropTypes from 'prop-types'
import React from 'react'

const CardActions = ({children, className, ...props}) => (
  <div
    {...props}
    className={className ? `card__actions ${className}` : 'card__actions'}>
    {children}
  </div>
)

CardActions.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
}

export default CardActions
