import React from 'react'
import {pickRest} from '../lib/utils'
import PropTypes from 'prop-types'

const Button = props => {
  const [ mods, {children, as, block, ...rest} ] = pickRest(props, ['primary', 'secondary', 'disabled', 'outline', 'text'])
  const As = as
  return <As block='button' mods={mods} {...rest}>{children}</As>
}

Button.defaultProps = {
  as: 'button'
}

Button.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  text: PropTypes.bool
}

export default Button
