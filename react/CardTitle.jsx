import PropTypes from 'prop-types'
import React from 'react'

import Icon from './Icon'

const CardTitle = ({icon, title, ...rest}) => (
  <div block='card' elem='title' {...rest}>
    <span block='card' elem='title__text'>{title}</span>
    {icon && <Icon k={icon} />}
  </div>
)

CardTitle.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default CardTitle
