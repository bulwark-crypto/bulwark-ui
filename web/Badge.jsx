import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import {pulse, swiftEaseIn} from '../lib/Animations'
import { primary, white, black } from '../lib/Theme'
import theme from 'styled-theming'

const color = theme.variants('mode', 'color', {
  default: {light: black},
  primary: {light: primary}
})

const BadgeText = styled.span`
  background-color: ${black};
  border-radius: 50%;
  color: ${white};
  font-size: 14px;
  height: 24px;
  position: absolute;
  right: -8px;
  text-align: center;
  top: -100%;
  transition: ${swiftEaseIn};
  width: 24px;
  z-index: 2;

  span {
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

const BadgeWrapper = styled.span`
  position: relative;
  z-index: 1;
  ${BadgeText} {
    animation: ${props => pulse(color(props))} 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
    background-color: ${color};
  }
`

const Badge = (props) => {
  const {children, text, ...rest} = props
  return (
    <BadgeWrapper {...rest}>
      <BadgeText><span>{text}</span></BadgeText>
      {children}
    </BadgeWrapper>
  )
}

Badge.defaultProps = {
  text: '!',
  color: 'default'
}

Badge.propTypes = {
  children: PropTypes.any.isRequired,
  color: PropTypes.oneOf(['default', 'primary']),
  text: PropTypes.string.isRequired
}

export default Badge
