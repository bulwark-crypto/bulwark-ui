/* global STYLE */
import '@babel/polyfill'
import {HashRouter, Link, Route, Switch} from 'react-router-dom'
import React from 'react'
import { render } from 'react-dom'

import {ThemeProvider} from 'styled-components'

import Github from './Github'
import Home from './Home'
import SASS from './SASS'

import BadgeDemo from './Section/BadgeDemo'
import ButtonDemo from './Section/ButtonDemo'
import CardDemo from './Section/CardDemo'
import ChartDemo from './Section/ChartDemo'
import CheckboxDemo from './Section/CheckboxDemo'
import {Drawer, DrawerHeader, DrawerLink} from '../../web/Drawer'
import FontDemo from './Section/FontDemo'
import GridDemo from './Section/GridDemo'
import MenuDemo from './Section/MenuDemo'
import ModalDemo from './Section/ModalDemo'
import {Navbar, NavbarLink} from '../../web/Navbar'
import PaginationDemo from './Section/PaginationDemo'
import PanelDemo from './Section/PanelDemo'
import ProgressBarDemo from './Section/ProgressBarDemo'
import RadioDemo from './Section/RadioDemo'
import SelectInputDemo from './Section/SelectInputDemo'
import StepperDemo from './Section/StepperDemo'
import TabDemo from './Section/TabDemo'
import TableDemo from './Section/TableDemo'
import TextInputDemo from './Section/TextInputDemo'
import TooltipDemo from './Section/TooltipDemo'

require(`../../sass/bulwark-${STYLE}.scss`)

class App extends React.Component {
  state = {
    menu: false
  }

  handleDrawer = () => this.setState({menu: !this.state.menu})

  render () {
    return (
      <ThemeProvider theme={{mode: 'light'}}>
        <HashRouter>
          <div>
            <Navbar onDrawer={this.handleDrawer}>
              <NavbarLink k='home' to='#/'>Home</NavbarLink>
            </Navbar>
            <Drawer onDrawer={this.handleDrawer} open={this.state.menu}>
              <DrawerHeader title='Bulwark' subtitle='React UI Framework' />
              <DrawerLink k='palette'><Link to='/sass'>SASS</Link></DrawerLink>
              <DrawerLink k='code'><Link to='/github'>Source Code</Link></DrawerLink>
              <DrawerHeader subtitle='Components' />
              <DrawerLink><Link to='/badge'>Badge</Link></DrawerLink>
              <DrawerLink><Link to='/button'>Button</Link></DrawerLink>
              <DrawerLink><Link to='/card'>Card</Link></DrawerLink>
              <DrawerLink><Link to='/chart'>Chart</Link></DrawerLink>
              <DrawerLink><Link to='/checkbox'>Checkbox/Switch</Link></DrawerLink>
              <DrawerLink><Link to='/grid'>Grid</Link></DrawerLink>
              <DrawerLink><Link to='/menu'>Menu</Link></DrawerLink>
              <DrawerLink><Link to='/modal'>Modal</Link></DrawerLink>
              <DrawerLink><Link to='/pagination'>Pagination</Link></DrawerLink>
              <DrawerLink><Link to='/panel'>Panel</Link></DrawerLink>
              <DrawerLink><Link to='/progress'>Progress</Link></DrawerLink>
              <DrawerLink><Link to='/radio'>Radio</Link></DrawerLink>
              <DrawerLink><Link to='/selectinput'>Select Input</Link></DrawerLink>
              <DrawerLink><Link to='/stepper'>Stepper</Link></DrawerLink>
              <DrawerLink><Link to='/tab'>Tab</Link></DrawerLink>
              <DrawerLink><Link to='/table'>Table</Link></DrawerLink>
              <DrawerLink><Link to='/textinput'>Text Input</Link></DrawerLink>
              <DrawerLink><Link to='/tooltip'>Tooltip</Link></DrawerLink>
              <DrawerLink><Link to='/font'>Typography</Link></DrawerLink>
            </Drawer>
            <div block='wrapper'>
              <Switch>
                <Route path='/font' component={FontDemo} />
                <Route path='/grid' component={GridDemo} />
                <Route path='/button' component={ButtonDemo} />
                <Route path='/card' component={CardDemo} />
                <Route path='/tooltip' component={TooltipDemo} />
                <Route path='/badge' component={BadgeDemo} />
                <Route path='/modal' component={ModalDemo} />
                <Route path='/checkbox' component={CheckboxDemo} />
                <Route path='/radio' component={RadioDemo} />
                <Route path='/panel' component={PanelDemo} />
                <Route path='/textinput' component={TextInputDemo} />
                <Route path='/selectinput' component={SelectInputDemo} />
                <Route path='/menu' component={MenuDemo} />
                <Route path='/tab' component={TabDemo} />
                <Route path='/pagination' component={PaginationDemo} />
                <Route path='/stepper' component={StepperDemo} />
                <Route path='/table' component={TableDemo} />
                <Route path='/chart' component={ChartDemo} />
                <Route path='/progress' component={ProgressBarDemo} />

                <Route path='/github' component={Github} />
                <Route path='/sass' component={SASS} />
                <Route path='/' component={Home} />
              </Switch>
            </div>
            <div style={{height: 100}} />
          </div>
        </HashRouter>
      </ThemeProvider>
    )
  }
}

render(<App />, document.getElementById('react-root'))
