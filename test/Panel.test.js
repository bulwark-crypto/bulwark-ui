/* global describe, it */
import React from 'react'
import expect from 'must'
import {shallow} from 'enzyme'
import Panel from '../web/Panel'

describe('<Panel />', () => {
  it('render as panel', () => {
    const wrapper = shallow(<Panel>Test</Panel>)
    expect(wrapper.is('div')).to.be.true()
    expect(wrapper.hasClass('panel')).to.be.true()
    expect(wrapper.find('.panel__header')).to.have.length(1)
    expect(wrapper.find('.panel__content')).to.have.length(1)
  })

  it('render panel title and subtitle', () => {
    const wrapper = shallow(<Panel subtitle='ST' title='T'>Test</Panel>)
    expect(wrapper.find('.panel__header').find('.panel__header__subtitle').text()).to.equal('ST')
    expect(wrapper.find('.panel__header').find('.panel__header__title').text()).to.equal('T')
  })

  it('render panel trigger open', () => {
    const wrapper = shallow(<Panel>Test</Panel>)
    const arrow = wrapper.find('.panel__header').find('.panel__arrow')
    arrow.simulate('click')
    expect(wrapper.hasClass('panel--open'))
  })
})
