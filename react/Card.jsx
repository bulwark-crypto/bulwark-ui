import PropTypes from 'prop-types'
import React from 'react'

import Icon from './Icon'

// Card
export const Card = ({children, className, image, ...props}) => {
  let classes = className ? `card ${className}` : 'card'
  if (image) classes = classes.replace('card', 'card card--image')

  return (
    <div {...props} className={classes}>
      {!!image && <img alt='' src={image} />}
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  image: PropTypes.string
}

// Actions
export const CardActions = ({children, className, ...props}) => (
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

// Body
export const CardBody = ({children, className, ...props}) => (
  <div
    {...props}
    className={className ? `card__body ${className}` : 'card__body'}>
    {children}
  </div>
)

CardBody.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string
}

// Title
export const CardTitle = ({className, icon, title, ...props}) => (
  <div
    {...props}
    className={className ? `card__title ${className}` : 'card__title'}>
    <span className='card__title__text'>{title}</span>
    {icon && <Icon k={icon} />}
  </div>
)

CardTitle.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default {Card, CardActions, CardBody, CardTitle}
