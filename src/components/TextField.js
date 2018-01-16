import React from 'react'
import PropTypes from 'prop-types'

import MD_COLORS from '../MD_COLORS'

class TextField extends React.Component {
  render () {
    const {type, g} = this.context.nextMdTheme
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
            color: ${MD_COLORS.textWhiteHint};
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

TextField.contextTypes = {
  nextMdTheme: PropTypes.object
}

export default TextField
