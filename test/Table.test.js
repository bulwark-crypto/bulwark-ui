/* global describe, it */
import React from 'react'
import expect from 'must'
import { shallow } from 'enzyme'
import {Table, TableBody, TableCell, TableHead, TableRow} from '../web/Table'

const columns = [{key: 'a', text: 'A'}, {key: 'b', text: 'B'}]
const rows = [{a: 1, b: 4}, {a: 2, b: 3}]
let selectedColumn = 'a'
let selectedRow = null
const wrapper = shallow(
  <Table
    column={selectedColumn}
    columns={columns}
    descending
    onSelect={row => {
      selectedRow = row
    }}
    onSort={column => {
      selectedColumn = column
    }}
    rows={rows}
    selectable
    sortable />
)

describe('<Table />', () => {
  it('renders as table', () => {
    expect(wrapper.is('table')).to.be.true()
    wrapper.setProps({
      onSelect: row => {
        selectedRow = row
        wrapper.setProps({row})
      },
      onSort: column => {
        selectedColumn = column
        wrapper.setProps({column, descending: true})
      }
    })
  })

  it('selectable should have 1 extra column', () => {
    expect(wrapper.childAt(0).childAt(0).children()).to.have.length(columns.length + 1)
  })

  it('handles onSelect', () => {
    expect(selectedRow).to.equal(null)
    wrapper.childAt(1).childAt(0).childAt(0).childAt(0).simulate('change')
    expect(selectedRow.a).to.equal(1)

    wrapper.setProps({onSelect: null})
    expect(wrapper.prop('onSelect')).to.equal(undefined)
  })

  it('handles onSort', () => {
    expect(selectedColumn).to.equal('a')
    wrapper.childAt(0).childAt(0).childAt(2).simulate('click')
    expect(selectedColumn).to.equal('b')
    wrapper.setProps({descending: false})

    wrapper.setProps({onSort: null})
    expect(wrapper.prop('onSort')).to.equal(undefined)
  })

  it('columns should match columns', () => {
    wrapper.setProps({selectable: false})
    expect(wrapper.childAt(0).childAt(0).children()).to.have.length(columns.length)
  })
})

describe('<TableBody />', () => {
  const wrapper = shallow(<TableBody />)

  it('renders as tbody', () => {
    expect(wrapper.is('tbody')).to.be.true()
  })
})

describe('<TableCell />', () => {
  const wrapper = shallow(<TableCell />)

  it('renders as td', () => {
    expect(wrapper.is('td')).to.be.true()
  })
})

describe('<TableHead />', () => {
  const wrapper = shallow(<TableHead />)

  it('renders as thead', () => {
    expect(wrapper.is('thead')).to.be.true()
  })
})

describe('<TableRow />', () => {
  const wrapper = shallow(<TableRow />)

  it('renders as tr', () => {
    expect(wrapper.is('tr')).to.be.true()
  })
})
