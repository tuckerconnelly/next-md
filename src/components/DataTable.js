import React from 'react'
import PropTypes from 'prop-types'

import g from '../styles/g'
import colors from '../styles/colors'
import animations from '../styles/animations'

const DataTable = ({children, ...other}) => (
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

        color: ${colors.textBlack};
      }
    `
      }
    </style>
  </table>
)

DataTable.propTypes = {
  children: PropTypes.any,
}

DataTable.HRow = ({children, style, ...other}) => (
  <tr {...other}>
    {React.Children.map(
      children,
      (
        child,
        i,
        // Give the first cell a left padding of 24, per spec
      ) =>
        i === 0
          ? React.cloneElement(child, {
            ...child.props,
            style: {paddingLeft: 24, ...(child.props.style || {})},
          })
          : child,
    )}
  </tr>
)

DataTable.HRow.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
}

DataTable.HCell = ({children, ...other}) => (
  <th {...other}>
    {children}
    <style jsx>
      {
        `
      th {
        padding: ${g(4)} ${g(6)} ${g(4)} ${g(8)};

        color: ${colors.textBlackSecondary};
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

DataTable.HCell.propTypes = {
  children: PropTypes.any,
}

DataTable.Row = ({children, style, ...other}) => (
  <tr {...other}>
    {React.Children.map(
      children,
      (
        child,
        i,
        // Give the first cell a left padding of 24, per spec
      ) =>
        i === 0
          ? React.cloneElement(child, {
            ...child.props,
            style: {paddingLeft: 24, ...(child.props.style || {})},
          })
          : child,
    )}
    <style jsx>
      {
        `
      tr {
        background-color: transparent;

        ${animations.standard('background-color')}
      }

      tr:hover {
        background-color: ${colors.grey200};
      }
    `
      }
    </style>
  </tr>
)

DataTable.Row.propTypes = {
  children: PropTypes.any,
  style: PropTypes.object,
}

DataTable.Cell = ({children, ...other}) => (
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
        border-top: 1px solid ${colors.grey300};

        font-size: 13px;
        text-align: right;
      }
    `
      }
    </style>
  </td>
)

DataTable.Cell.propTypes = {
  children: PropTypes.any,
}

export default DataTable
