import PropTypes from 'prop-types'
import React from 'react'

import Icon from './Icon'

// Card
export const Card = ({children, image, ...rest}) => (
  <div block='card' mods={image ? {image: true} : {}} {...rest}>
    {!!image && <img alt='' src={image} />}
    {children}
  </div>
)

Card.propTypes = {
  children: PropTypes.any.isRequired,
  image: PropTypes.string
}

// Actions
export const CardActions = ({children, ...rest}) => (
  <div block='card' elem='actions' {...rest}>
    {children}
  </div>
)

CardActions.propTypes = {
  children: PropTypes.any.isRequired
}

// Body
export const CardBody = ({children, nopadding, ...rest}) => (
  <div block='card' elem='body' mods={{nopadding: !!nopadding}} {...rest}>
    {children}
  </div>
)

CardBody.propTypes = {
  children: PropTypes.any.isRequired,
  nopadding: PropTypes.bool
}

// Title
export const CardTitle = ({icon, title, ...rest}) => (
  <div block='card' elem='title' {...rest}>
    <span className='card__title__text'>{title}</span>
    {icon && <Icon k={icon} />}
  </div>
)

CardTitle.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default {Card, CardActions, CardBody, CardTitle}
