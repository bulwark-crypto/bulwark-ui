/* global describe, it */
import React from 'react'
import expect from 'must'
import {shallow} from 'enzyme'
import Button from '../web/Button'
import {Modal, ModalActions, ModalContent, ModalTitle} from '../web/Modal'

describe('<Modal />', () => {
  it('render as modal', () => {
    const wrapper = shallow(<Modal open>Test</Modal>)
    expect(wrapper.is('div')).to.be.true()
    expect(wrapper.hasClass('modal')).to.be.true()
    expect(wrapper.find('.modal__container')).to.have.length(1)
  })

  it('render as modal open', () => {
    const wrapper = shallow(<Modal open>Test</Modal>)
    expect(wrapper.hasClass('modal--open')).to.be.true()
  })

  it('render as modal overlay', () => {
    const wrapper = shallow(<Modal open overlay>Test</Modal>)
    expect(wrapper.hasClass('modal--overlay')).to.be.true()
  })

  it('passes onCancel prop', () => {
    const fakeFunc = () => {}
    const wrapper = shallow(<Modal open onCancel={fakeFunc}>Test</Modal>)
    expect(wrapper.prop('onClick')).to.equal(fakeFunc)
  })
})

describe('<ModalActions />', () => {
  it('render as modal actions', () => {
    const wrapper = shallow(<ModalActions><Button>OK</Button></ModalActions>)
    expect(wrapper.is('div')).to.be.true()
    expect(wrapper.hasClass('modal__actions')).to.be.true()
  })
})

describe('<ModalContent />', () => {
  it('render as modal content', () => {
    const wrapper = shallow(<ModalContent>OK?</ModalContent>)
    expect(wrapper.is('div')).to.be.true()
    expect(wrapper.hasClass('modal__content')).to.be.true()
  })

  it('render as modal content text', () => {
    const wrapper = shallow(<ModalContent>OK?</ModalContent>)
    expect(wrapper.is('div')).to.be.true()
    expect(wrapper.text()).to.equal('OK?')
  })
})

describe('<ModalTitle />', () => {
  it('render as modal title', () => {
    const wrapper = shallow(<ModalTitle>Test</ModalTitle>)
    expect(wrapper.is('div')).to.be.true()
    expect(wrapper.hasClass('modal__title')).to.be.true()
  })

  it('render modal title text', () => {
    const wrapper = shallow(<ModalTitle>Test</ModalTitle>)
    expect(wrapper.text()).to.equal('Test')
  })
})
