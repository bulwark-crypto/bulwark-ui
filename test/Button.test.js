/* global describe, it */
import React from 'react'
import expect from 'must'
import { shallow } from 'enzyme'
import Button from '../web/Button'

describe('<Button />', () => {
  it('renders as a button', () => {
    const wrapper = shallow(<Button />)
    expect(wrapper.is('button')).to.be.true()
  })

  it('augments itself', () => {
    const wrapper = shallow(<Button as='a' />)
    expect(wrapper.is('a')).to.be.true()
  })

  it('renders classes', () => {
    const wrapper = shallow(<Button primary secondary disabled outline text />)
    expect(wrapper.hasClass('button')).to.be.true()
    expect(wrapper.hasClass('button--primary')).to.be.true()
    expect(wrapper.hasClass('button--secondary')).to.be.true()
    expect(wrapper.hasClass('button--disabled')).to.be.true()
    expect(wrapper.hasClass('button--outline')).to.be.true()
    expect(wrapper.hasClass('button--text')).to.be.true()
  })

  it('renders its text', () => {
    const wrapper = shallow(<Button>lorem ipsum</Button>)
    expect(wrapper.text()).to.equal('lorem ipsum')
  })

  it('passes extra props down', () => {
    const fakeFunc = () => {}
    const wrapper = shallow(<Button onClick={fakeFunc} />)
    expect(wrapper.prop('onClick')).to.equal(fakeFunc)
  })
})
