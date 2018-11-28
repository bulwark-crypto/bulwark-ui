import PropTypes from 'prop-types'
import React from 'react'
import {kill} from '../lib/utils'
import styled, {css} from 'styled-components'

import Icon from './Icon'
import { swiftEaseIn, swiftEaseInOut, animationSelectItem } from '../lib/Animations'

const SelectInputWrapper = styled.div`
  font-family: ${props => props.theme.fontPrimary};
  font-size: 14px;
  height: 55px;
  padding-top: 18px;
  position: relative;

  ${props => props.active ? css`
    ${SelectInputLabel} {
      color: ${props => props.theme.secondary};
      font-family: ${props => props.theme.fontPrimary};
      font-size: 12px;
      height: 11px;
      line-height: 11px;
      top: 0;
    }

    ${SelectInputArrow} { color: ${props => props.theme.black}; }
  ` : ''}

  ${props => props.focus && !props.native ? css`
    ${SelectInputComponent} {
      display: none;
    }

    ${SelectInputOptions} {
      max-height: 230px;
      transition: ${swiftEaseInOut};

      ${SelectInputItem} {
        opacity: 1;
        transition: ${animationSelectItem};
      }
    }
  ` : ''}
`

const SelectInputLabel = styled.label`
  color: ${props => props.theme.secondary};
  cursor: text;
  font-family: ${props => props.theme.fontPrimary};
  font-size: 14px;
  height: 16px;
  line-height: 16px;
  min-width: 108px;
  position: absolute;
  top: 18px;
  transition: ${swiftEaseIn};
`

const SelectInputArrow = styled.label`
  color: ${props => props.theme.secondary};
  float: right;
  height: 5px;
  position: absolute;
  right: 0;
  top: 19px;
  width: 10px;
`

const SelectInputComponent = styled.select`
  background: transparent;
  border: 0;
  color: ${props => props.theme.black};
  line-height: 16px;
  outline: none;
  padding: 4px 0;
  appearance: none;
  border: 0 !important;
  color: ${props => props.theme.black};
  text-indent: 0.1px;
  text-overflow: '';

  ::-ms-expand {
    display: none;
  }

  option {
    border: 0;
    color: ${props => props.theme.black};
    max-height: 0;
  }

  border-color: transparent;
  border-bottom: 1px solid #f2f2f2;
  font-family: ${props => props.theme.fontPrimary};
  font-size: 14px;
  min-width: 108px;
  width: 100%;
`

const SelectInputOptions = styled.div`
  background-color: ${props => props.theme.white};
  border-radius: 5px;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
  display: block;
  left: 50%;
  max-height: 0;
  min-width: 108px;
  overflow-x: hidden;
  overflow-y: auto;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 4;
`

const SelectInputItem = styled.div`
  cursor: pointer;
  font-family: ${props => props.theme.fontPrimary};
  font-size: 14px;
  height: 27px;
  line-height: 19px;
  min-width: 108px;
  opacity: 0;
  padding: 6px 11px;
  width: 100%;

  :hover { background-color: rgba(124, 124, 124, 0.1); }

  ${props => props.active ? css`
    background-color: rgba(124, 124, 124, 0.2);
  ` : ''}
`

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
    const {defaultValue, label, message, name, notempty, options, value, ...rest} = this.props

    let focus = false
    if (this.state.isFocus) focus = true
    let active = focus
    if (this.state.value) active = true

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
      <SelectInputWrapper focus={focus} active={active} {...rest}>
        {!!label &&
          <SelectInputLabel htmlFor={rest.name} onClick={this.handleLabelClick}>
            {label}
          </SelectInputLabel>
        }
        <SelectInputArrow><Icon k='caret-down' /></SelectInputArrow>
        <SelectInputComponent {...rest} {...inputProps}>
          {adjustedOptions.map((o, i) => (<option key={i} value={o.value}>{o.text}</option>))}
        </SelectInputComponent>
        {!this.props.native &&
          <SelectInputOptions>
            {adjustedOptions.map((o, i) => (
              <SelectInputItem key={i} active={o.value === this.state.value} onClick={ev => this.handleSelect(ev, o)}>
                {o.text}
              </SelectInputItem>
            ))}
          </SelectInputOptions>
        }
        {!!message && <div block='input' elem='message'>{message}</div>}
      </SelectInputWrapper>
    )
  }
}
