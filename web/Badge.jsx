import PropTypes from 'prop-types'
import React from 'react'
import {pickRest} from '../lib/utils'

const Badge = (props) => {
  const [mods, {children, ...rest}] = pickRest(props, ['primary'])
  return (
    <span block='badge' mods={mods} {...rest}>
      <span block='badge' elem='text'>{children}</span>
    </span>
  )
}

Badge.propTypes = {
  children: PropTypes.any.isRequired,
  primary: PropTypes.bool
}

export default Badge
