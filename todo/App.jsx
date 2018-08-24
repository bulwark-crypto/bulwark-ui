/* global STYLE */
import React from 'react'
import { render } from 'react-dom'

import BadgeDemo from './Section/BadgeDemo'
import ButtonDemo from './Section/ButtonDemo'
import {Drawer, DrawerDivider, DrawerHeader, DrawerLink} from '../react/Drawer'
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
        <Drawer onDrawer={this.handleDrawer} open={this.state.menu}>
          <DrawerHeader title='Header' subtitle='Subtitle' />
          <DrawerLink active k='home'><a href='#'>Menu Item One</a></DrawerLink>
          <DrawerLink k='envelope'><a href='#'>Menu Item Two</a></DrawerLink>
          <DrawerLink k='lock'><a href='#'>Menu Item Three</a></DrawerLink>
          <DrawerLink k='globe'><a href='#'>Menu Item Four</a></DrawerLink>
          <DrawerDivider />
          <DrawerLink k='angry'><a href='#'>Menu Item Five</a></DrawerLink>
        </Drawer>
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
