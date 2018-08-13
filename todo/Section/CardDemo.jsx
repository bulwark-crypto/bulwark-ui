import React from 'react'

import Button from '../../react/Button'
import Card from '../../react/Card'
import CardActions from '../../react/CardActions'
import CardBody from '../../react/CardBody'
import CardTitle from '../../react/CardTitle'
import Col from '../../react/Col'
import Icon from '../../react/Icon'
import Row from '../../react/Row'

const CardDemo = () => (
  <div>
    <h3>Cards</h3>
    <Row>
      <Col sm={6} md={6} lg={6}>
        <Card>
          <CardTitle icon='shield-alt' title='Important' />
          <CardBody>
            Solamente necesito tomar cereales con leche. El queso está bueno, y
            también lo están las galletas. Me encanta mojar mis nachos en
            chocolate. Las bufandas son útiles para mantenerte caliente,
            también tienen estilo.
          </CardBody>
          <CardActions>
            <Row>
              <Col md={4} lg={6}>
                <Button onClick={f => f} outline>Read More</Button>
              </Col>
              <Col md={8} lg={6} className='t--right'>
                <small className='t--gray'>20/20/2019</small>
              </Col>
            </Row>
          </CardActions>
        </Card>
      </Col>
      <Col sm={6} md={6} lg={6}>
        <Card image='https://dummyimage.com/480x130/00f/00c.gif'>
          <CardTitle title='Hello There' />
          <CardBody>
            Solo necesito tirarme desde un avión con una
            bufanda para no coger un catarro. Mi perro es negro, mi rata es
            blanca. Mis padres quieren que tenga un hijo. El colegio es útil si
            te quieres morir.
          </CardBody>
          <CardActions>
            <Row>
              <Col md={4} lg={6}>
                <Button onClick={f => f} outline>Read More</Button>
              </Col>
              <Col md={8} lg={6} className='t--right'>
                <small className='t--gray'>20/20/2019</small>
              </Col>
            </Row>
          </CardActions>
        </Card>
      </Col>
    </Row>
  </div>
)

export default CardDemo
