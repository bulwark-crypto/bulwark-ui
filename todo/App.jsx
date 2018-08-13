/* global STYLE */
import React from 'react'
import { render } from 'react-dom'

import ButtonDemo from './Section/ButtonDemo'
import FontDemo from './Section/FontDemo'
import GridDemo from './Section/GridDemo'
import CardDemo from './Section/CardDemo'

require(`../sass/bulwark-${STYLE}.scss`)

const App = () => (
  <div>
    <h1>Bulwark UI - TODO Demo</h1>
    <FontDemo />
    <GridDemo />
    <ButtonDemo />
    <CardDemo />
  </div>
)

render(<App />, document.getElementById('react-root'))
