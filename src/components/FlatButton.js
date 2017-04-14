import React from 'react'
import PropTypes from 'prop-types'
import Ripples from './Ripples'

/**
 * Flat buttons are printed on material. They do not lift, but fill with color
 * on press.
 *
 * ### Examples
 *
 *      import React from 'react'
 *      import { View } from 'react-native'
 *      import { FlatButton } from 'carbon-ui'
 *
 *      export default () =>
 *        <View style={{ justifyContent: 'flex-start', flexDirection: 'row' }}>
 *          <FlatButton>Hey I'm a button</FlatButton>
 *          <FlatButton disabled>Hey I'm disabled</FlatButton>
 *        </View>
 */
const FlatButton = (
  {
    ...other
  },
) => {
  // Uppercase and style if the child is a string
  // Otherwise it's probably an icon or image, so let it through
  const formattedChildren = typeof children === 'string'

  return (
    <Ripples {...other}>
      {formattedChildren}
    </Ripples>
  )
}

FlatButton.propTypes = {
  children: PropTypes.node.isRequired,
}

export default FlatButton
