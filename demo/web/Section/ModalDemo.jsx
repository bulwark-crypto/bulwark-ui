import React from 'react'

import Button from '../../../web/Button'
import {Modal, ModalActions, ModalContent, ModalTitle} from '../../../web/Modal'
import Source from '../../../web/Source'

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
        <h4>Code Example</h4>
        <Source
          code={`import Button from 'bulwark-ui/web/Button'
import {Modal, ModalActions, ModalContent, ModalTitle} from 'bulwark-ui/web/Modal'

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

<Button onClick={this.handleClick}>Open Modal</Button>
<Button onClick={this.handleOverlay}>Open Modal with Overlay</Button>`} />
      </div>
    )
  }
}

export default ModalDemo
