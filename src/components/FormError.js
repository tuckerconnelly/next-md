import React from 'react'
import PropTypes from 'prop-types'
import transitionify from 'transitionify'

import mdColors from '../styles/colors'

class FormError extends React.Component {
  render () {
    const {active, children} = this.props
    const {animations, g, type} = this.context.nextMdTheme
    return (
      <div className={active && 'active'}>
        {children}
        <style jsx>{`
          div {
            max-height: 0;
            margin-bottom: ${g(0)};

            ${type.body1}
            color: ${mdColors.red600};
            font-weight: 300;

            opacity: 0;

            ${animations.standard('opacity max-height margin-bottom')}
            transition-delay: 0ms, 50ms, 50ms;
          }

          .active {
            max-height: ${g(8)};
            margin-bottom: ${g(2)};

            opacity: 1;
          }
        `}</style>
      </div>
    )
  }
}

FormError.propTypes = {
  children: PropTypes.node,

  // transitionify
  active: PropTypes.bool
}

FormError.contextTypes = {
  nextMdTheme: PropTypes.object
}

export default transitionify({useChildren: true})(FormError)
