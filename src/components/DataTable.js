import React from 'react'
import PropTypes from 'prop-types'

import MD_COLORS from '../MD_COLORS'

class DataTable extends React.Component {
  render () {
    const {children, ...other} = this.props

    return (
      <table className='dataTable' {...other}>
        <tbody>
          {children}
        </tbody>
        <style jsx>
          {
            `
          table {
            width: 100%;
            height: 100%;
            border-radius: 2px;
            border-spacing: 0;

            background-color: white;

            color: ${MD_COLORS.textBlack};
          }
        `
          }
        </style>
      </table>
    )
  }
}

DataTable.propTypes = {
  children: PropTypes.any
}

class HRow extends React.Component {
  render () {
    const {children, style, ...other} = this.props

    return (
      <tr {...other}>
        {React.Children.map(
          children,
          (
            child,
            i
            // Give the first cell a left padding of 24, per spec
          ) =>
            i === 0
              ? React.cloneElement(child, {
                ...child.props,
                style: {paddingLeft: 24, ...(child.props.style || {})}
              })
              : child
        )}
      </tr>
    )
  }
}

HRow.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object
}

HRow.displayName = 'DataTable.HRow'

DataTable.HRow = HRow

class HCell extends React.Component {
  render () {
    const {children, ...other} = this.props
    const {g} = this.context.nextMdTheme
    return (
      <th {...other}>
        {children}
        <style jsx>
          {
            `
          th {
            padding: ${g(4)} ${g(6)} ${g(4)} ${g(8)};

            color: ${MD_COLORS.textBlackSecondary};
            font-size: 12px;
            text-overflow: ellipsis;
            white-space: nowrap;

            overflow: hidden;
          }
        `
          }
        </style>
      </th>
    )
  }
}

HCell.propTypes = {
  children: PropTypes.any
}

HCell.contextTypes = {
  nextMdTheme: PropTypes.object
}

HCell.displayName = 'DataTable.HCell'

DataTable.HCell = HCell

class Row extends React.Component {
  render () {
    const {children, style, ...other} = this.props
    const {animations} = this.context.nextMdTheme
    return (
      <tr {...other}>
        {React.Children.map(
          children,
          (
            child,
            i
            // Give the first cell a left padding of 24, per spec
          ) =>
            i === 0
              ? React.cloneElement(child, {
                ...child.props,
                style: {paddingLeft: 24, ...(child.props.style || {})}
              })
              : child
        )}
        <style jsx>
          {
            `
          tr {
            background-color: transparent;

            ${animations.standard('background-color')}
          }

          tr:hover {
            background-color: ${MD_COLORS.grey200};
          }
        `
          }
        </style>
      </tr>
    )
  }
}

Row.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object
}

Row.contextTypes = {
  nextMdTheme: PropTypes.object
}

Row.displayName = 'DataTable.Row'

DataTable.Row = Row

class Cell extends React.Component {
  render () {
    const {children, ...other} = this.props
    const {g} = this.context.nextMdTheme
    return (
      <td {...other}>
        {children}
        <style jsx>
          {
            `
          td {
            /*
              NOTE Spec says hard height of 48, but going with
              vertical padding of 16, expecting content to be height
              16. That way, when content is 16px high, it'll be
              to spec, but if you want to break spec and have
              more content in the cell, it'll expand and not cut off
              the text
             */
            padding: ${g(4)} ${g(6)} ${g(4)} ${g(8)};
            border-top: 1px solid ${MD_COLORS.grey300};

            font-size: 13px;
            text-align: right;
          }
        `
          }
        </style>
      </td>
    )
  }
}

Cell.propTypes = {
  children: PropTypes.any
}

Cell.contextTypes = {
  nextMdTheme: PropTypes.object
}

Cell.displayName = 'DataTable.Cell'

DataTable.Cell = Cell

export default DataTable
