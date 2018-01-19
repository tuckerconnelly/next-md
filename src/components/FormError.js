import React from 'react'
import PropTypes from 'prop-types'
import transitionify from 'transitionify'

import MD_COLORS from '../MD_COLORS'

class FormError extends React.Component {
  render () {
    const {active, children} = this.props
    return (
      <div className={active && 'active'}>
        {children}
        <style jsx>{`
          div {
            max-height: 0;
            margin-bottom: ${this.context.nextMdTheme.g(0)};

            ${this.context.nextMdTheme.type.body1}
            color: ${MD_COLORS.red600};
            font-weight: 300;

            opacity: 0;

            ${this.context.nextMdTheme.animations.standard('opacity max-height margin-bottom')}
            transition-delay: 0ms, 50ms, 50ms;
          }

          .active {
            max-height: ${this.context.nextMdTheme.g(8)};
            margin-bottom: ${this.context.nextMdTheme.g(2)};

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
