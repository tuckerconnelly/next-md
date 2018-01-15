import React from 'react'
import PropTypes from 'prop-types'

import type from '../styles/type'
import g from '../styles/g'
import colors from '../styles/colors'

class TextField extends React.Component {
  render () {
    const {value, style, inputStyle, ...other} = this.props
    return (
      <div
        className='textField'
        style={style}>
        <input
          style={inputStyle}
          type='text'
          value={value}
          {...other} />
        <style jsx>{`
          .textField {
            width: 100%;

            margin: ${g(3)} 0;
            border-bottom: 1px solid rgba(0, 0, 0, 0.12);
          }

          input {
            width: 100%;
            border: none;
            outline: none;

            ${type.subheading}
            font-weight: 300;

            background-color: transparent;
          }

          input::placeholder {
            color: ${colors.textWhiteHint};
            font-weight: 100;
          }
        `}</style>
      </div>
    )
  }
}

TextField.propTypes = {
  value: PropTypes.any,

  style: PropTypes.object,
  inputStyle: PropTypes.object
}

export default TextField
