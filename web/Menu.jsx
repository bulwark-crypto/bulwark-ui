import PropTypes from 'prop-types'
import React from 'react'
import {kill} from '../lib/utils'
import styled, {css} from 'styled-components'
import {swiftEaseInOut, animationSelectItem} from '../lib/Animations'

const MenuWrapper = styled.div`
  display: inline-block;
  position: relative;

  ${props => props.open ? css`
    ${MenuItems} {
      max-height: 230px;
      transition: ${swiftEaseInOut};
    }
    ${MenuItem} {
      opacity: 1;
      transition: ${animationSelectItem};
    }
  ` : ''}
`

const MenuItems = styled.div`
  background-color: ${props => props.theme.white};
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  display: block;
  left: 50%;
  margin: 0;
  max-height: 0;
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: max-content;
  z-index: 5;
`

export const MenuItem = styled.div`
  cursor: pointer;
  font-family: ${props => props.theme.fontPrimary};
  font-size: 16px;
  height: 39px;
  line-height: 19px;
  margin: 0;
  opacity: 0;
  overflow: hidden;
  padding: 10px 11px;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;

  :hover { background-color: rgba(124, 124, 124, 0.1); }

  ${props => props.active ? 'background-color: rgba(124, 124, 124, 0.2);' : ''}

  i { margin-right: 12px; }
`

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
    const {open, children, component, ...rest} = this.props
    let realOpen = open
    if (this.state.isOpen) realOpen = true

    return (
      <MenuWrapper open={realOpen} {...rest}>
        {React.cloneElement(component, {onClick: this.handleOpen})}
        <MenuItems>{children}</MenuItems>
      </MenuWrapper>
    )
  }
}

MenuItem.propTypes = {
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func.isRequired
}

export default {Menu, MenuItem}
