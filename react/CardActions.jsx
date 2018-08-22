import PropTypes from 'prop-types'
import React from 'react'

const CardActions = ({children, ...rest}) => (
  <div block='card' elem='actions' {...rest}>
    {children}
  </div>
)

CardActions.propTypes = {
  children: PropTypes.any.isRequired
}

export default CardActions
