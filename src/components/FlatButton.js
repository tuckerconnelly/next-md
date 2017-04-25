import React from 'react'
import PropTypes from 'prop-types'

import Ripples from './Ripples'
import breakpoints from '../styles/breakpoints'
import animations from '../styles/animations'

const FlatButton = (
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
    ? <span
      className={`button text ${disabled && 'disabled'}`}
      style={textStyle}
      >
      {children.toUpperCase()}
      <style jsx>
        {
            `
        span {
          margin: auto;
        }

        .disabled span {
          color: rgba(0, 0, 0, .26);
        }
      `
          }
      </style>
    </span>
    : children

  return (
    <div
      style={style}
      className={['flatButton', disabled && 'disabled'].join(' ')}
    >
      <Ripples
        style={{display: 'flex', width: 'auto', padding: '0 16px'}}
        rippleColor='black'
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

          /* To get overflow:hidden working with border-radius for ripples */
          overflow: hidden;
          z-index: 1;

          ${animations.standard('box-shadow')}
        }
        .disabled {
          background-color: rgba(0, 0, 0, .12);
        }
        @media ${breakpoints.ml} {
          div {
            height: 32px;
          }
        }
      `
        }
      </style>
    </div>
  )
}

FlatButton.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.object,
  textStyle: PropTypes.object,
}

export default FlatButton
