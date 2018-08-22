import PropTypes from 'prop-types'
import React from 'react'

const CardBody = ({children, ...rest}) => (
  <div block='card' elem='body' {...rest}>
    {children}
  </div>
)

CardBody.propTypes = {
  children: PropTypes.any.isRequired
}

export default CardBody
