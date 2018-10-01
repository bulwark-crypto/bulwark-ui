import React from 'react'

import {Link} from 'react-router-dom'

export default class Home extends React.Component {
  render () {
    return (
      <div>
        <h3>Components</h3>
        <Link to='/badge'>Badge</Link><br />
        <Link to='/button'>Button</Link><br />
        <Link to='/card'>Card</Link><br />
        <Link to='/chart'>Chart</Link><br />
        <Link to='/checkbox'>Checkbox/Switch</Link><br />
        <Link to='/grid'>Grid</Link><br />
        <Link to='/menu'>Menu</Link><br />
        <Link to='/modal'>Modal</Link><br />
        <Link to='/pagination'>Pagination</Link><br />
        <Link to='/panel'>Panel</Link><br />
        <Link to='/progress'>Progress</Link><br />
        <Link to='/radio'>Radio</Link><br />
        <Link to='/selectinput'>Select Input</Link><br />
        <Link to='/stepper'>Stepper</Link><br />
        <Link to='/tab'>Tab</Link><br />
        <Link to='/table'>Table</Link><br />
        <Link to='/textinput'>Text Input</Link><br />
        <Link to='/tooltip'>Tooltip</Link><br />
        <Link to='/font'>Typography</Link><br />
      </div>
    )
  }
}
