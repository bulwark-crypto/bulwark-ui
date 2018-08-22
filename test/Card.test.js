/* global describe, it */
import React from 'react'
import expect from 'must'
import { shallow } from 'enzyme'
import Card from '../react/Card'
import CardActions from '../react/CardActions'
import CardBody from '../react/CardBody'
import CardTitle from '../react/CardTitle'

describe('<Card />', () => {
  it('renders as a card', () => {
    const wrapper = shallow(<Card><CardBody>lorem ipsum</CardBody></Card>)

  })
})
