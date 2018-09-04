import React from 'react'

import Badge from '../../web/Badge'
import Button from '../../web/Button'
import IconButton from '../../web/IconButton'

const ButtonDemo = () => (
  <div>
    <h3>Badges</h3>
    <Button>Default<Badge primary>2</Badge></Button>
    <Button primary text>Primary<Badge>!</Badge></Button>
    <IconButton secondary k='lemon'><Badge primary>6</Badge></IconButton>
    <IconButton primary k='heartbeat'><Badge>!</Badge></IconButton>
  </div>
)

export default ButtonDemo
