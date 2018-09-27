/* global describe, it */
import React from 'react'
import expect from 'must'
import { shallow } from 'enzyme'
import Code from '../web/Code'

describe('<Code />', () => {
  it('renders as a code', () => {
    const wrapper = shallow(<Code>echo $USER</Code>)
    expect(wrapper.is('pre')).to.be.true()
  })
})
