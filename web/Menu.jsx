import PropTypes from 'prop-types'
import React from 'react'
import {kill, pickRest} from '../lib/utils'

export class Menu extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    component: PropTypes.node.isRequired,
    open: PropTypes.bool
  }

  state = {
    isOpen: false
  }

  handleClose = (ev) => {
    kill(ev)
    document.removeEventListener('click', this.handleClose)
    this.setState({isOpen: false})
  }

  handleOpen = (ev) => {
    kill(ev)
    document.addEventListener('click', this.handleClose)
    this.setState({isOpen: true})
  }

  render () {
    const [mods, {children, component, ...rest}] = pickRest(this.props, ['open'])
    if (this.state.isOpen) mods.open = true

    return (
      <div block='menu' mods={mods} {...rest}>
        {React.cloneElement(component, {onClick: this.handleOpen})}
        {this.state.isOpen && <div block='menu' elem='items'>{children}</div>}
      </div>
    )
  }
}

export const MenuItem = ({children, onClick}) => (
  <div block='menu' elem='item' onClick={onClick}>
    {children}
  </div>
)

MenuItem.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired
}

export default {Menu, MenuItem}
