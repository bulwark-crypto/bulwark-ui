/* global describe, it */
import React from 'react'
import expect from 'must'
import { mount, shallow } from 'enzyme'
import SelectInput from '../web/SelectInput'

describe('<SelectInput />', () => {
  it('renders as an input', () => {
    const wrapper = shallow(<SelectInput name='test' />)
    expect(wrapper.find('.input__component').is('select')).to.be.true()
  })

  it('renders classes', () => {
    const wrapper = shallow(<SelectInput error name='test' />)
    expect(wrapper.hasClass('input')).to.be.true()
    expect(wrapper.hasClass('input--error')).to.be.true()
  })

  it('renders a message', () => {
    const wrapper = shallow(<SelectInput message='Test' name='test' />)
    expect(wrapper.find('.input__message')).to.have.length(1)
    expect(wrapper.find('.input__message').text()).to.equal('Test')
  })

  it('renders the provided default value', () => {
    const wrapper = shallow(<SelectInput defaultValue='T' name='test' />)
    expect(wrapper.find('.input__component').prop('value')).to.equal('T')
  })

  it('passes extra props down', () => {
    const wrapper = shallow(<SelectInput max={1} name='test' />)
    expect(wrapper.find('.input__component').prop('name')).to.equal('test')
    expect(wrapper.find('.input__component').prop('max')).to.equal(1)
  })

  it('handle focus event with class toggle', () => {
    const wrapper = shallow(<SelectInput name='test' />)
    wrapper.find('.input__component').simulate('focus')
    expect(wrapper.hasClass('input--focus')).to.be.true()
  })

  it('click on label makes input focused', () => {
    const wrapper = mount(<SelectInput label='Test' name='test' />)
    wrapper.find('.input__label').simulate('click')
    expect(document.activeElement.className).to.equal('input__component')
  })

  it('click opens options', () => {
    const opts = ['A', 'B', 'C'].map(k => ({text: k, value: k}))
    const wrapper = mount(<SelectInput name='test' options={opts} />)
    wrapper.find('.input__component').simulate('focus')
    expect(wrapper.find('.input__options')).to.have.length(1)
    wrapper.find('.input__options').find('.input__options__item').first().simulate('click')
    expect(wrapper.hasClass('input--focus')).to.be.false()
  })

  it('click on option fires onChange', () => {
    let x = 0
    const onChange = () => { x++ }
    const opts = ['A', 'B', 'C'].map(k => ({text: k, value: k}))
    const wrapper = mount(<SelectInput name='test' onChange={onChange} options={opts} />)
    wrapper.find('.input__component').simulate('focus')
    wrapper.find('.input__options').find('.input__options__item').first().simulate('click')
    expect(x).to.equal(1)
  })

  it('renders native options and handles change', () => {
    let x = ''
    const onChange = ev => { x = ev.target.value }
    const opts = ['A', 'B', 'C'].map(k => ({text: k, value: k}))
    const wrapper = shallow(<SelectInput name='test' onChange={onChange} options={opts} />)
    wrapper.find('.input__component').find('select').simulate('change', {target: {value: 'B'}})
    expect(x).to.equal('B')
  })

  it('renders native options and handles change empty', () => {
    let x = ''
    const onChange = ev => { x = ev.target.value }
    const opts = ['A', 'B', 'C'].map(k => ({text: k, value: k}))
    const wrapper = shallow(<SelectInput name='test' onChange={onChange} options={opts} />)
    wrapper.find('.input__component').find('select').simulate('change', {target: {value: ''}})
    expect(x).to.equal('')
  })
})
