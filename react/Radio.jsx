import React from 'react'
import { pickRest } from '../lib/utils'
import PropTypes from 'prop-types'

export default class Radio extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: props.defaultChecked || !!props.checked
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  canToggle () {
    return !this.props.disabled && !this.isControlled() && !this.state.checked
  }

  isControlled () {
    return this.props.checked !== undefined
  }

  handleClick (e) {
    const controlled = this.isControlled()
    if (!controlled) {
      if (this.canToggle()) {
        this.setState({
          checked: true
        })
      }
    }
    if (this.props.onChange) {
      this.props.onChange(e, {...this.props, checked: true})
    }
  }

  handleKeyDown (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      this.handleClick(e)
    }
  }

  render () {
    const [mods, { children, as, checked, onChange, value, ...rest }] = pickRest(this.props, ['primary', 'secondary', 'red', 'disabled', 'radio'])
    mods.checked = this.isControlled() ? checked : this.state.checked
    const As = as
    return <As block='radio' mods={mods} onClick={this.handleClick} onKeyDown={this.handleKeyDown} tabIndex={0} {...rest} />
  }
}

Radio.defaultProps = {
  as: 'span',
  defaultChecked: false
}

Radio.propTypes = {
  as: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  red: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultChecked: PropTypes.bool,
  checked: PropTypes.bool,
  value: PropTypes.any
}
