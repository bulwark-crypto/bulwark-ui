import PropTypes from 'prop-types'
import React from 'react'
import {pickRest} from '../lib/utils'

import Checkbox from './Checkbox'
import Icon from './Icon'

export const TableBody = ({children, ...rest}) => (
  <tbody block='table' elem='body' {...rest}>{children}</tbody>
)

export const TableCell = ({children, ...rest}) => (
  <td block='table' elem='cell' {...rest}>{children}</td>
)

export const TableHead = ({children, ...rest}) => (
  <thead block='table' elem='head' {...rest}>{children}</thead>
)

export const TableRow = ({children, ...rest}) => (
  <tr block='table' elem='row' {...rest}>{children}</tr>
)

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
    const [mods, {children, column, columns, onSelect, onSort, row, rows, ...rest}] = pickRest(this.props, ['descending', 'selectable', 'sortable'])
    const cols = mods.selectable ? [{key: '__select', text: ''}, ...columns] : [...columns]

    return (
      <table block='table' mods={mods} cellPadding={0} cellSpacing={0} {...rest}>
        <TableHead>
          <TableRow>
            {cols.map(c => (
              <TableCell key={c.key} onClick={onSort ? () => onSort(c.key) : null}>
                {c.text}{(mods.sortable && column === c.key) &&
                  <Icon k={mods.descending ? 'arrow-down' : 'arrow-up'} />
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
      </table>
    )
  }
}

export default {Table, TableBody, TableCell, TableHead, TableRow}
