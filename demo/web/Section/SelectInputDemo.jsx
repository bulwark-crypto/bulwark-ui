import React from 'react'

import Col from '../../../web/Col'
import Row from '../../../web/Row'
import SelectInput from '../../../web/SelectInput'
import Source from '../../../web/Source'

const makeOptions = vals => vals.map(v => ({text: v.toString(), value: v}))

const SelectInputDemo = () => (
  <div>
    <h3>Select Inputs</h3>
    <form onSubmit={f => console.log}>
      <Row>
        <Col xs={12} sm={12} md={6} lg={3}>
          <SelectInput
            label='Number'
            name='one'
            options={makeOptions([10, 20, 40, 50])} />
        </Col>
        <Col xs={12} sm={12} md={6} lg={3}>
          <SelectInput
            defaultValue='United Kingdom'
            label='Country'
            name='two'
            options={makeOptions(['United States', 'Ireland', 'United Kingdom', 'Brazil', 'China', 'Japan', 'Canada', 'Mexico', 'Peru'])} />
        </Col>
        <Col xs={12} sm={12} md={6} lg={3}>
          <SelectInput
            defaultValue='United Kingdom'
            label='Native Select'
            name='two'
            native
            options={makeOptions(['United States', 'Ireland', 'United Kingdom', 'Brazil'])} />
        </Col>
      </Row>
    </form>
    <h4>Code Example</h4>
    <Source
      code={`import SelectInput from 'bulwark-ui/web/SelectInput'

<SelectInput
  label='Number'
  name='one'
  options={makeOptions([10, 20, 40, 50])} />

<SelectInput
  defaultValue='United Kingdom'
  label='Country'
  name='two'
  options={makeOptions(['United States', 'Ireland', 'United Kingdom', 'Brazil', 'China', 'Japan', 'Canada', 'Mexico', 'Peru'])} />

<SelectInput
  defaultValue='United Kingdom'
  label='Native Select'
  name='two'
  native
  options={makeOptions(['United States', 'Ireland', 'United Kingdom', 'Brazil'])} />`} />
  </div>
)

export default SelectInputDemo
