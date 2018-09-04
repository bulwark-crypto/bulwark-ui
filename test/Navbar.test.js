/* global describe, it */
import React from 'react'
import expect from 'must'
import {shallow} from 'enzyme'
import {Navbar, NavbarLink} from '../web/Navbar'

describe('<Navbar />', () => {
  it('render as div', () => {
    const wrapper = shallow(<Navbar>Test</Navbar>)
    expect(wrapper.is('div')).to.be.true()
  })

  it('renders menu icon for drawer', () => {
    const wrapper = shallow(<Navbar onDrawer={f => f}>Test</Navbar>)
    expect(wrapper.children().at(0).is('div')).to.be.true()
    expect(wrapper.find('.navbar__menu')).to.have.length(1)
  })

  it('renders children', () => {
    const wrapper = shallow(<Navbar>Test</Navbar>)
    expect(wrapper.text()).to.equal('Test')
  })

  it('passes onDrawer prop', () => {
    const fakeFunc = () => {}
    const wrapper = shallow(<Navbar onDrawer={fakeFunc}>Test</Navbar>)
    expect(wrapper.children('.navbar__menu').children().at(0).prop('onClick')).to.equal(fakeFunc)
  })
})

describe('<NavbarLink />', () => {
  it('render as a', () => {
    const wrapper = shallow(<NavbarLink to='#'>A</NavbarLink>)
    expect(wrapper.is('a')).to.be.true()
    expect(wrapper.prop('href')).to.equal('#')
  })

  it('render as Link', () => {
    const wrapper = shallow(<NavbarLink as='Link' to='#'>Link</NavbarLink>)
    expect(wrapper.is('Link')).to.be.true()
    expect(wrapper.prop('to')).to.equal('#')
  })

  it('renders icon if k', () => {
    const wrapper = shallow(<NavbarLink k='home'>A</NavbarLink>)
    expect(wrapper.children().at(0).dive().is('i')).to.be.true()
  })
})
