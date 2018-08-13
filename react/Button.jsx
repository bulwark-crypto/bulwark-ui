import PropTypes from 'prop-types'
import React from 'react'

export default class Button extends React.Component {
  static defaultProps() {
    return {
      as: 'button',
      mods: {}
    }
  }

  static propTypes() {
    return {
      as: PropTypes.any,
      children: PropTypes.any.isRequired,
      mods: PropTypes.object.isRequired
    }
  }

  render () {
    const {as, children, ...mods} = this.props
    return <as block='b' mods={mods}>{children}</as>
  }
}
