/* global describe, it */
import React from 'react'
import expect from 'must'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import Checkbox from '../react/Checkbox'

describe('<Checkbox />', () => {
  it('renders as a span', () => {
    const wrapper = shallow(<Checkbox />)
    expect(wrapper.is('span')).to.be.true()
  })

  it('augments itself', () => {
    const wrapper = shallow(<Checkbox as='a' />)
    expect(wrapper.is('a')).to.be.true()
  })

  it('renders classes', () => {
    const wrapper = shallow(<Checkbox primary secondary red disabled indeterminate />)
    expect(wrapper.hasClass('checkbox')).to.be.true()
    expect(wrapper.hasClass('checkbox--primary')).to.be.true()
    expect(wrapper.hasClass('checkbox--secondary')).to.be.true()
    expect(wrapper.hasClass('checkbox--red')).to.be.true()
    expect(wrapper.hasClass('checkbox--disabled')).to.be.true()
    expect(wrapper.hasClass('checkbox--indeterminate')).to.be.true()
  })

  it('passes extra props down', () => {
    const fakeFunc = () => {}
    const wrapper = shallow(<Checkbox onClick={fakeFunc} />)
    expect(wrapper.find('span').prop('onClick')).to.equal(fakeFunc)
  })

  it('starts checked when defaultChecked passed', () => {
    const wrapper = shallow(<Checkbox defaultChecked />)
    expect(wrapper.state('checked')).to.be.true()
  })

  it('toggles state on click', () => {
    const wrapper = shallow(<Checkbox />)
    wrapper.find('span').simulate('click')
    expect(wrapper.state('checked')).to.be.true()
  })

  it('doesn\'t toggle state on disabled click', () => {
    const wrapper = shallow(<Checkbox disabled />)
    wrapper.find('span').simulate('click')
    expect(wrapper.state('checked')).to.be.false()
  })

  it('onChange callback is called', () => {
    const callback = spy()
    const wrapper = shallow(<Checkbox onChange={callback} />)
    wrapper.find('span').simulate('click')
    expect(callback.calledOnce).to.be.true()
  })

  describe('controlled components', () => {
    it('can be controlled', () => {
      const wrapper = shallow(<Checkbox checked />)
      expect(wrapper.hasClass('checkbox--checked')).to.be.true()
    })

    it('don\'t toggle state when clicked', () => {
      const wrapper = shallow(<Checkbox checked />)
      wrapper.find('span').simulate('click')
      expect(wrapper.state('checked')).to.be.false()
    })
  })
})
