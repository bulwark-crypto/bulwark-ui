import PropTypes from 'prop-types'
import React from 'react'
import styled, {css} from 'styled-components'

import Button from './Button'
import { swiftEaseIn } from '../lib/Animations'

// TODO: Change the padding here to calculate based on gridGutter/2 instead of hardcoded
const TooltipContent = styled.div`
  background-color: ${props => props.color ? props.theme[props.color] : props.theme.secondary};
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.white};
  display: inline-block;
  font-size: 9px;
  line-height: 11px;
  opacity: 0;
  padding: 5px ${props => props.theme.gridGutter};
  position: absolute;
  text-align: center;
  transition: ${swiftEaseIn};
  visibility: hidden;
  width: max-content;
  z-index: 1;

  ::after {
    border-style: solid;
    border-width: 5px;
    content: " ";
    position: absolute;
  }

  ${props => props.bottom ? css`
    left: 50%;
    top: 105%;
    transform: translateX(-50%);

    ::after {
      border-color: transparent transparent ${props => props.color ? props.theme[props.color] : props.theme.secondary} transparent;
      bottom: 100%;
      left: 50%;
      transform: translateX(-50%);
    }
  ` : ''}

  ${props => props.left ? css`
    top: 50%;
    right: 105%;
    transform: translateY(-50%);

    ::after {
      border-color: transparent transparent transparent ${props => props.color ? props.theme[props.color] : props.theme.secondary};
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  ` : ''}

  ${props => props.right ? css`
    left: 105%;
    top: 50%;
    transform: translateY(-50%);

    ::after {
      border-color: transparent ${props => props.color ? props.theme[props.color] : props.theme.secondary} transparent transparent;
      right: 100%;
      top: 50%;
      transform: translateY(-50%);
    }
  ` : ''}

  ${props => props.top ? css`
    bottom: 105%;
    left: 50%;
    transform: translateX(-50%);

    ::after {
      border-color: ${props => props.color ? props.theme[props.color] : props.theme.secondary} transparent transparent transparent;
      left: 50%;
      top: 100%;
      transform: translateX(-50%);
    }
` : ''}
`

const TooltipWrapper = styled.div`
  display: inline-block;
  position: relative;

  :hover ${TooltipContent} {
    opacity: 1;
    visibility: visible;
  }

  ${Button} {
    margin: 5px;
  }
`

const Tooltip = (props) => {
  const {children, content, ...rest} = props
  return (
    <TooltipWrapper {...rest}>
      <TooltipContent {...rest}>{content}</TooltipContent>
      {children}
    </TooltipWrapper>
  )
}

Tooltip.propTypes = {
  bottom: PropTypes.bool,
  children: PropTypes.any.isRequired,
  content: PropTypes.any.isRequired,
  left: PropTypes.bool,
  primary: PropTypes.bool,
  right: PropTypes.bool,
  top: PropTypes.bool,
  color: PropTypes.string
}

export default Tooltip
