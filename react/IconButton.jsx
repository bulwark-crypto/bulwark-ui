import PropTypes from 'prop-types'
import React from 'react'
import {pickRest} from '../lib/utils'

import Icon from './Icon'

export default class IconButton extends React.Component {
  render () {
    const [ mods, {children, as, k, ...rest} ] = pickRest(this.props, ['primary', 'secondary', 'disabled'])
    const As = as
    return (
      <As block='button' mods={{...mods, icon: true}} {...rest}>
        <Icon {...{k}} />{children}
      </As>
    )
  }
}

IconButton.defaultProps = {
  as: 'button'
}

IconButton.propTypes = {
  as: PropTypes.string.isRequired,
  k: PropTypes.string.isRequired,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool
}
