import React from 'react'

import Pagination from '../../react/Pagination'

export default class PaginationDemo extends React.Component {
  state = {
    page: 1,
    size: 10
  }

  handlePage = page => this.setState({page})

  handleSize = size => this.setState({size, page: 1})

  render () {
    return (
      <div>
        <h3>Pagination</h3>
        <Pagination
          label='Transactions'
          onPage={this.handlePage}
          onSize={this.handleSize}
          page={this.state.page}
          size={this.state.size}
          sizes={[10, 20, 40, 50]}
          total={1000} />
      </div>
    )
  }
}
