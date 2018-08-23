import React from 'react'
import { pickRest } from '../lib/utils'
import PropTypes from 'prop-types'

export default class Checkbox extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: props.defaultChecked
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  canToggle () {
    return !this.props.disabled && !this.isControlled()
  }

  isControlled () {
    return this.props.checked !== undefined
  }

  handleClick (e) {
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
      this.props.onChange(e, {...this.props, checked: !checked})
    }
  }

  handleKeyPress (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      this.handleClick(e)
    }
  }

  render () {
    const [mods, { children, as, checked, onChange, value, ...rest }] = pickRest(this.props, ['primary', 'secondary', 'red', 'disabled', 'indeterminate', 'switch'])
    mods.checked = this.isControlled() ? checked : this.state.checked
    const As = as
    return <As block='checkbox' mods={mods} onClick={this.handleClick} onKeyPress={this.handleKeyPress} tabIndex={0} {...rest} />
  }
}

Checkbox.defaultProps = {
  as: 'span',
  defaultChecked: false
}

Checkbox.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  red: PropTypes.bool,
  disabled: PropTypes.bool,
  indeterminate: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
  value: PropTypes.any,
  toggle: PropTypes.bool
}
