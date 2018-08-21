import React from 'react'

import Button from '../../react/Button'
import Icon from '../../react/Icon'
import Tooltip from '../../react/Tooltip'

const TooltipDemo = () => (
  <div>
    <h3>Tooltips</h3>
    <Tooltip top content="I am on the top"><Button>Default Top</Button></Tooltip>
    <Tooltip primary bottom content="I am on the bottom"><Button primary>Primary Bottom</Button></Tooltip>
    <Tooltip urgent right content="I am on the right"><Button secondary outline>Urgent Right</Button></Tooltip>
    <Tooltip left content="I am on the left"><Button icon><Icon k='home' /></Button></Tooltip>
  </div>
)

export default TooltipDemo
