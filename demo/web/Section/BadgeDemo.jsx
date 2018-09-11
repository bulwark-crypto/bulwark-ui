import React from 'react'

import Badge from '../../../web/Badge'
import Button from '../../../web/Button'
import IconButton from '../../../web/IconButton'

const ButtonDemo = () => (
  <div>
    <h3>Badges</h3>
    <Badge primary text='2'><Button>Default</Button></Badge>
    <Badge><Button text>Primary</Button></Badge>
    <Badge primary text='6'><IconButton secondary k='lemon' /></Badge>
    <Badge><IconButton primary k='heartbeat' /></Badge>
  </div>
)

export default ButtonDemo
