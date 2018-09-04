/* global describe, it */
import React from 'react'
import expect from 'must'
import { shallow } from 'enzyme'
import {ChartLine} from '../react/Chart'

const data = {}
const keys = [1.1, 1.2301, 1.32, 1.30, 1.4, 1.5, 1.6]
keys.forEach((k, i) => { data[i] = k })

describe('<ChartLine />', () => {
  const links = [
    {active: true, onClick: () => {}, text: 'One'},
    {onClick: () => {}, text: 'Two'}
  ]
  const wrapper = shallow(
    <ChartLine data={data} links={links} subtitle='Sub' title='Test' />
  )

  it('renders as a div', () => {
    expect(wrapper.is('div')).to.be.true()
  })

  it('renders body, links, subtitle, and title', () => {
    expect(wrapper.find('.chart__body')).to.have.length(1)
    expect(wrapper.find('.chart__head')).to.have.length(1)
    expect(wrapper.childAt(0).find('.chart__head__title')).to.have.length(1)
    expect(wrapper.childAt(0).find('.chart__head__subtitle')).to.have.length(1)
    expect(wrapper.childAt(0).find('.chart__head__links')).to.have.length(1)
  })
})
