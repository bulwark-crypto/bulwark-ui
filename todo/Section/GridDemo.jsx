import React from 'react'

import Col from '../../react/Col'
import Row from '../../react/Row'

const GridDemo = () => (
  <div className='t--md'>
    <Row>
      <Col sm={6} md={4} lg={3}>col-xs-12 col-sm-6 col-md-4 col-lg-3</Col>
      <Col sm={6} md={4} lg={3}>col-xs-12 col-sm-6 col-md-4 col-lg-3</Col>
      <Col sm={6} md={4} lg={3}>col-xs-12 col-sm-6 col-md-4 col-lg-3</Col>
      <Col sm={6} md={4} lg={3}>col-xs-12 col-sm-6 col-md-4 col-lg-3</Col>
    </Row>
    <Row>
      <Col sm={8} md={6} lg={3}>col-xs-12 col-sm-8 col-md-6 col-lg-3</Col>
      <Col sm={4} md={3} lg={3}>col-xs-12 col-sm-4 col-md-3 col-lg-3</Col>
      <Col sm={12} md={3} lg={6}>col-xs-12 col-sm-12 col-md-3 col-lg-6</Col>
    </Row>
  </div>
)

export default GridDemo
