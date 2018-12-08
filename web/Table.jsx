import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Checkbox from './Checkbox'
import Icon from './Icon'
import { swiftEaseIn } from '../lib/Animations'
import { primary, secondary, lightGray } from '../lib/Theme'

const TableWrapper = styled.table`
  margin: 0;
  padding: 0;
  width: 100%;
`

// Empty?
export const TableBody = styled.tbody`

`

export const TableCell = styled.td`
  color: #252525;
  font-size: 16px;
  line-height: 21px;
  padding: 7px;

  input[type="checkbox"] {
    border-radius: 2px;
    display: none;

    :hover::before {
      text-shadow: 0px 0px 1px ${primary};
    }

    ::before {
      color: ${secondary};
      cursor: pointer;
      display: inline-block;
      text-align: center;
      text-shadow: 0px 0px 1px ${lightGray};
      transition: color .3s ease;
    }

    &:checked + label::before {
      color: ${primary};
    }

    & + label::before {
      content: "\\2610";
      font-size: 18px;
    }

    &:checked + label::before {  content: "\\2611"; }
  }
`

export const TableRow = styled.tr`
  height: 50px;
  padding: 0 32px;
  transition: ${swiftEaseIn};

  &:hover {
    background-color: rgba(41, 77, 234, 0.1) !important;
  }

  &:nth-child(odd) {
    background-color: rgba(124, 124, 124, 0.1);
  }
`

export const TableHead = styled.thead`
  ${TableCell} {
      color: ${secondary};
      cursor: pointer;
      font-size: 14px;
      height: 70px;
      line-height: 19px;

      i { margin-left: 7px; }
    }

    ${TableRow}, ${TableRow}:hover {
      background: transparent !important;
    }
`

export class Table extends React.Component {
  static propTypes = {
    column: PropTypes.string,
    columns: PropTypes.arrayOf(PropTypes.shape({
      key: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    })).isRequired,
    descending: PropTypes.bool,
    onSelect: PropTypes.func,
    onSort: PropTypes.func,
    rows: PropTypes.arrayOf(PropTypes.object).isRequired,
    selectable: PropTypes.bool,
    sortable: PropTypes.bool
  }

  render () {
    const {children, column, columns, onSelect, onSort, row, rows, ...rest} = this.props
    const cols = this.props.selectable ? [{key: '__select', text: ''}, ...columns] : [...columns]

    return (
      <TableWrapper cellPadding={0} cellSpacing={0} {...rest}>
        <TableHead>
          <TableRow>
            {cols.map(c => (
              <TableCell key={c.key} onClick={onSort ? () => onSort(c.key) : null}>
                {c.text}{(this.props.sortable && column === c.key) &&
                  <Icon k={this.props.descending ? 'arrow-down' : 'arrow-up'} />
                }
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((r, i) => {
            return (
              <TableRow key={i}>
                {cols.map(c => (
                  <TableCell key={c.key}>
                    {c.key === '__select' &&
                      <Checkbox primary onChange={onSelect ? () => onSelect(r) : null} />
                    }
                    {c.key !== '__select' && r[c.key]}
                  </TableCell>
                ))}
              </TableRow>
            )
          })}
        </TableBody>
      </TableWrapper>
    )
  }
}

export default {Table, TableBody, TableCell, TableHead, TableRow}
