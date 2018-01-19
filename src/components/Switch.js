import React from 'react'
import PropTypes from 'prop-types'

import MD_COLORS from '../MD_COLORS'
import Ripples from './Ripples'

const THUMB_SIZE_G_UNITS = 5

class Switch extends React.Component {
  activate = () => {
    this.props.onChange()
  }

  render () {
    const { checked, disabled, ...other } = this.props
    return (
      <div className={`switch ${checked && 'checked'} ${disabled && 'disabled'}`} {...other}>
        <div className='track' onClick={this.activate} />
        <div className='thumb dp2'>
          <Ripples
            rippleCentered
            rippleSpread={0.67}
            style={{overflow: 'visible'}}
            disabled={disabled}
            onClick={this.activate} />
        </div>
        <style jsx>{`
          .switch {
            position: relative;

            display: inline-block;

            overflow: visible;
          }

          input {
            display: none;
          }

          .track {
            width: ${this.context.nextMdTheme.g(9)};
            height: ${this.context.nextMdTheme.g(3.5)};
            border-radius: ${this.context.nextMdTheme.g(2)};

            cursor: pointer;

            ${this.context.nextMdTheme.animations.standard('background-color')}
          }

          .thumb {
            position: absolute;
            left: 0;
            top: -3px;

            width: ${this.context.nextMdTheme.g(THUMB_SIZE_G_UNITS)};
            height: ${this.context.nextMdTheme.g(THUMB_SIZE_G_UNITS)};
            border-radius: 50%;

            overflow: visible;

            ${this.context.nextMdTheme.animations.standard('left background-color')}
          }

          .checked .thumb {
            left: calc(100% - ${this.context.nextMdTheme.g(THUMB_SIZE_G_UNITS)});
          }

          .disabled .track {
            background-color: rgba(0, 0, 0, 0.12);

            cursor: default;
          }

          .disabled .thumb {
            background-color: ${MD_COLORS.grey400};
          }
        `}</style>
      </div>
    )
  }
}

Switch.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,

  ...Ripples.propTypes
}

Switch.contextTypes = {
  nextMdTheme: PropTypes.object
}

export default Switch
