import React from 'react'

import Button from '../../../web/Button'
import IconButton from '../../../web/IconButton'
import Source from '../../../web/Source'
import Tooltip from '../../../web/Tooltip'

const TooltipDemo = () => (
  <div>
    <h3>Tooltips</h3>
    <Tooltip top content='I am on the top'><Button>Default Top</Button></Tooltip>
    <Tooltip color='primary' bottom content='I am on the bottom'><Button primary>Primary Bottom</Button></Tooltip>
    <Tooltip color='red' right content='I am on the right'><Button secondary outline>Urgent Right</Button></Tooltip>
    <Tooltip left content='I am on the left'><IconButton icon k='home' /></Tooltip>
    <h4>Code Example</h4>
    <Source
      code={`import Button from 'bulwark-ui/web/Button'
import IconButton from 'bulwark-ui/web/IconButton'
import Tooltip from 'bulwark-ui/web/Tooltip'

<Tooltip top content='I am on the top'><Button>Default Top</Button></Tooltip>
<Tooltip primary bottom content='I am on the bottom'><Button primary>Primary Bottom</Button></Tooltip>
<Tooltip urgent right content='I am on the right'><Button secondary outline>Urgent Right</Button></Tooltip>
<Tooltip left content='I am on the left'><IconButton icon k='home' /></Tooltip>`} />
  </div>
)

export default TooltipDemo
