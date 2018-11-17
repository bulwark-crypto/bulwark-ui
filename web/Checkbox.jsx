import PropTypes from 'prop-types'
import React from 'react'
import {pickRest} from '../lib/utils'
import styled, { css } from 'styled-components'

import { pulse, swiftEaseOut } from '../lib/Animations'

const CheckboxWrapper = styled.span`
  display: inline-block;
  height: 24px;
  width: 24px;
  border: 1px solid ${props => props.theme[props.color]};
  border-radius: 50%;
  margin: 0 5px;
  color: ${props => props.theme.white};
  text-align: center;
  vertical-align: top;

  ${props => props.disabled ? 'cursor: not-allowed;' : ''}

  ${props => props.checked && !props.switch ? css`
    animation: ${pulse('black')} 1.25s cubic-bezier(0.66, 0, 0, 1);
    border: 0;
    background-color: ${props => props.theme.black};

    ${props => props.color ? css`
      animation: ${pulse(props.color)} 1.25s cubic-bezier(0.66, 0, 0, 1);
      background-color: ${props => props.theme[props.color]};
    ` : ''}
    ${props => props.color == 'disabled' ? 'background-color: #C8C8C8;' : ''}

    ::after {
      content: ${props => props.indeterminate ? '"\\2015"' : '"\\2713"'};
    }
  ` : ''}

  ${props => props.switch ? css`
    background-color: #D8D8D8;
    width: 48px;
    border-radius: 12px;
    border: none;

    ::after {
      content: "";
      display: block;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      background-color: ${props => props.theme.white};
      transition: ${swiftEaseOut};
      box-sizing: content-box;
      ${props => props.checked ? css`
        animation: ${pulse('black')} 1.25s cubic-bezier(0.66, 0, 0, 1);
        background-color: ${props => props.theme.black};
        transform: translate(24px);
        ${props => props.color ? css`
          animation: ${pulse(props.color)} 1.25s cubic-bezier(0.66, 0, 0, 1);
          background-color: ${props => props.theme[props.color]};
        ` : ''}
      ` : ''}
      ${props => props.disabled ? css`
        ::after {
          animation: none;
          background-color: #C8C8C8;
        }
      ` : ''}
    }
  ` : ''}
`

export default class Checkbox extends React.Component {
  static defaultProps = {
    as: 'span',
    defaultChecked: false
  }

  static propTypes = {
    as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    color: PropTypes.oneOf('primary', 'secondary', 'red'),
    disabled: PropTypes.bool,
    indeterminate: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool,
    value: PropTypes.any,
    toggle: PropTypes.bool
  }

  state = {
    checked: false
  }

  componentWillMount () {
    if (this.props.defaultChecked) this.setState({checked: true})
  }

  canToggle = () => !this.props.disabled && !this.isControlled()

  isControlled = () => this.props.checked !== undefined

  handleClick = (ev) => {
    const controlled = this.isControlled()
    const checked = controlled ? this.props.checked : this.state.checked
    if (!controlled) {
      if (this.canToggle()) {
        this.setState({
          checked: !checked
        })
      }
    }
    if (this.props.onChange) {
      this.props.onChange(ev, {...this.props, checked: !checked})
    }
  }

  handleKeyDown = (ev) => {
    if (ev.key === 'Enter' || ev.key === ' ') {
      this.handleClick(ev)
    }
  }

  render () {
    const { checked, color, ...rest } = this.props
    const realChecked = this.isControlled() ? checked : this.state.checked
    const realColor = this.props.disabled ? 'disabled' : color
    return <CheckboxWrapper checked={realChecked} color={realColor} onClick={this.handleClick} onKeyDown={this.handleKeyDown} tabIndex={0} {...this.props} />
  }
}
