import PropTypes from 'prop-types'
import React from 'react'
import styled, {css} from 'styled-components'

import Icon from './Icon'
import { animationStepper } from '../lib/Animations'
import { secondary, white, primary } from '../lib/Theme'
import { black } from 'kleur'

// Step
export const Step = () => null

Step.propTypes = {
  active: PropTypes.bool,
  complete: PropTypes.bool,
  title: PropTypes.string.isRequired
}

const StepperWrapper = styled.div`
`

const StepperSteps = styled.div`
`

const StepperContent = styled.div`
  padding: 32px;
`

const StepperStep = styled.div`
  color: ${secondary};
  display: inline-block;
  font-size: 14px;
  line-height: 19px;

  ${props => props.active ? css`
    ${StepperIndicator} {
      background-color: ${primary};
      color: ${white};
    }
  ` : ''}

  ${props => props.complete ? css`
    ${StepperIndicator} {
      background-color: ${black};
      color: ${secondary};
    }
  ` : ''}
`

const StepperIndicator = styled.span`
  background-color: ${black};
  border-radius: 50%;
  color: ${white};
  display: inline-block;
  font-size: 16px;
  height: 35px;
  line-height: 21px;
  margin-right: 9px;
  margin-bottom: -12px;
  overflow: hidden;
  position: relative;
  transition: ${animationStepper};
  width: 35px;

  i, span {
    font-size: 16px;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }
`

const StepperBar = styled.div`
  border-top: 1px solid ${secondary};
  display: inline-block;
  height: 5px;
  margin-right: 21px;
  margin-top: -2px;
  min-width: 100px;
  width: 100px;
`

const StepperTitle = styled.span`
  margin-right: 40px;
`

// Stepper
export class Stepper extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    index: PropTypes.number.isRequired,
    vertical: PropTypes.bool
  }

  render () {
    const {children, ...rest} = this.props

    const childArray = Array.isArray(children) ? children : [children]
    let content = null
    const steps = childArray.map((s, i) => {
      const active = i === this.props.index
      const complete = i < this.props.index
      if (active) content = s.props.children
      return (
        <StepperStep key={i} active={active} {...rest}>
          <StepperIndicator>{active || complete ? <Icon k='check' /> : <span>{i}</span>}</StepperIndicator>
          <StepperTitle>{s.props.title}</StepperTitle>
          {i !== (childArray.length - 1) && <StepperBar />}
        </StepperStep>
      )
    })

    return (
      <StepperWrapper {...rest}>
        <StepperSteps>{steps}</StepperSteps>
        <StepperContent>{content}</StepperContent>
      </StepperWrapper>
    )
  }
}
