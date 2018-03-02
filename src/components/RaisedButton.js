import React from 'react'
import PropTypes from 'prop-types'

import Ripples from './Ripples'

class RaisedButton extends React.Component {
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
        className={['raisedButton', disabled && 'disabled'].join(' ')}
      >
        <Ripples
          style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: 'auto', padding: '0 16px'}}
          rippleColor='white'
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

            ${this.context.nextMdTheme.elevations.dp2}

            ${this.context.nextMdTheme.animations.standard('box-shadow color background-color')}
          }

          div:hover:not(.disabled) {
            ${this.context.nextMdTheme.elevations.dp2}
          }

          div:active:not(.disabled) {
            ${this.context.nextMdTheme.elevations.dp4}
          }

          .disabled {
            background-color: rgba(0, 0, 0, .12);

            ${this.context.nextMdTheme.elevations.dp0}
          }

          @media ${this.context.nextMdTheme.breakpoints.ml} {
            div {
              height: 32px;

              line-height: 32px;

              ${this.context.nextMdTheme.elevations.dp0}
            }
          }
        `
          }
        </style>
      </div>
    )
  }
}

RaisedButton.propTypes = {
  disabled: PropTypes.bool,
  children: PropTypes.node,
  style: PropTypes.object,
  textStyle: PropTypes.object
}

RaisedButton.contextTypes = {
  nextMdTheme: PropTypes.object
}

export default RaisedButton
