import PropTypes from 'prop-types'
import React from 'react'

import Icon from '../react/Icon'

export default class Panel extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired
  }

  state = {
    open: false
  }

  handleClick = () => this.setState({open: !this.state.open})

  render() {
    const open = this.state.open
    const {children, subtitle, title, ...rest} = this.props
    return (
      <div block='panel' mods={open ? {open} : {}} {...rest}>
        <div block='panel' elem='header'>
          <div block='panel__header' elem='title'>{title}</div>
          <div block='panel__header' elem='subtitle'>{subtitle}</div>
          <div block='panel' elem='arrow' onClick={this.handleClick}>
            <Icon k={open ? 'angle-up' : 'angle-down'} />
          </div>
        </div>
        <div block='panel' elem='content'>{children}</div>
      </div>
    )
  }
}
