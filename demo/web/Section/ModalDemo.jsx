import React from 'react'

import Button from '../../../web/Button'
import {Modal, ModalActions, ModalContent, ModalTitle} from '../../../web/Modal'

class ModalDemo extends React.Component {
  state = {
    open: false,
    overlay: false
  }

  handleClick = () => {
    const state = {open: !this.state.open}
    if (this.state.overlay && !state.open) state.overlay = false
    this.setState(state)
  }

  handleOverlay = () => this.setState({overlay: !this.state.overlay}, this.handleClick)

  render () {
    return (
      <div>
        <Modal onCancel={this.handleClick} open={this.state.open} overlay={this.state.overlay}>
          <ModalTitle>Terms of Service</ModalTitle>
          <ModalContent style={{width: 320}}>
            By clicking Sign Up, you agree to our Terms and that you
            have read our Data Use Policy, including our Cookie Use.
          </ModalContent>
          <ModalActions>
            <Button primary outline onClick={this.handleClick}>I Accept</Button>
            <Button outline onClick={this.handleClick}>No Thanks</Button>
          </ModalActions>
        </Modal>
        <h3>Modal</h3>
        <Button onClick={this.handleClick}>Open Modal</Button>
        <Button onClick={this.handleOverlay}>Open Modal with Overlay</Button>
      </div>
    )
  }
}

export default ModalDemo
