import React from 'react'

import Button from '../../react/Button'
import IconButton from '../../react/IconButton'
import Tooltip from '../../react/Tooltip'

const TooltipDemo = () => (
  <div>
    <h3>Tooltips</h3>
    <Tooltip top content='I am on the top'><Button>Default Top</Button></Tooltip>
    <Tooltip primary bottom content='I am on the bottom'><Button primary>Primary Bottom</Button></Tooltip>
    <Tooltip urgent right content='I am on the right'><Button secondary outline>Urgent Right</Button></Tooltip>
    <Tooltip left content='I am on the left'><IconButton icon k='home' /></Tooltip>
  </div>
)

export default TooltipDemo
