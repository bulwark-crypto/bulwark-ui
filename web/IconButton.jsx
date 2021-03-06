import PropTypes from 'prop-types'
import React from 'react'
import {pickRest} from '../lib/utils'

import Icon from './Icon'

export default class IconButton extends React.Component {
  static defaultProps = {
    as: 'button'
  }

  static propTypes = {
    as: PropTypes.string.isRequired,
    icon: PropTypes.bool,
    k: PropTypes.string.isRequired,
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    disabled: PropTypes.bool
  }

  render () {
    const [ mods, {children, as, icon, k, ...rest} ] = pickRest(this.props, ['primary', 'secondary', 'disabled'])
    const As = as
    return (
      <As block='button' mods={{...mods, icon: icon || true}} {...rest}>
        <Icon {...{k}} />{children}
      </As>
    )
  }
}
