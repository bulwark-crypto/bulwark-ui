import React from 'react'

import Col from '../../../web/Col'
import Row from '../../../web/Row'
import Source from '../../../web/Source'
import TextInput from '../../../web/TextInput'

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
    <h4>Code Example</h4>
    <Source
      code={`import TextInput from 'bulwark-ui/web/TextInput'

<TextInput
  label='Name'
  name='one' />

<TextInput
  defaultValue='Search'
  label='Helper'
  message='You’re a retard, hit enter'
  name='two' />

<TextInput
  as='textarea'
  label='Multiline'
  name='three'
  value='Cat in the Hat I like bacon HELLO OOOOO' />

<TextInput
  error
  label='Error'
  name='four' />`} />
  </div>
)

export default TextInputDemo
