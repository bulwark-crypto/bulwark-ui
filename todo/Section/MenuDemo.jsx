import React from 'react'

import Button from '../../react/Button'
import Col from '../../react/Col'
import Icon from '../../react/Icon'
import {Menu, MenuItem} from '../../react/Menu'
import Row from '../../react/Row'

const fn = () => {}

const MenuDemo = () => (
  <div>
    <h3>Menu</h3>
    <Row>
      <Col xs={12} sm={12} md={6} lg={3}>
        <Menu component={<Button>Menu One</Button>}>
          {[10, 20, 40, 50].map(x => (
            <MenuItem key={x} onClick={fn}>{x}</MenuItem>
          ))}
        </Menu>
      </Col>
      <Col xs={12} sm={12} md={6} lg={3}>
        <Menu component={<Button>Menu Two</Button>}>
          {['United States', 'Ireland', 'United Kingdom', 'Brazil', 'China', 'Peru'].map(x => (
            <MenuItem key={x} onClick={fn}>{x}</MenuItem>
          ))}
        </Menu>
      </Col>
      <Col xs={12} sm={12} md={6} lg={3}>
        <Menu component={<Button>Menu Three</Button>}>
          <MenuItem onClick={fn}><Icon k='envelope' />Send</MenuItem>
          <MenuItem onClick={fn}><Icon k='money-bill' />Transactions</MenuItem>
          <MenuItem onClick={fn}><Icon k='envelope-open' />Receive</MenuItem>
        </Menu>
      </Col>
    </Row>
  </div>
)

export default MenuDemo
