import React from 'react'

import Col from '../../react/Col'
import Row from '../../react/Row'
import SelectInput from '../../react/SelectInput'

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
            options={makeOptions(['United States', 'Ireland', 'United Kingdom', 'Brazil'])} />
        </Col>
      </Row>
    </form>
  </div>
)

export default SelectInputDemo
