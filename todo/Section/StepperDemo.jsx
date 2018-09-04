import React from 'react'

import Button from '../../web/Button'
import {Step, Stepper} from '../../web/Stepper'

export default class StepperDemo extends React.Component {
  state = {
    index: 0
  }

  handleBack = () => this.setState({index: this.state.index <= 0 ? 0 : this.state.index - 1})

  handleNext = () => this.setState({index: this.state.index >= 2 ? 2 : this.state.index + 1})

  render () {
    return (
      <div>
        <h3>Stepper</h3>
        <Stepper index={this.state.index}>
          <Step title='Initialize Hardware'>
            <p>How do we know that rain isn't tears falling from sad clouds?</p>
            <Button outline onClick={this.handleNext}>Next</Button>
          </Step>
          <Step title='Encrypt Wallet'>
            <p>They could be but you've never asked a cloud, have you?</p>
            <Button outline onClick={this.handleBack}>Back</Button>
            <Button outline onClick={this.handleNext}>Next</Button>
          </Step>
          <Step title='Begin!'>
            <p>Birds fly but ostriches can’t and they are birds. I wonder if there is a reason behind that.</p>
            <Button outline onClick={this.handleBack}>Back</Button>
            <Button outline onClick={this.handleNext}>Finish</Button>
          </Step>
        </Stepper>
      </div>
    )
  }
}
