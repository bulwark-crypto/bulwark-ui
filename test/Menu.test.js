/* global describe, it */
import React from 'react'
import expect from 'must'
import { shallow } from 'enzyme'
import Button from '../web/Button'
import {Menu, MenuItem} from '../web/Menu'

const fn = () => {}

let wrapper = shallow(
  <Menu component={<Button>Test</Button>}>
    <MenuItem key={1} onClick={fn}>Test</MenuItem>
  </Menu>
)

describe('<Menu />', () => {
  it('renders as a div', () => {
    expect(wrapper.is('div')).to.be.true()
  })

  it('renders classes', () => {
    expect(wrapper.hasClass('menu')).to.be.true()
  })

  it('should open menu items on click', () => {
    wrapper.childAt(0).simulate('click')
    expect(wrapper.hasClass('menu--open')).to.be.true()
    expect(wrapper.find('.menu__items')).to.have.length(1)
  })

  it('should close menu items on click of item', () => {
    document.querySelector('body').click()
    expect(wrapper.hasClass('menu--open')).to.be.false()
  })
})

const itemWrapper = shallow(
  <MenuItem key={1} onClick={fn}>Test</MenuItem>
)

describe('<MenuItem />', () => {
  it('renders as a div', () => {
    expect(itemWrapper.is('div')).to.be.true()
  })

  it('renders classes', () => {
    expect(itemWrapper.hasClass('menu__item')).to.be.true()
  })
})
