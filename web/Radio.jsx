import PropTypes from 'prop-types'
import React from 'react'
import {pickRest} from '../lib/utils'

export default class Radio extends React.Component {
  static defaultProps = {
    as: 'span',
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
    const [mods, {children, as, checked, onChange, value, ...rest}] = pickRest(this.props, ['primary', 'secondary', 'red', 'disabled', 'radio'])
    mods.checked = this.isControlled() ? checked : this.state.checked
    const As = as
    return <As block='radio' mods={mods} onClick={this.handleClick} onKeyDown={this.handleKeyDown} tabIndex={0} {...rest} />
  }
}
