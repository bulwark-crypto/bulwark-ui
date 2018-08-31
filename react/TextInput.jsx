import PropTypes from 'prop-types'
import React from 'react'
import {pickRest} from '../lib/utils'

export default class TextInput extends React.Component {
  static defaultProps = {
    as: 'input'
  }

  static propTypes = {
    as: PropTypes.oneOf(['input', 'textarea']).isRequired,
    error: PropTypes.bool,
    label: PropTypes.string,
    message: PropTypes.string,
    name: PropTypes.string.isRequired
  }

  input = null

  state = {
    isFocus: false,
    value: ''
  }

  componentWillMount () {
    this.setState({value: this.props.value || this.props.defaultValue || ''})
  }

  handleChange = (ev) => {
    this.setState({value: ev.target.value}, () => {
      if (this.props.onChange) this.props.onChange(ev)
    })
  }

  handleLabelClick = () => this.input.focus()

  handleFocus = isFocus => this.setState({isFocus})

  render () {
    const [mods, {as, defaultValue, label, message, ...rest}] = pickRest(this.props, ['error'])
    const As = as

    if (this.state.isFocus) mods.focus = true
    if (mods.focus || !!this.state.value) mods.active = true

    const inputProps = {
      autoComplete: 'off',
      block: 'input',
      elem: 'text',
      onBlur: () => this.handleFocus(false),
      onChange: this.handleChange,
      onFocus: () => this.handleFocus(true),
      ref: i => { this.input = i },
      type: 'text',
      value: this.state.value
    }

    return (
      <div block='input' mods={mods}>
        {!!label &&
          <label block='input' elem='label' htmlFor={rest.name} onClick={this.handleLabelClick}>
            {label}
          </label>
        }
        <As {...rest} {...inputProps} />
        {!!message && <div block='input' elem='message'>{message}</div>}
      </div>
    )
  }
}
