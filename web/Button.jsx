import PropTypes from 'prop-types'
import styled, {css} from 'styled-components'
import {ripple} from '../lib/Animations'
import {lighten, darken} from 'polished'
import React from 'react'

/* eslint-disable indent */
const StyledButton = styled.button`
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  color: ${props => props.theme.white};
  cursor: pointer;
  font-family: ${props => props.theme.fontPrimary};
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

  background-color: ${props => props.theme[props.color]};
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
    background-color: ${props => lighten(0.1, props.theme[props.color])}
  }

  ${props => props.outline ? css`
    background: transparent;
    border: 1px solid ${props => props.theme[props.color]};
    box-shadow: none;
    color: ${props => props.theme[props.color]};

    :active {
      background-color: ${props => darken(0.25, lighten(props.p, props.theme[props.color]))};
    }

    :hover, :focus {
      background-color: ${props => lighten(props.p, props.theme[props.color])};
    }
  ` : ''}

  ${props => props.text ? css`
    background: transparent;
    box-shadow: none;
    color: ${props => props.theme[props.color]};

    :active {
      background-color: ${props => darken(0.25, lighten(props.p, props.theme[props.color]))};
    }

    :hover, :focus {
      background-color: ${props => lighten(props.p, props.theme[props.color])};
    }
  ` : ''}
`
/* eslint-enable indent */

const Button = styled(props => {
  const {primary, secondary, disabled, children, ...rest} = props
  let color = 'black'
  let p = 0.6
  if (primary) {
    color = 'primary'
    p = 0.4
  } else if (secondary) {
    color = 'secondary'
    p = 0.35
  } else if (disabled) {
    color = 'disabled'
    p = 0.1
  }
  return <StyledButton color={color} p={p} {...rest}>{children}</StyledButton>
})``

Button.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  large: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  outline: PropTypes.bool,
  text: PropTypes.bool
}

export default Button
