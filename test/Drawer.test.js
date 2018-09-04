/* global describe, it */
import React from 'react'
import expect from 'must'
import {shallow} from 'enzyme'
import {Drawer, DrawerDivider, DrawerHeader, DrawerLink} from '../web/Drawer'

describe('<Drawer />', () => {
  it('render as drawer', () => {
    const wrapper = shallow(<Drawer>Test</Drawer>)
    expect(wrapper.is('div')).to.be.true()
    expect(wrapper.hasClass('drawer')).to.be.true()
    expect(wrapper.find('.drawer__menu')).to.have.length(1)
  })

  it('render as drawer open', () => {
    const wrapper = shallow(<Drawer open>Test</Drawer>)
    expect(wrapper.hasClass('drawer--open')).to.be.true()
  })

  it('passes onDrawer prop', () => {
    const fakeFunc = () => {}
    const wrapper = shallow(<Drawer onDrawer={fakeFunc}>Test</Drawer>)
    expect(wrapper.prop('onClick')).to.equal(fakeFunc)
  })
})

describe('<DrawerDivider />', () => {
  it('render as drawer divider', () => {
    const wrapper = shallow(<DrawerDivider />)
    expect(wrapper.is('div')).to.be.true()
    expect(wrapper.hasClass('drawer__menu__divider')).to.be.true()
  })
})

describe('<DrawerHeader />', () => {
  it('render as drawer header', () => {
    const wrapper = shallow(<DrawerHeader title='T' subtitle='St' />)
    expect(wrapper.is('div')).to.be.true()
    expect(wrapper.hasClass('drawer__menu__header')).to.be.true()
  })

  it('render subtitle and title', () => {
    const wrapper = shallow(<DrawerHeader title='T' subtitle='St' />)
    expect(wrapper.is('div')).to.be.true()
    expect(wrapper.hasClass('drawer__menu__header')).to.be.true()
    expect(wrapper.find('.drawer__menu__title')).to.have.length(1)
    expect(wrapper.find('.drawer__menu__subtitle')).to.have.length(1)
  })
})

describe('<DrawerLink />', () => {
  it('render as drawer link', () => {
    const wrapper = shallow(<DrawerLink><a href='#'>Home</a></DrawerLink>)
    expect(wrapper.is('div')).to.be.true()
    expect(wrapper.hasClass('drawer__menu__link')).to.be.true()
  })

  it('render as drawer link with icon', () => {
    const wrapper = shallow(<DrawerLink k='home'><a href='#'>Home</a></DrawerLink>)
    expect(wrapper.is('div')).to.be.true()
    expect(wrapper.hasClass('drawer__menu__link')).to.be.true()
    expect(wrapper.children().at(0).dive().is('i')).to.be.true()
  })
})
