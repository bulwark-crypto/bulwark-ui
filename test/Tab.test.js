/* global describe, it */
import React from 'react'
import expect from 'must'
import { mount, shallow } from 'enzyme'
import {Tab, Tabs} from '../react/Tab'

const wrapper = shallow(<Tab title='Test'>Testing</Tab>)
const wrapper2 = shallow(<Tab disabled icon='home'>Testing</Tab>)

describe('<Tab />', () => {
  it('renders as a div', () => {
    expect(wrapper.is('div')).to.be.true()
  })

  it('renders title element', () => {
    expect(wrapper.find('.tab__title')).to.have.length(1)
  })

  it('renders icon element', () => {
    expect(wrapper2.find('.tab__icon')).to.have.length(1)
  })

  it('renders disabled element', () => {
    const wrapper4 = shallow(
      <Tabs>
        <Tab title='A'>Test 1</Tab>
        <Tab disabled title='B'>Test 2</Tab>
      </Tabs>
    )
    expect(wrapper4.childAt(0).childAt(0).childAt(1).dive().hasClass('tab--disabled')).to.be.true()
  })
})

const wrapper3 = shallow(
  <Tabs>
    <Tab title='Test'>Test 1</Tab>
    <Tab icon='home'>Test 2</Tab>
  </Tabs>
)

describe('<Tabs />', () => {
  it('renders as a div', () => {
    expect(wrapper3.is('div')).to.be.true()
  })

  it('renders as tabs', () => {
    expect(wrapper3.hasClass('tabs')).to.be.true()
    expect(wrapper3.find('.tabs__list')).to.have.length(1)
  })

  it('renders first tab as active', () => {
    expect(wrapper3.childAt(0).childAt(0).childAt(0).dive().hasClass('tab--active')).to.be.true()
  })

  it('changes second tab to active on click', () => {
    wrapper3.childAt(0).childAt(0).childAt(1).dive().simulate('click')
    expect(wrapper3.childAt(0).childAt(0).childAt(1).dive().hasClass('tab--active')).to.be.true()
  })

  it('mounts the tree and selects first tab', () => {
    const wrapper4 = mount(
      <Tabs>
        <Tab title='A'>Test 1</Tab>
        <Tab icon='home'>Test 2</Tab>
      </Tabs>
    )
    wrapper4.mount().childAt(0).childAt(0).childAt(0).childAt(1).childAt(0).simulate('click')
    expect(wrapper4.mount().childAt(0).childAt(0).childAt(0).childAt(1).hasClass('tab--active'))
    wrapper4.unmount()
  })

  it('converts single tab into tab array', () => {
    const wrapper4 = mount(<Tabs><Tab title='Test'>Test 1</Tab></Tabs>)
    expect(!!wrapper4).to.be.true()
    wrapper4.unmount()
  })
})
