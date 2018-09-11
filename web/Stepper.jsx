import PropTypes from 'prop-types'
import React from 'react'
import {pickRest} from '../lib/utils'

import Icon from './Icon'

// Step
export const Step = () => null

Step.propTypes = {
  active: PropTypes.bool,
  complete: PropTypes.bool,
  title: PropTypes.string.isRequired
}

// Stepper
export class Stepper extends React.Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    index: PropTypes.number.isRequired,
    vertical: PropTypes.bool
  }

  render () {
    const [mods, {children, ...rest}] = pickRest(this.props, ['vertical'])

    const childArray = Array.isArray(children) ? children : [children]
    let content = null
    const steps = childArray.map((s, i) => {
      const active = i === this.props.index
      const complete = i < this.props.index
      if (active) content = s.props.children
      return (
        <div block='stepper' elem='step' mods={{active, complete}} key={i}>
          <span block='stepper__step' elem='indicator'>{active || complete ? <Icon k='check' /> : i}</span>
          <span block='stepper__step' elem='title'>{s.props.title}</span>
          {i !== (childArray.length - 1) && <div block='stepper__step' elem='bar' />}
        </div>
      )
    })

    return (
      <div block='stepper' mods={mods} {...rest}>
        <div block='stepper' elem='steps'>{steps}</div>
        <div block='stepper' elem='content'>{content}</div>
      </div>
    )
  }
}
