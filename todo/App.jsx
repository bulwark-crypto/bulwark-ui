/* global STYLE */
import React from 'react'
import { render } from 'react-dom'

import BadgeDemo from './Section/BadgeDemo'
import ButtonDemo from './Section/ButtonDemo'
import CardDemo from './Section/CardDemo'
import ChartDemo from './Section/ChartDemo'
import CheckboxDemo from './Section/CheckboxDemo'
import {Drawer, DrawerDivider, DrawerHeader, DrawerLink} from '../web/Drawer'
import FontDemo from './Section/FontDemo'
import GridDemo from './Section/GridDemo'
import MenuDemo from './Section/MenuDemo'
import ModalDemo from './Section/ModalDemo'
import {Navbar, NavbarLink} from '../web/Navbar'
import PaginationDemo from './Section/PaginationDemo'
import PanelDemo from './Section/PanelDemo'
import RadioDemo from './Section/RadioDemo'
import SelectInputDemo from './Section/SelectInputDemo'
import StepperDemo from './Section/StepperDemo'
import TabDemo from './Section/TabDemo'
import TableDemo from './Section/TableDemo'
import TextInputDemo from './Section/TextInputDemo'
import TooltipDemo from './Section/TooltipDemo'

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
          <ModalDemo />
          <CheckboxDemo />
          <RadioDemo />
          <PanelDemo />
          <TextInputDemo />
          <SelectInputDemo />
          <MenuDemo />
          <TabDemo />
          <PaginationDemo />
          <StepperDemo />
          <TableDemo />
          <ChartDemo />
        </div>
        <div style={{height: 100}} />
      </div>
    )
  }
}

render(<App />, document.getElementById('react-root'))
