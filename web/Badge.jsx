import PropTypes from 'prop-types'
import React from 'react'
import styled, {css} from 'styled-components'
import {pulse, swiftEaseIn} from '../lib/Animations'

const BadgeWrapper = styled.span`
  position: relative;
  z-index: 1;
  ${props => props.primary ? css`
    ${BadgeText} {
      animation: ${pulse('primary')} 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
      background-color: ${props => props.theme.primary};
    }
  ` : ''}
`
const BadgeText = styled.span`
  animation: ${pulse('default')} 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  background-color: ${props => props.theme.black};
  border-radius: 50%;
  color: ${props => props.theme.white};
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
  text: '!'
}

Badge.propTypes = {
  children: PropTypes.any.isRequired,
  primary: PropTypes.bool,
  text: PropTypes.string.isRequired
}

export default Badge
