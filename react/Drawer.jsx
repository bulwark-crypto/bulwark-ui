import PropTypes from 'prop-types'
import React from 'react'
import {pickRest} from '../lib/utils'

import Icon from './Icon'

// Drawer
export const Drawer = (props) => {
  const [mods, {children, onDrawer, ...rest}] = pickRest(props, ['open'])
  return (
    <div block='drawer' mods={mods} onClick={onDrawer}>
      <div block='drawer' elem='menu' {...rest}>
        {children}
      </div>
    </div>
  )
}

Drawer.propTypes = {
  children: PropTypes.any.isRequired,
  onDrawer: PropTypes.func,
  open: PropTypes.bool
}

// Divider
export const DrawerDivider = () => (
  <div block='drawer__menu' elem='divider' />
)

// Header
export const DrawerHeader = ({subtitle, title, ...rest}) => (
  <div block='drawer__menu' elem='header' {...rest}>
    <div block='drawer__menu' elem='title'>{title}</div>
    {!!subtitle && <div block='drawer__menu' elem='subtitle'>{subtitle}</div>}
  </div>
)

DrawerHeader.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired
}

// Link
export const DrawerLink = (props) => {
  const [mods, {children, k, ...rest}] = pickRest(props, ['active'])
  return (
    <div block='drawer__menu' elem='link' mods={mods} {...rest}>
      {!!k && <Icon k={k} />}{children}
    </div>
  )
}

DrawerLink.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any.isRequired,
  k: PropTypes.string
}

export default {Drawer, DrawerDivider, DrawerHeader, DrawerLink}
