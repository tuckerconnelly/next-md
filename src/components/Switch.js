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
    const {g, animations} = this.context.nextMdTheme
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
            width: ${g(9)};
            height: ${g(3.5)};
            border-radius: ${g(2)};

            cursor: pointer;

            ${animations.standard('background-color')}
          }

          .thumb {
            position: absolute;
            left: 0;
            top: -3px;

            width: ${g(THUMB_SIZE_G_UNITS)};
            height: ${g(THUMB_SIZE_G_UNITS)};
            border-radius: 50%;

            overflow: visible;

            ${animations.standard('left background-color')}
          }

          .checked .thumb {
            left: calc(100% - ${g(THUMB_SIZE_G_UNITS)});
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
