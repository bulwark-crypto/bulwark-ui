import PropTypes from 'prop-types'
import React from 'react'
import {pickRest} from '../lib/utils'

import Icon from './Icon'

// Navbar
export const Navbar = ({children, onDrawer, ...rest}) => (
  <div block='navbar' {...rest}>
    {!!onDrawer &&
      <div block='navbar' elem='menu' onClick={onDrawer}>
        <Icon k='bars' />
      </div>
    }
    <div block='navbar' elem='links'>{children}</div>
  </div>
)

Navbar.propTypes = {
  children: PropTypes.any.isRequired,
  onDrawer: PropTypes.func
}

// Navbar Link
export class NavbarLink extends React.Component {
  static defaultProps = {
    as: 'a'
  }

  static propTypes = {
    active: PropTypes.bool,
    as: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
    k: PropTypes.string,
    to: PropTypes.string
  }

  handleClick = (ev) => {
    try { ev.target.firstChild.click() } catch (err) {}
  }

  render () {
    const [ mods, {as, children, k, to, ...rest} ] = pickRest(this.props, ['active'])
    if (as === 'Link') {
      rest.to = to
    } else {
      rest.href = to
    }

    if (window.location.hash === to) mods.active = true

    const As = as
    return (
      <div block='navbar' elem='link' mods={mods} onClick={this.handleClick}>
        <As {...rest}>{!!k && <Icon k={k} />}{children}</As>
      </div>
    )
  }
}

export default {Navbar, NavbarLink}
