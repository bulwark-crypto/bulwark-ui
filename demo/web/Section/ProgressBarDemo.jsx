import React from 'react'

import Button from '../../../web/Button'
import ProgressBar from '../../../web/ProgressBar'
import Source from '../../../web/Source'

export default class ProgressBarDemo extends React.Component {
  state = {
    v: 0
  }

  clear = () => this.setState({v: 0})

  progress = () => {
    if (this.state.v <= 100) {
      const dur = (Math.random() * 30) + 1
      this.setState({v: this.state.v + 1}, () => setTimeout(this.progress, dur))
    }
  }

  reset = (v = 0) => this.setState({v}, () => {
    if (v === 0) this.progress()
  })

  render () {
    return (
      <div>
        <h3>ProgressBar</h3>
        <ProgressBar v={this.state.v} />
        <br />
        <Button onClick={this.clear}>Reset</Button>
        <Button onClick={() => this.reset()}>Start</Button>
        <Button onClick={() => this.reset(100)}>Full</Button>
        <h4>Code Example</h4>
        <Source
          code={`import Button from 'bulwark-ui/web/Button'
import ProgressBar from 'bulwark-ui/web/ProgressBar'

/* example class members */
state = {
  v: 0
}

clear = () => this.setState({v: 0})

progress = () => {
  if (this.state.v <= 100) {
    const dur = (Math.random() * 30) + 1
    this.setState({v: this.state.v + 1}, () => setTimeout(this.progress, dur))
  }
}

reset = (v = 0) => this.setState({v}, () => {
  if (v === 0) this.progress()
})
/* end example class members */

<ProgressBar v={this.state.v} />

<Button onClick={this.clear}>Reset</Button>
<Button onClick={() => this.reset()}>Start</Button>
<Button onClick={() => this.reset(100)}>Full</Button>`} />
      </div>
    )
  }
}
