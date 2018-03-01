import React from 'react'
import PropTypes from 'prop-types'

import Ripples from './Ripples'

class FlatButton extends React.Component {
  render () {
    const {
      disabled,

      children,
      style,
      textStyle,

      ...other
    } = this.props

    return (
      <div
        style={style}
        className={['flatButton', disabled && 'disabled'].join(' ')}
      >
        <Ripples
          style={{display: 'flex', justifyContent: 'center', width: 'auto', padding: '0 16px'}}
          rippleColor='black'
          disabled={disabled}
          {...other}
        >
          {children}
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

            line-height: 36px;
            text-align: center;
            text-transform: uppercase;

            /* To get overflow:hidden working with border-radius for ripples */
            overflow: hidden;
            z-index: 1;

            ${this.context.nextMdTheme.animations.standard('box-shadow')}
          }
          .disabled {
            background-color: rgba(0, 0, 0, .12);
          }
          @media ${this.context.nextMdTheme.breakpoints.ml} {
            div {
              height: 32px;

              line-height: 32px;
            }
          }
        `
          }
        </style>
      </div>
    )
  }
}

FlatButton.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.object,
  textStyle: PropTypes.object
}

FlatButton.contextTypes = {
  nextMdTheme: PropTypes.object
}

export default FlatButton
