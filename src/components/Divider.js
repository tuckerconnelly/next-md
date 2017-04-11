import React from 'react'
import PropTypes from 'prop-types'

const Divider = ({color, style, ...other}) => (
  <hr
    style={{
      borderTopColor: 'rgba(0, 0, 0, .12)',
      ...style,
    }}
  />
)
Divider.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object,
}

export default Divider
