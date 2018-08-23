import PropTypes from 'prop-types'
import React from 'react'
import {pickRest} from '../lib/utils'

import Icon from './Icon'
import IconButton from './IconButton'

// Navbar
export const Navbar = ({children, onDrawer, ...rest}) => (
  <div block='navbar' {...rest}>
    {!!onDrawer &&
      <div block='navbar' elem='menu'>
        <IconButton k='bars' onClick={onDrawer} />
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
export const NavbarLink = (props) => {
  const [ mods, {as, children, k, to, ...rest} ] = pickRest(props, ['active'])
  if (as === 'Link') {
    rest.to = to
  } else {
    rest.href = to
  }

  const As = as
  return (
    <As block='navbar' elem='link' mods={mods} {...rest}>
      {!!k && <Icon k={k} />}
      {children}
    </As>
  )
}

NavbarLink.defaultProps = {
  as: 'a'
}

NavbarLink.propTypes = {
  active: PropTypes.bool,
  as: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  k: PropTypes.string,
  to: PropTypes.string
}

export default {Navbar, NavbarLink}
