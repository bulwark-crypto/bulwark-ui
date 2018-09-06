import PropTypes from 'prop-types'
import React from 'react'
import {pickRest} from '../lib/utils'

const Badge = (props) => {
  const [mods, {children, text, ...rest}] = pickRest(props, ['primary'])
  return (
    <span block='badge' mods={mods} {...rest}>
      <span block='badge' elem='text'><span>{text}</span></span>
      {children}
    </span>
  )
}

Badge.defaultProps = {
  text: '!'
}

Badge.propTypes = {
  children: PropTypes.any.isRequired,
  primary: PropTypes.bool,
  text: PropTypes.string.isRequired
}

export default Badge
