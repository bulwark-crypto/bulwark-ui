import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import {ripple} from '../lib/Animations'
import {lighten, darken} from 'polished'
import theme from 'styled-theming'

import { black, primary, secondary, disabled, fontPrimary } from '../lib/Theme'
import Icon from './Icon'

const color = theme.variants('mode', 'color', {
  default: {light: black},
  primary: {light: primary},
  secondary: {light: secondary},
  disabled: {light: disabled}
})

const lightenedColor = theme.variants('mode', 'color', {
  default: {light: lighten(0.6, black)},
  primary: {light: props => lighten(0.4, primary(props))},
  secondary: {light: props => lighten(0.35, secondary(props))},
  disabled: {light: props => lighten(0.1, disabled(props))}
})

/* eslint-disable indent */
const IconButtonWrapper = styled.button`
  border-radius: 50%;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  color: ${color};
  cursor: pointer;
  font-family: ${fontPrimary};
  font-size: 14px;
  font-weight: 500;
  height: 44px;
  width: 44px;
  line-height: 19px;
  letter-spacing: normal;
  margin: 0 10px;
  overflow: hidden;
  padding: 0;
  position: relative;
  text-align: center;

  background: transparent;
  background-position: center;
  border: 1px solid transparent;
  box-shadow: none;
  
  ::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 5px;
    height: 5px;
    background: rgba(255, 255, 255, .5);
    opacity: 0;
    border-radius: 100%;
    transform: scale(1, 1) translate(-50%);
    transform-origin: 50% 50%;
    visibility: hidden;
  }

  :focus::after {
    visibility: visible;
  }

  :focus:not(:active)::after {
    animation: ${ripple} 2s ease-out;
  }

  :hover {
    background-color: ${props => lighten(0.1, color(props))};
  }

  :active {
      background-color: ${props => darken(0.25, lightenedColor(props))};
  }

  :hover, :focus {
    background-color: ${lightenedColor};
    border: 1px solid ${lightenedColor};
  }
`
/* eslint-enable indent */

const IconButton = styled(props => {
  const {disabled, color, children, k, ...rest} = props
  return <IconButtonWrapper color={disabled ? 'disabled' : color} {...rest}><Icon {...{k}} />{children}</IconButtonWrapper>
})``

IconButton.defaultProps = {
  color: 'default'
}

IconButton.propTypes = {
  icon: PropTypes.bool,
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  k: PropTypes.string.isRequired
}

export default IconButton
