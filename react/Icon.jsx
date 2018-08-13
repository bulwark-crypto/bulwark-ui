import PropTypes from 'prop-types'
import React from 'react'

const Icon = ({k, pre}) => (<i className={`${pre}${k}`} />)

Icon.defaultProps = {
  pre: 'fas fa-'
}

Icon.propTypes = {
  k: PropTypes.string.isRequired,
  pre: PropTypes.string
}

export default Icon
