import React from 'react'

import Button from '../../react/Button'

const ButtonDemo = () => (
  <div>
    <h3>Buttons</h3>
    <Button>Default</Button>
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
    <Button disabled>Disabled</Button>

    <h3>Outlined Buttons</h3>
    <Button outline>Default</Button>
    <Button primary outline>Primary</Button>
    <Button secondary outline>Secondary</Button>
    <Button disabled outline>Disabled</Button>

    <h3>Text Buttons</h3>
    <Button text>Default</Button>
    <Button primary text>Primary</Button>
    <Button secondary text>Secondary</Button>
    <Button disabled text>Disabled</Button>
  </div>
)

export default ButtonDemo
