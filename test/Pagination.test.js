/* global describe, it */
import React from 'react'
import expect from 'must'
import { shallow } from 'enzyme'
import Pagination from '../react/Pagination'

describe('<Pagination />', () => {
  let page = 1
  let size = 10
  const handlePage = p => { page = p }
  const handleSize = s => { size = s }
  const wrapper = shallow(
    <Pagination
      label='Transactions'
      onPage={handlePage}
      onSize={handleSize}
      page={page}
      size={size}
      sizes={[10, 20, 40, 50]}
      total={1000} />
  )

  it('renders as a div', () => {
    expect(wrapper.is('div')).to.be.true()
    expect(wrapper.hasClass('pagination')).to.be.true()
  })

  it('renders select component for page size', () => {
    expect(wrapper.find('select')).to.have.length(1)
  })

  it('renders correct label', () => {
    expect(wrapper.find('.pagination__label').text()).to.equal('Transactions:')
  })

  it('handles onPage event', () => {
    wrapper.find('.pagination__page').childAt(3).simulate('click')
    expect(page).to.equal(2)

    wrapper.find('.pagination__page').childAt(1).simulate('click')
    expect(page).to.equal(0)

    wrapper.find('.pagination__page').childAt(0).simulate('click')
    expect(page).to.equal(1)

    wrapper.find('.pagination__page').childAt(4).simulate('click')
    expect(page).to.equal(100)
  })

  it('handles onSize event', () => {
    wrapper.find('select').simulate('change', {target: {value: 20}})
    expect(size).to.equal(20)
  })
})
