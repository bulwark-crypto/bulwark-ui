import React from 'react'

import Radio from '../../../web/Radio'
import Source from '../../../web/Source'

export default class RadioDemo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 4
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e, {value}) {
    this.setState({value})
  }

  render () {
    return (
      <div>
        <h3>Radio Buttons</h3>
        <Radio checked={this.state.value === 0} value={0} onChange={this.handleChange} color='primary' />
        <Radio checked={this.state.value === 1} value={1} onChange={this.handleChange} />
        <Radio checked={this.state.value === 2} value={2} onChange={this.handleChange} color='secondary' />
        <Radio checked={this.state.value === 3} value={3} onChange={this.handleChange} color='red' />
        <Radio checked={this.state.value === 4} value={4} disabled />
        <h4>Code Example</h4>
        <Source
          code={`import Radio from 'bulwark-ui/web/Radio'

<Radio checked={this.state.value === 0} value={0} onChange={this.handleChange} primary />
<Radio checked={this.state.value === 1} value={1} onChange={this.handleChange} />
<Radio checked={this.state.value === 2} value={2} onChange={this.handleChange} secondary />
<Radio checked={this.state.value === 3} value={3} onChange={this.handleChange} red />
<Radio checked={this.state.value === 4} value={4} disabled />`} />
      </div>
    )
  }
}
