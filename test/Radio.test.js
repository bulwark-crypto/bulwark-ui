/* global describe, it */
import React from 'react'
import expect from 'must'
import { shallow } from 'enzyme'
import { spy } from 'sinon'
import Radio from '../web/Radio'

describe('<Radio />', () => {
  it('renders as a span', () => {
    const wrapper = shallow(<Radio />)
    expect(wrapper.is('span')).to.be.true()
  })

  it('augments itself', () => {
    const wrapper = shallow(<Radio as='a' />)
    expect(wrapper.is('a')).to.be.true()
  })

  it('renders classes', () => {
    const wrapper = shallow(<Radio primary secondary red disabled />)
    expect(wrapper.hasClass('radio')).to.be.true()
    expect(wrapper.hasClass('radio--primary')).to.be.true()
    expect(wrapper.hasClass('radio--secondary')).to.be.true()
    expect(wrapper.hasClass('radio--red')).to.be.true()
    expect(wrapper.hasClass('radio--disabled')).to.be.true()
  })

  it('passes extra props down', () => {
    const fakeFunc = () => {}
    const wrapper = shallow(<Radio onClick={fakeFunc} />)
    expect(wrapper.find('span').prop('onClick')).to.equal(fakeFunc)
  })

  it('starts checked when defaultChecked passed', () => {
    const wrapper = shallow(<Radio defaultChecked />)
    expect(wrapper.state('checked')).to.be.true()
  })

  it('toggles state on click', () => {
    const wrapper = shallow(<Radio />)
    wrapper.find('span').simulate('click')
    expect(wrapper.state('checked')).to.be.true()
  })

  it('doesn\'t toggle state on disabled click', () => {
    const wrapper = shallow(<Radio disabled />)
    wrapper.find('span').simulate('click')
    expect(wrapper.state('checked')).to.be.false()
  })

  it('onChange callback is called', () => {
    const callback = spy()
    const wrapper = shallow(<Radio onChange={callback} />)
    wrapper.find('span').simulate('click')
    expect(callback.calledOnce).to.be.true()
  })

  describe('controlled components', () => {
    it('can be controlled', () => {
      const wrapper = shallow(<Radio checked />)
      expect(wrapper.hasClass('radio--checked')).to.be.true()
    })

    it('don\'t toggle state when clicked', () => {
      const wrapper = shallow(<Radio checked={false} />)
      wrapper.find('span').simulate('click')
      expect(wrapper.state('checked')).to.be.false()
    })
  })

  describe('activates on keyboard', () => {
    it('enter', () => {
      const wrapper = shallow(<Radio />)
      wrapper.find('span').simulate('keyDown', {key: 'Enter'})
      expect(wrapper.state('checked')).to.be.true()
    })

    it('spacebar', () => {
      const wrapper = shallow(<Radio />)
      wrapper.find('span').simulate('keyDown', {key: ' '})
      expect(wrapper.state('checked')).to.be.true()
    })

    it('doesn\'t activate on other', () => {
      const wrapper = shallow(<Radio />)
      wrapper.find('span').simulate('keyDown', {key: 'f'})
      expect(wrapper.state('checked')).to.be.false()
    })
  })
})
