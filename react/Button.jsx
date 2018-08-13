import PropTypes from 'prop-types'
import React from 'react'

export default class Button extends React.Component {
  render () {
    const {as, children, ...mods} = this.props
    return <this.props.as block='b' mods={mods}>{children}</this.props.as>
  }
}

Button.defaultProps = {
  as: 'button',
  mods: {}
}

Button.propTypes = {
  as: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  mods: PropTypes.object.isRequired
}
