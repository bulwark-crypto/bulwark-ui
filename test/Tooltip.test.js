/* global describe, it */
import React from 'react'
import expect from 'must'
import { shallow } from 'enzyme'
import Tooltip from '../react/Tooltip'

describe('<Tooltip />', () => {
  it('renders as a tooltip', () => {
    const wrapper = shallow(<Tooltip content="testtip">testtip</Tooltip>)
    expect(wrapper.is('div')).to.be.true()
    expect(wrapper.hasClass('tooltip')).to.be.true()
  })

  it('renders as a tooltip__content', () => {
    const wrapper = shallow(<Tooltip content="testtip">testtip</Tooltip>)
    expect(wrapper.children()).to.have.length(2)
    expect(wrapper.children().at(0).is('span')).to.be.true()
    expect(wrapper.children().at(0).html()).to.equal('<span class="tooltip__content">testtip</span>')
    expect(wrapper.children().at(1).text()).to.equal('testtip')
  })

  it('renders classes', () => {
    const wrapper = shallow(<Tooltip bottom left right top primary urgent content="bar foo">foo bar</Tooltip>)
    const content = wrapper.children('.tooltip__content')
    expect(wrapper.hasClass('tooltip')).to.be.true()
    expect(content.hasClass('tooltip__content--bottom')).to.be.true()
    expect(content.hasClass('tooltip__content--left')).to.be.true()
    expect(content.hasClass('tooltip__content--right')).to.be.true()
    expect(content.hasClass('tooltip__content--top')).to.be.true()
    expect(content.hasClass('tooltip__content--primary')).to.be.true()
    expect(content.hasClass('tooltip__content--urgent')).to.be.true()
  })

  it('renders its text', () => {
    const wrapper = shallow(<Tooltip content="muspi">lorem ipsum</Tooltip>)
    expect(wrapper.children('.tooltip__content').text()).to.equal('muspi')
    expect(wrapper.text()).to.equal('muspilorem ipsum')
  })
})
