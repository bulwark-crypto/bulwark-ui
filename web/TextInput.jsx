import PropTypes from 'prop-types'
import React from 'react'
import styled, {css} from 'styled-components'
import { swiftEaseIn } from '../lib/Animations'
import { secondary, fontPrimary, red, black, primary } from '../lib/Theme'

const TextInputWrapper = styled.div`
  font-family: ${fontPrimary};
  font-size: 14px;
  height: 55px;
  padding-top: 18px;
  position: relative;

  ${props => props.active ? css`
    ${TextInputLabel} {
      color: ${secondary};
      font-family: ${fontPrimary};
      font-size: 12px;
      height: 11px;
      line-height: 11px;
      top: 0;
    }
  ` : ''}

  ${props => props.focus ? css`
    ${TextInputBar}:after, ${TextInputBar}:before {
      width: 50%;
    }
  ` : ''}

  ${props => props.error ? css`
    ${TextInputLabel} { color: ${red} !important; }

    /* ${TextInputInput} { border-color: ${red} !important; } */
  ` : ''}
`

const TextInputLabel = styled.label`
  color: ${secondary};
  cursor: text;
  font-family: ${fontPrimary};
  font-size: 14px;
  height: 16px;
  line-height: 16px;
  min-width: 108px;
  position: absolute;
  top: 18px;
  transition: ${swiftEaseIn};
`

const TextInputInput = styled.input`
  background: transparent;
  border: 0;
  color: ${black};
  line-height: 16px;
  outline: none;
  padding: 4px 0;
  border-color: transparent;
  border-bottom: 1px solid #f2f2f2;
  font-family: ${fontPrimary};
  font-size: 14px;
  min-width: 108px;
  width: 100%;
`

const TextInputBar = styled.div`
  display: block;
  position: relative;

  &:after, &:before {
    content: '';
    height: 1px;
    width: 0;
    bottom: 1px;
    position: absolute;
    background: ${primary};
    transition: 0.2s ease all;
  }

  :after {
    right: 50%;
  }

  :before {
    left: 50%;
  }
`

const TextInputMessage = styled.div`
  color: ${secondary};
  font-size: 9px;
  height: 11px;
  line-height: 11px;
  margin-top: 6px;
`

export default class TextInput extends React.Component {
  static defaultProps = {
    as: 'input',
    onChange: () => {}
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

  handleChange = ev => this.setState({value: ev.target.value}, () => this.props.onChange(ev))

  handleLabelClick = () => this.input.focus()

  handleFocus = isFocus => this.setState({isFocus})

  render () {
    const {defaultValue, label, message, error, ...rest} = this.props

    let focus = false
    if (this.state.isFocus) focus = true
    let active = focus
    if (this.state.value) active = true

    const inputProps = {
      autoComplete: 'off',
      onBlur: () => this.handleFocus(false),
      onChange: this.handleChange,
      onFocus: () => this.handleFocus(true),
      ref: i => { this.input = i },
      type: 'text',
      value: this.state.value
    }

    return (
      <TextInputWrapper focus={focus} active={active} error={error}>
        {!!label &&
          <TextInputLabel htmlFor={rest.name} onClick={this.handleLabelClick}>
            {label}
          </TextInputLabel>
        }
        <TextInputInput {...rest} {...inputProps} />
        <TextInputBar />
        {!!message && <TextInputMessage>{message}</TextInputMessage>}
      </TextInputWrapper>
    )
  }
}
