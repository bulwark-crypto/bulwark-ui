import React from 'react'

import Checkbox from '../../web/Checkbox'

const CheckboxDemo = () => (
  <div>
    <h3>Checkboxes</h3>
    <Checkbox defaultChecked red />
    <Checkbox defaultChecked primary />
    <Checkbox defaultChecked primary indeterminate />
    <Checkbox disabled />
    <Checkbox defaultChecked disabled />
    <br />
    <br />
    <Checkbox defaultChecked />
    <Checkbox defaultChecked primary />
    <Checkbox defaultChecked secondary />
    <Checkbox />
    <Checkbox defaultChecked disabled />
    <h3>Switches</h3>
    <Checkbox switch defaultChecked />
    <Checkbox switch defaultChecked primary />
    <Checkbox switch defaultChecked secondary />
    <Checkbox switch red />
    <Checkbox switch defaultChecked disabled />
  </div>
)

export default CheckboxDemo
