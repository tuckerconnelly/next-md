import React from 'react'
import PropTypes from 'prop-types'

import Ripples from './Ripples'
import breakpoints from '../styles/breakpoints'
import colors from '../styles/colors'
import elevations from '../styles/elevations'
import animations from '../styles/animations'

const RaisedButton = (
  {
    disabled,

    children,
    style,
    textStyle,

    ...other
  },
) => {
  // Uppercase and style if the child is a string
  // Otherwise it's probably an icon or image, so let it through
  const formattedChildren = typeof children === 'string'
    ? <span className='button text' style={textStyle}>
      {children.toUpperCase()}
      <style jsx>
        {
            `
        span {
          margin: auto;

          color: ${colors.textWhite};
        }

        .disabled span {
          color: rgba(0, 0, 0, .26),
        }
      `
          }
      </style>
    </span>
    : children

  return (
    <div
      style={style}
      className={['raisedButton', disabled && 'disabled'].join(' ')}
    >
      <Ripples
        style={{display: 'flex', width: 'auto', padding: '0 16px'}}
        rippleColor='white'
        disabled={disabled}
        {...other}
      >
        {formattedChildren}
      </Ripples>
      <style jsx>
        {
          `
        div {
          display: inline-block;

          height: 36px;
          min-width: 88px;
          border-radius: 2px;
          margin: 0 8px;

          text-align: center;

          ${elevations.dp2}

          ${animations.standard('box-shadow')}
        }

        div:hover {
          ${elevations.dp2}
        }

        div:active {
          ${elevations.dp4}
        }

        .disabled {
          background-color: rgba(0, 0, 0, .12),
        }

        @media ${breakpoints.ml} {
          div {
            height: 32px;

            ${elevations.dp0}
          }
        }
      `
        }
      </style>
    </div>
  )
}

RaisedButton.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.object,
  textStyle: PropTypes.object,
}

export default RaisedButton
