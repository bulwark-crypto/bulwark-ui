import PropTypes from 'prop-types'
import React from 'react'
import styled, {css} from 'styled-components'
import {swiftEaseIn} from '../lib/Animations'

import Icon from './Icon'

const NavbarMenu = styled.div`
  cursor: pointer;
  font-size: 30px;
  left: 32px;
  margin: 0;
  position: absolute;
  top: 32px;
`

const NavbarLinks = styled.div`
  min-height: 90px;
  left: 121px;
  margin: 0;
  padding: 0;
`

const NavbarLinkWrapper = styled.div`
  cursor: pointer;
  display: inline-block;
  height: 90px;
  padding: 33px 24px;
  position: relative;

  :hover {
    a {
      color: ${props => props.theme.primary};
      transition: ${swiftEaseIn};
    }
  }

  ${props => props.active ? css`
    a { color: ${props => props.theme.primary} !important; }

    i { color: ${props => props.theme.primary} !important; }
  ` : ''}

  a {
    color: ${props => props.theme.black};
    cursor: pointer;
    font-family: ${props => props.theme.fontPrimary};
    font-size: 16px;
    text-decoration: none;
    width: max-content;
  }

  i {
    color: ${props => props.theme.black};
    font-size: 22px;
    margin-right: 10px;
  }
`

const NavbarWrapper = styled.div`
  background-color: ${props => props.theme.white};
  min-height: 90px;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;

  @media only screen and (max-width: 768px) {
    :hover {
      ${NavbarLinks} {
        display: block;
        margin-bottom: 24px;
      }

      ${NavbarLinkWrapper} {
        display: block;
        height: 50px;
        padding: 33px 24px;
      }
    }

    ${NavbarLinks} {
      display: none;
    }
  }
`

// Navbar
export const Navbar = ({children, onDrawer, ...rest}) => (
  <NavbarWrapper {...rest}>
    {!!onDrawer &&
      <NavbarMenu onClick={onDrawer}>
        <Icon k='bars' />
      </NavbarMenu>
    }
    <NavbarLinks>{children}</NavbarLinks>
  </NavbarWrapper>
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
    const {active, as, children, k, to, ...rest} = this.props
    if (as === 'Link') {
      rest.to = to
    } else {
      rest.href = to
    }
    let realActive = active
    if (window.location.hash === to) realActive = true

    const As = as
    return (
      <NavbarLinkWrapper active={realActive} onClick={this.handleClick}>
        <As {...rest}>{!!k && <Icon k={k} />}{children}</As>
      </NavbarLinkWrapper>
    )
  }
}

export default {Navbar, NavbarLink}
