import React from 'react'

import Button from '../../../web/Button'
import {Card, CardActions, CardBody, CardTitle} from '../../../web/Card'
import Col from '../../../web/Col'
import Row from '../../../web/Row'
import Source from '../../../web/Source'

const CardDemo = () => (
  <div>
    <h3>Cards</h3>
    <Row>
      <Col sm={6} md={6} lg={3}>
        <Card>
          <CardTitle icon='shield-alt' title='Important' />
          <CardBody>
            Solamente necesito tomar cereales con leche. El queso está bueno, y
            también lo están las galletas. Me encanta mojar mis nachos en
            chocolate. Las bufandas son útiles para mantenerte caliente,
            también tienen estilo.
          </CardBody>
          <CardActions>
            <Button onClick={f => f} outline>Read More</Button>
            <small className='u--float-right text--color-secondary'>20/20/2019</small>
          </CardActions>
        </Card>
      </Col>
      <Col sm={6} md={6} lg={3}>
        <Card image='https://dummyimage.com/356x130/00f/00c.gif'>
          <CardTitle title='Hello There' />
          <CardBody>
            Solo necesito tirarme desde un avión con una
            bufanda para no coger un catarro. Mi perro es negro, mi rata es
            blanca. Mis padres quieren que tenga un hijo. El colegio es útil si
            te quieres morir.
          </CardBody>
          <CardActions>
            <Button onClick={f => f} outline>Read More</Button>
            <small className='u--float-right text--color-secondary'>20/20/2019</small>
          </CardActions>
        </Card>
      </Col>
      <Col sm={6} md={6} lg={3}>
        <Card>
          <CardBody>
            Solo necesito tirarme desde un avión con una
            bufanda para no coger un catarro. Mi perro es negro, mi rata es
            blanca. Mis padres quieren que tenga un hijo. El colegio es útil si
            te quieres morir.
          </CardBody>
        </Card>
      </Col>
    </Row>
    <h4>Code Example</h4>
    <Source
      code={`import {Card, CardActions, CardBody, CardTitle} from 'bulwark-ui/web/Card'

<Card>
  <CardTitle icon='shield-alt' title='Important' />
  <CardBody>
    Solamente necesito tomar cereales con leche. El queso está bueno, y
    también lo están las galletas. Me encanta mojar mis nachos en
    chocolate. Las bufandas son útiles para mantenerte caliente,
    también tienen estilo.
  </CardBody>
  <CardActions>
    <Button onClick={f => f} outline>Read More</Button>
    <small className='u--float-right text--color-secondary'>20/20/2019</small>
  </CardActions>
</Card>

<Card image='https://dummyimage.com/356x130/00f/00c.gif'>
  <CardTitle title='Hello There' />
  <CardBody>
    Solo necesito tirarme desde un avión con una
    bufanda para no coger un catarro. Mi perro es negro, mi rata es
    blanca. Mis padres quieren que tenga un hijo. El colegio es útil si
    te quieres morir.
  </CardBody>
  <CardActions>
    <Button onClick={f => f} outline>Read More</Button>
    <small className='u--float-right text--color-secondary'>20/20/2019</small>
  </CardActions>
</Card>

<Card>
  <CardBody>
    Solo necesito tirarme desde un avión con una
    bufanda para no coger un catarro. Mi perro es negro, mi rata es
    blanca. Mis padres quieren que tenga un hijo. El colegio es útil si
    te quieres morir.
  </CardBody>
</Card>`} />
  </div>
)

export default CardDemo
