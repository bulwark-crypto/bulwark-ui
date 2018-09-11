/* global describe, it */
import React from 'react'
import expect from 'must'
import {shallow} from 'enzyme'
import Button from '../web/Button'
import {Card, CardActions, CardBody, CardTitle} from '../web/Card'

describe('<Card />', () => {
  it('renders as a card', () => {
    const wrapper = shallow(<Card><CardBody>lorem ipsum</CardBody></Card>)
    expect(wrapper.hasClass('card')).to.be.true()
    expect(wrapper.children().length).to.equal(1)
  })

  it('renders all three card sections', () => {
    const wrapper = shallow(
      <Card>
        <CardTitle icon='home' title='Title' />
        <CardBody nopadding>Body</CardBody>
        <CardActions>
          <Button>Action</Button>
        </CardActions>
      </Card>
    )
    expect(wrapper.children()).to.have.length(3)
    expect(wrapper.childAt(0).dive().hasClass('card__title')).to.be.true()
    expect(wrapper.childAt(1).dive().hasClass('card__body')).to.be.true()
    expect(wrapper.childAt(1).dive().hasClass('card__body--nopadding')).to.be.true()
    expect(wrapper.childAt(2).dive().hasClass('card__actions')).to.be.true()
  })

  it('renders title section icon', () => {
    const wrapper = shallow(<Card><CardTitle icon='home' title='Test' /></Card>)
    expect(wrapper.children()).to.have.length(1)
    expect(wrapper.childAt(0).dive().children()).to.have.length(2)
    expect(wrapper.childAt(0).dive().childAt(1).dive().is('i')).to.be.true()
  })

  it('renders title image background', () => {
    const wrapper = shallow(
      <Card image='https://dummyimage.com/480x130/00f/00c.gif'>
        <CardTitle title='Tittle' />
        <CardBody>Test</CardBody>
      </Card>
    )
    expect(wrapper.childAt(0).is('img')).to.be.true()
    expect(wrapper.hasClass('card--image')).to.be.true()
  })
})
