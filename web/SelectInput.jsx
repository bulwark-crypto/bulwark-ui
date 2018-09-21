import PropTypes from 'prop-types'
import React from 'react'
import {kill, pickRest} from '../lib/utils'

import Icon from './Icon'

export default class SelectInput extends React.Component {
  static defaultProps = {
    onChange: () => {},
    options: []
  }

  static propTypes = {
    error: PropTypes.bool,
    label: PropTypes.string,
    message: PropTypes.string,
    name: PropTypes.string.isRequired,
    notempty: PropTypes.bool,
    native: PropTypes.bool,
    options: PropTypes.arrayOf(PropTypes.shape({
      text: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired
    })).isRequired
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
    const value = ev.target.value
    const opt = this.props.options.find(o => o.text === value)
    this.handleSelect({}, opt || {value})
  }

  handleHide = () => {
    document.removeEventListener('click', this.handleHide)
    this.handleFocus(false)
  }

  handleLabelClick = (ev) => {
    kill(ev)
    this.input.focus()
  }

  handleFocus = isFocus => this.setState({isFocus})

  handleSelect = (ev, o) => {
    kill(ev)
    ev = {...ev, target: {...ev.target, value: o.value}}
    this.setState({value: o.value}, () => {
      try { this.props.onChange(ev) } catch (err) {}
      this.handleHide()
    })
  }

  handleShow = () => {
    document.addEventListener('click', this.handleHide)
    this.handleFocus(true)
  }

  render () {
    const [mods, {defaultValue, label, message, name, notempty, options, value, ...rest}] = pickRest(this.props, ['error', 'native'])

    if (this.state.isFocus) mods.focus = true
    if (mods.focus || !!this.state.value) mods.active = true

    const inputProps = {
      autoComplete: 'off',
      name,
      onChange: this.handleChange,
      onFocus: this.handleShow,
      ref: i => { this.input = i },
      value: this.state.value
    }

    const adjustedOptions = notempty ? options : [{text: '', value: ''}, ...options]

    return (
      <div block='input' mods={mods}>
        {!!label &&
          <label block='input' elem='label' htmlFor={rest.name} onClick={this.handleLabelClick}>
            {label}
          </label>
        }
        <div block='input' elem='arrow'><Icon k='caret-down' /></div>
        <select block='input' elem='component' {...rest} {...inputProps}>
          {adjustedOptions.map((o, i) => (<option key={i} value={o.value}>{o.text}</option>))}
        </select>
        {!mods.native &&
          <div block='input' elem='options'>
            {adjustedOptions.map((o, i) => (
              <div block='input__options' elem='item' key={i} mods={{active: o.value === this.state.value}} onClick={ev => this.handleSelect(ev, o)}>
                {o.text}
              </div>
            ))}
          </div>
        }
        {!!message && <div block='input' elem='message'>{message}</div>}
      </div>
    )
  }
}
