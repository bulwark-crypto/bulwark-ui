/* global describe, it */
import React from 'react'
import expect from 'must'
import {shallow} from 'enzyme'
import IconButton from '../react/IconButton'

describe('<IconButton />', () => {
  it('renders as a button', () => {
    const wrapper = shallow(<IconButton k='home' />)
    expect(wrapper.is('button')).to.be.true()
  })

  it('augments itself', () => {
    const wrapper = shallow(<IconButton as='a' k='lemon' />)
    expect(wrapper.is('a')).to.be.true()
  })

  it('renders classes', () => {
    const wrapper = shallow(<IconButton primary secondary disabled k='home' />)
    expect(wrapper.hasClass('button')).to.be.true()
    expect(wrapper.hasClass('button--primary')).to.be.true()
    expect(wrapper.hasClass('button--secondary')).to.be.true()
    expect(wrapper.hasClass('button--disabled')).to.be.true()
  })

  it('renders its text', () => {
    const wrapper = shallow(<IconButton k='bars'>lorem ipsum</IconButton>)
    expect(wrapper.text()).to.equal('<Icon />lorem ipsum')
  })

  it('passes extra props down', () => {
    const fakeFunc = () => {}
    const wrapper = shallow(<IconButton k='home' onClick={fakeFunc} />)
    expect(wrapper.prop('onClick')).to.equal(fakeFunc)
  })
})
