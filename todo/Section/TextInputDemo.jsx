import React from 'react'

import Col from '../../react/Col'
import Row from '../../react/Row'
import TextInput from '../../react/TextInput'

const TextInputDemo = () => (
  <div>
    <h3>Text Inputs</h3>
    <form onSubmit={f => console.log}>
      <Row>
        <Col xs={12} sm={12} md={6} lg={3}>
          <TextInput
            label='Name'
            name='one' />
        </Col>
        <Col xs={12} sm={12} md={6} lg={3}>
          <TextInput
            defaultValue='Search'
            label='Helper'
            message='You’re a retard, hit enter'
            name='two' />
        </Col>
        <Col xs={12} sm={12} md={6} lg={3}>
          <TextInput
            as='textarea'
            label='Multiline'
            name='three'
            value='Cat in the Hat I like bacon HELLO OOOOO' />
        </Col>
        <Col xs={12} sm={12} md={6} lg={3}>
          <TextInput
            error
            label='Error'
            name='four' />
        </Col>
      </Row>
    </form>
  </div>
)

export default TextInputDemo
