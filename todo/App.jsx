/* global STYLE */
import React from 'react'
import { render } from 'react-dom'

import BadgeDemo from './Section/BadgeDemo'
import ButtonDemo from './Section/ButtonDemo'
import FontDemo from './Section/FontDemo'
import GridDemo from './Section/GridDemo'
import CardDemo from './Section/CardDemo'
import {Navbar, NavbarLink} from '../react/Navbar'
import TooltipDemo from './Section/TooltipDemo'
import CheckboxDemo from './Section/CheckboxDemo'
import RadioDemo from './Section/RadioDemo'

require(`../sass/bulwark-${STYLE}.scss`)

class App extends React.Component {
  state = {
    menu: false
  }

  handleDrawer = () => this.setState({menu: !this.state.menu})

  render () {
    return (
      <div>
        <Navbar onDrawer={this.handleDrawer}>
          <NavbarLink active k='home' to='#'>Overview</NavbarLink>
          <NavbarLink to='#'>Statistics</NavbarLink>
          <NavbarLink to='#'>Transactions</NavbarLink>
          <NavbarLink to='#'>API</NavbarLink>
        </Navbar>
        <div block='wrapper'>
          <FontDemo />
          <GridDemo />
          <ButtonDemo />
          <CardDemo />
          <TooltipDemo />
          <BadgeDemo />
          <CheckboxDemo />
          <RadioDemo />
        </div>
      </div>
    )
  }
}

render(<App />, document.getElementById('react-root'))
