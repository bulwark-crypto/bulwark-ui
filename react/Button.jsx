import PropTypes from 'prop-types'
import React from 'react'

export default class Button extends React.Component {
  render () {
    const {
      as,
      block,
      children,
      icon,
      outline,
      primary,
      secondary,
      text,
      ...props
    } = this.props

    return (
      <this.props.as
        {...props}
        block={block}
        mods={{icon, outline, primary, secondary, text}}>
        {children}
      </this.props.as>
    );
  }
}

Button.defaultProps = {
  as: 'button',
  block: 'b'
}

Button.propTypes = {
  as: PropTypes.string.isRequired,
  block: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
  icon: PropTypes.bool,
  outline: PropTypes.bool,
  primary: PropTypes.bool,
  secondary: PropTypes.bool,
  text: PropTypes.bool
}
