/* global describe, it */
import React from 'react'
import expect from 'must'
import { shallow } from 'enzyme'
import Badge from '../web/Badge'

describe('<Badge />', () => {
  it('renders as a badge', () => {
    const wrapper = shallow(<Badge text='1'>Test</Badge>)
    expect(wrapper.is('span')).to.be.true()
    expect(wrapper.hasClass('badge')).to.be.true()
  })

  it('renders as a badge__text', () => {
    const wrapper = shallow(<Badge>Test</Badge>)
    expect(wrapper.children()).to.have.length(2)
    expect(wrapper.children().at(0).is('span')).to.be.true()
  })

  it('renders classes', () => {
    const wrapper = shallow(<Badge primary>Test</Badge>)
    expect(wrapper.hasClass('badge')).to.be.true()
    expect(wrapper.hasClass('badge--primary')).to.be.true()
    expect(wrapper.children().at(0).hasClass('badge__text')).to.be.true()
  })

  it('renders its text', () => {
    const wrapper = shallow(<Badge text='2'>Test</Badge>)
    expect(wrapper.children('.badge__text').text()).to.equal('2')
  })
})
