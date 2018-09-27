import React from 'react'

import Button from '../../../web/Button'
import Col from '../../../web/Col'
import Icon from '../../../web/Icon'
import {Menu, MenuItem} from '../../../web/Menu'
import Row from '../../../web/Row'
import Source from '../../../web/Source'

const fn = () => {}

const MenuDemo = () => (
  <div>
    <h3>Menu</h3>
    <Row>
      <Col xs={12}>
        <Menu component={<Button>Menu One</Button>}>
          {[10, 20, 40, 50].map(x => (
            <MenuItem key={x} onClick={fn}>{x}</MenuItem>
          ))}
        </Menu>
        <Menu component={<Button>Menu Two</Button>}>
          {['United States', 'Ireland', 'United Kingdom', 'Brazil', 'China', 'Peru'].map(x => (
            <MenuItem key={x} onClick={fn}>{x}</MenuItem>
          ))}
        </Menu>
        <Menu component={<Button>Menu Three</Button>}>
          <MenuItem onClick={fn}><Icon k='envelope' />Send</MenuItem>
          <MenuItem onClick={fn}><Icon k='money-bill' />Transactions</MenuItem>
          <MenuItem onClick={fn}><Icon k='envelope-open' />Receive</MenuItem>
        </Menu>
      </Col>
    </Row>
    <h4>Code Example</h4>
    <Source
      code={`import Button from 'bulwark-ui/web/Button'
import Icon from 'bulwark-ui/web/Icon'
import {Menu, MenuItem} from 'bulwark-ui/web/Menu'

<Menu component={<Button>Menu One</Button>}>
  {[10, 20, 40, 50].map(x => (
    <MenuItem key={x} onClick={fn}>{x}</MenuItem>
  ))}
</Menu>

<Menu component={<Button>Menu Two</Button>}>
  {['United States', 'Ireland', 'United Kingdom', 'Brazil', 'China', 'Peru'].map(x => (
    <MenuItem key={x} onClick={fn}>{x}</MenuItem>
  ))}
</Menu>

<Menu component={<Button>Menu Three</Button>}>
  <MenuItem onClick={fn}><Icon k='envelope' />Send</MenuItem>
  <MenuItem onClick={fn}><Icon k='money-bill' />Transactions</MenuItem>
  <MenuItem onClick={fn}><Icon k='envelope-open' />Receive</MenuItem>
</Menu>`} />
  </div>
)

export default MenuDemo
