import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import IconButton from './IconButton'
import SelectInput from './SelectInput'
import { secondary } from '../lib/Theme'

const PaginationWrapper = styled.div`
  color: ${props => props.theme.secondary};
  display: block;
  font-size: 14px;
  line-height: 19px;
`

const PaginationLabel = styled.div`
  display: inline-block;
  margin-right: 20px;
`

const PaginationSize = styled.div`
  display: inline-block;
  margin-right: 20px;

  select {
    background-color: transparent;
    border: 0;
    border-bottom: 1px solid ${secondary};
    color: ${secondary};
    min-width: 43px;
    width: 43px;
  }

  .input__options {
    min-width: 60px;
    width: 60px;
  }
`

const PaginationCount = styled.div`
  display: inline-block;
  margin-right: 20px;
`

const PaginationPage = styled.div`
  display: inline-block;

  ${IconButton} {
    border: 0;
    color: ${secondary};
    display: inline-block;
    font-size: 14px;
    margin: 0 4px;
    padding: 0;
    width: 16px;

    &:active, &:focus, &:hover {
      background: transparent;
    }
  }
`

const PaginationPageLabel = styled.div`
  display: inline-block;
  padding: 0 10px;
`

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
      <PaginationWrapper>
        <PaginationLabel>{this.props.label}:</PaginationLabel>
        <PaginationSize>
          <SelectInput
            name='pageSize'
            notempty
            onChange={this.handleSize}
            options={this.props.sizes.map(s => ({text: s.toString(), value: s}))}
            value={this.props.size} />
        </PaginationSize>
        <PaginationCount>
          {((this.props.page - 1) * this.props.size) + 1}-{this.props.page * this.props.size} of {this.props.total}
        </PaginationCount>
        <PaginationPage>
          <IconButton k='angle-double-left' onClick={() => this.handlePage(1)} />
          <IconButton k='angle-left' onClick={() => this.handlePage(this.props.page - 1)} />
          <PaginationPageLabel>Page {this.props.page}</PaginationPageLabel>
          <IconButton k='angle-right' onClick={() => this.handlePage(this.props.page + 1)} />
          <IconButton k='angle-double-right' onClick={() => this.handlePage(Math.ceil(this.props.total / this.props.size))} />
        </PaginationPage>
      </PaginationWrapper>
    )
  }
}
