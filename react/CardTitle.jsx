import PropTypes from 'prop-types'
import React from 'react'

import Icon from './Icon'

const CardTitle = ({className, icon, title, ...props}) => (
  <div
    {...props}
    className={!!className ? `card__title ${className}` : 'card__title'}>
    <span className='card__title__text'>{title}</span>
    {icon && <Icon k={icon} />}
  </div>
)

CardTitle.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.string.isRequired
}

export default CardTitle
