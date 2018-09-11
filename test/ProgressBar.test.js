/* global describe, it */
import React from 'react'
import expect from 'must'
import {shallow} from 'enzyme'
import ProgressBar from '../web/ProgressBar'

describe('<ProgressBar />', () => {
  it('render as progressbar', () => {
    const wrapper = shallow(<ProgressBar v={0} />)
    expect(wrapper.is('div')).to.be.true()
    expect(wrapper.hasClass('progressbar')).to.be.true()
  })
})
