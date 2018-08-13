import PropTypes from 'prop-types'
import React from 'react'

const CardBody = ({children, className, ...props}) => (
  <div
    {...props}
    className={!!className ? `card__body ${className}` : 'card__body'}>
    {children}
  </div>
)

CardBody.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
}

export default CardBody
