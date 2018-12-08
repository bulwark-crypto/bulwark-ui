import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {ripple} from '../lib/Animations'
import {lighten, darken} from 'polished'
import React from 'react'
import { fontPrimary, white, borderRadius, black, primary, secondary, disabled } from '../lib/Theme'
import theme from 'styled-theming'

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
const ButtonWrapper = styled.button`
  border-radius: ${borderRadius};
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  color: ${white};
  cursor: pointer;
  font-family: ${fontPrimary};
  font-size: 14px;
  font-weight: 500;
  height: 35px;
  line-height: 19px;
  letter-spacing: normal;
  margin: 0 5px;
  overflow: hidden;
  padding: 8px 16px;
  position: relative;
  text-align: center;

  background-color: ${color};
  background-position: center;
  border: none;
  
  ${props => props.large ? css`
    height: 51px;
    padding: 16px 24px;
  ` : ''}

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

  ${props => props.outline ? css`
    background: transparent;
    border: 1px solid ${color};
    box-shadow: none;
    color: ${color};

    :active {
      background-color: ${props => darken(0.25, lightenedColor(props))};
    }

    :hover, :focus {
      background-color: ${lightenedColor};
    }
  ` : ''}

  ${props => props.text ? css`
    background: transparent;
    box-shadow: none;
    color: ${color};

    :active {
      background-color: ${props => darken(0.25, lightenedColor(props))};
    }

    :hover, :focus {
      background-color: ${lightenedColor};
    }
  ` : ''}
`
/* eslint-enable indent */

const Button = styled(props => {
  const {disabled, children, color, ...rest} = props
  return <ButtonWrapper color={disabled ? 'disabled' : color} {...rest}>{children}</ButtonWrapper>
})``

Button.defaultProps = {
  color: 'default'
}

Button.propTypes = {
  large: PropTypes.bool,
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  color: PropTypes.oneOf(['default', 'primary', 'secondary']),
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  text: PropTypes.bool
}

export default Button
