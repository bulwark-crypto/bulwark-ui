import React from 'react'
import {pickRest} from '../lib/utils'
import PropTypes from 'prop-types'

const Button = props => {
  const [ mods, {children, as, block, ...rest} ] = pickRest(props, ['primary', 'secondary', 'icon', 'disabled', 'outline', 'text'])
  const As = as
  return <As block={block} mods={mods} {...rest}>{children}</As>
}

Button.defaultProps = {
  as: 'button',
  block: 'button'
}

Button.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  block: PropTypes.string,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  icon: PropTypes.bool,
  outline: PropTypes.bool,
  text: PropTypes.bool
}

export default Button
