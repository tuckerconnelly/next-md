import React from 'react'
import PropTypes from 'prop-types'

import Ripples from './Ripples'

const IconToggle = ({value, style, iconStyle, ...other}) => (
  <Ripples
    rippleCentered
    rippleSpread={0.34}
    style={{
      display: 'flex',
      width: 36,
      height: 36,

      alignItems: 'center',
      justifyContent: 'center',

      overflow: 'visible',
      ...style
    }}
    {...other}
  >
    <span className='material-icons' style={iconStyle}>{value}</span>
  </Ripples>
)

IconToggle.propTypes = {
  value: PropTypes.string.isRequired,
  style: PropTypes.object,
  iconStyle: PropTypes.object
}

export default IconToggle
