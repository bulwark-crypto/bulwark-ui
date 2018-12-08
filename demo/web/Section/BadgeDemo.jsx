import React from 'react'

import Badge from '../../../web/Badge'
import Button from '../../../web/Button'
import IconButton from '../../../web/IconButton'
import Source from '../../../web/Source'

const ButtonDemo = () => (
  <div>
    <h3>Badges</h3>
    <Badge color='primary' text='2'><Button>Default</Button></Badge>
    <Badge><Button text>Primary</Button></Badge>
    <Badge color='primary' text='6'><IconButton secondary k='lemon' /></Badge>
    <Badge><IconButton primary k='heartbeat' /></Badge>
    <h4>Code Example</h4>
    <Source
      code={`import Badge from 'bulwark-ui/web/Badge'
import Button from 'bulwark-ui/web/Button'
import IconButton from 'bulwark-ui/web/IconButton'

<Badge primary text='2'><Button>Default</Button></Badge>
<Badge><Button text>Primary</Button></Badge>
<Badge primary text='6'><IconButton secondary k='lemon' /></Badge>
<Badge><IconButton primary k='heartbeat' /></Badge>`} />
  </div>
)

export default ButtonDemo
