import PropTypes from 'prop-types'
import React from 'react'

import IconButton from './IconButton'
import SelectInput from './SelectInput'

export default class Pagination extends React.Component {
  static defaultProps = {
    label: 'Items',
    page: 1,
    sizes: [10, 20, 50, 100]
  }

  static propTypes = {
    label: PropTypes.string.isRequired,
    onPage: PropTypes.func.isRequired,
    onSize: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    size: PropTypes.number.isRequired,
    sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    total: PropTypes.number.isRequired
  }

  handlePage = page => this.props.onPage(page)

  handleSize = ev => this.props.onSize(ev.target.value)

  render () {
    return (
      <div block='pagination'>
        <div block='pagination' elem='label'>{this.props.label}:</div>
        <div block='pagination' elem='size'>
          <SelectInput
            name='pageSize'
            notempty
            onChange={this.handleSize}
            options={this.props.sizes.map(s => ({text: s.toString(), value: s}))}
            value={this.props.size} />
        </div>
        <div block='pagination' elem='count'>
          {((this.props.page - 1) * this.props.size) + 1}-{this.props.page * this.props.size} of {this.props.total}
        </div>
        <div block='pagination' elem='page'>
          <IconButton k='angle-double-left' onClick={() => this.handlePage(1)} />
          <IconButton k='angle-left' onClick={() => this.handlePage(this.props.page - 1)} />
          <span block='pagination_page' elem='label'>Page {this.props.page}</span>
          <IconButton k='angle-right' onClick={() => this.handlePage(this.props.page + 1)} />
          <IconButton k='angle-double-right' onClick={() => this.handlePage(Math.ceil(this.props.total / this.props.size))} />
        </div>
      </div>
    )
  }
}
