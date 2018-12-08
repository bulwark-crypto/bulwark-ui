import PropTypes from 'prop-types'
import React from 'react'
import styled, {css} from 'styled-components'

import Icon from './Icon'
import { swiftEaseOut } from '../lib/Animations'
import { white, drawerWidth, fontSecondary, fontPrimary, secondary, black } from '../lib/Theme'

const DrawerWrapper = styled.div`
  background-color: transparent;
  bottom: 0;
  display: block;
  left: -100%;
  position: fixed;
  top: 0;
  transition: ${swiftEaseOut};
  z-index: 6;

  ${props => props.open ? css`
    background-color: rgba(0, 0, 0, 0.5);
    left: 0;
    right: 0;
  ` : ''}
`

const DrawerMenu = styled.div`
  background-color: ${white};
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  height: 100%;
  left: 0;
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  top: 0;
  width: ${drawerWidth};
  z-index: 7;
`

// Drawer
export const Drawer = (props) => {
  const {children, onDrawer, ...rest} = props
  return (
    <DrawerWrapper onClick={onDrawer} {...rest}>
      <DrawerMenu {...rest}>
        {children}
      </DrawerMenu>
    </DrawerWrapper>
  )
}

Drawer.propTypes = {
  children: PropTypes.any.isRequired,
  onDrawer: PropTypes.func,
  open: PropTypes.bool
}

// Divider
export const DrawerDivider = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.2);
  height: 1px;
`

const DrawerHeaderWrapper = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 20px;
`

const DrawerHeaderTitle = styled.div`
  color: ${black};
  font-family: ${fontSecondary};
  font-size: 24px;
  font-weight: bold;
  height: 33px;
  letter-spacing: -1px;
  line-height: 35px;
`

const DrawerHeaderSubtitle = styled.div`
  color: ${black};
  font-family: ${fontPrimary};
  font-size: 14px;
  line-height: 19px;
`

// Header
export const DrawerHeader = ({subtitle, title, ...rest}) => (
  <DrawerHeaderWrapper {...rest}>
    {!!title && <DrawerHeaderTitle>{title}</DrawerHeaderTitle>}
    {!!subtitle && <DrawerHeaderSubtitle>{subtitle}</DrawerHeaderSubtitle>}
  </DrawerHeaderWrapper>
)

DrawerHeader.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string
}

const DrawerLinkWrapper = styled.div`
  cursor: pointer;
  position: relative;

  &:active {
    background-color: darken(#f2f2f2, 25%);
  }

  &:focus, &:hover {
    background-color: #f2f2f2;
  }

  a {
    color: ${secondary};
    display: block;
    font-family: ${fontPrimary};
    font-size: 14px;
    height: 60px;
    line-height: 19px;
    padding-left: 84px;
    padding-top: 22px;
    text-decoration: none;
    width: 100%;
  }

  i {
    font-size: 24px;
    left: 32px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`

// Link
export const DrawerLink = (props) => {
  const {children, k, ...rest} = props
  return (
    <DrawerLinkWrapper {...rest}>
      {!!k && <Icon k={k} />}{children}
    </DrawerLinkWrapper>
  )
}

DrawerLink.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.any.isRequired,
  k: PropTypes.string
}

export default {Drawer, DrawerDivider, DrawerHeader, DrawerLink}
