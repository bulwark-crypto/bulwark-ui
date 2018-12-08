import PropTypes from 'prop-types'
import React from 'react'
import styled, { css } from 'styled-components'
import theme from 'styled-theming'

import { pulse } from '../lib/Animations'
import { black, primary, secondary } from '../lib/Theme'

const color = theme.variants('mode', 'color', {
  default: {light: black},
  primary: {light: primary},
  secondary: {light: secondary},
  disabled: {light: '#C8C8C8'}
})

const RadioWrapper = styled.span`
  display: inline-block;
  height: 24px;
  width: 24px;
  border: 1px solid ${color};
  border-radius: 50%;
  margin: 0 5px;
  text-align: center;
  vertical-align: top;

  ${props => props.disabled ? 'cursor: not-allowed;' : ''}

  ${props => props.checked ? css`
    ::after {
      animation: ${props => pulse(color(props))} 1.25s cubic-bezier(0.66, 0, 0, 1);
      content: "";
      border-radius: 50%;
      display: block;
      margin: 4px;
      height: 14px;
      width: 14px;
      background-color: ${color};
    }
  ` : ''}
`

export default class Radio extends React.Component {
  static defaultProps = {
    defaultChecked: false
  }

  static propTypes = {
    as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
    primary: PropTypes.bool,
    secondary: PropTypes.bool,
    red: PropTypes.bool,
    disabled: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool,
    value: PropTypes.any
  }

  state = {
    checked: false
  }

  componentWillMount () {
    if (this.props.defaultChecked || this.props.checked) {
      this.setState({checked: this.props.defaultChecked || this.props.checked})
    }
  }

  canToggle = () => !this.props.disabled && !this.isControlled() && !this.state.checked

  isControlled = () => this.props.checked !== undefined

  handleClick = (ev) => {
    const controlled = this.isControlled()
    if (!controlled) {
      if (this.canToggle()) {
        this.setState({
          checked: true
        })
      }
    }
    if (this.props.onChange) {
      this.props.onChange(ev, {...this.props, checked: true})
    }
  }

  handleKeyDown = (ev) => {
    if (ev.key === 'Enter' || ev.key === ' ') {
      this.handleClick(ev)
    }
  }

  render () {
    const { checked, ...rest } = this.props
    const realChecked = this.isControlled() ? checked : this.state.checked
    return <RadioWrapper checked={realChecked} onClick={this.handleClick} onKeyDown={this.handleKeyDown} tabIndex={0} {...this.props} />
  }
}
