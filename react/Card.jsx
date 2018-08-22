import PropTypes from 'prop-types'
import React from 'react'

const Card = ({children, image, ...rest}) => (
  <div block='card' mods={image ? {image: true} : {}} {...rest}>
    {!!image && <img alt='' src={image} />}
    {children}
  </div>
)

Card.propTypes = {
  children: PropTypes.any.isRequired,
  image: PropTypes.string
}

export default Card
