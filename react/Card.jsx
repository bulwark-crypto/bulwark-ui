import PropTypes from 'prop-types'
import React from 'react'

const Card = ({children, className, image, ...props}) => {
  let classes = !!className ? `card ${className}` : 'card';
  if (!!image) classes = classes.replace('card', 'card card--image')

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

export default Card
