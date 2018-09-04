import PropTypes from 'prop-types'
import React from 'react'
import {pickRest} from '../lib/utils'

export default class Checkbox extends React.Component {
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
    const [mods, { children, as, checked, onChange, value, ...rest }] = pickRest(this.props, ['primary', 'secondary', 'red', 'disabled', 'indeterminate', 'switch'])
    mods.checked = this.isControlled() ? checked : this.state.checked
    const As = as
    return <As block='checkbox' mods={mods} onClick={this.handleClick} onKeyDown={this.handleKeyDown} tabIndex={0} {...rest} />
  }
}
