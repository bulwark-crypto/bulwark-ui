import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'
import theme from 'styled-theming'

import { pulse, swiftEaseOut } from '../lib/Animations'
import { black, primary, secondary, white, red } from '../lib/Theme'

const color = theme.variants('mode', 'color', {
  default: {light: black},
  primary: {light: primary},
  secondary: {light: secondary},
  disabled: {light: '#C8C8C8'},
  red: {light: red}
})

const CheckboxWrapper = styled.span`
  display: inline-block;
  height: 24px;
  width: 24px;
  border: 1px solid ${color};
  border-radius: 50%;
  margin: 0 5px;
  color: ${white};
  text-align: center;
  vertical-align: top;

  ${props => props.disabled ? css`
    cursor: not-allowed;
  ` : ''}

  ${props => props.checked && !props.switch ? css`
    animation: ${props => pulse(color(props))} 1.25s cubic-bezier(0.66, 0, 0, 1);
    border: 0;
    background-color: ${color};

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
      background-color: ${white};
      transition: ${swiftEaseOut};
      box-sizing: content-box;
      ${props => props.checked ? css`
        animation: ${props => pulse(color(props))} 1.25s cubic-bezier(0.66, 0, 0, 1);
        background-color: ${color};
        transform: translate(24px);
      ` : ''}
    }
  ` : ''}
`

export default class Checkbox extends React.Component {
  static defaultProps = {
    defaultChecked: false,
    color: 'default'
  }

  static propTypes = {
    as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    color: PropTypes.oneOf(['default', 'primary', 'secondary', 'red']),
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
    return <CheckboxWrapper color={this.props.disabled ? 'disabled' : color} checked={realChecked} onClick={this.handleClick} onKeyDown={this.handleKeyDown} tabIndex={0} {...rest} />
  }
}
