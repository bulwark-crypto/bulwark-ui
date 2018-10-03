import Platform from 'Platform'
import React from 'react'

export default class Component extends React.Component {
  isMobile = () => Platform.OS === 'ios' || Platform.OS === 'android'

  render() {
    return this.isMobile() ? this.renderMobile() : this.renderWeb()
  }

  renderMobile() {
    return null
  }

  renderWeb() {
    return null
  }
}
