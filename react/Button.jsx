import React from 'react'

export default class Button extends React.Component {
  render () {
    const {children, ...mods} = this.props
    return <button block='b' mods={mods}>{children}</button>
  }
}
