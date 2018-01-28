import React from 'react'
import PropTypes from 'prop-types'
import Transition from 'react-transition-group/Transition'

import MD_COLORS from '../MD_COLORS'

const TRANSITION_TIMEOUT = 300

class FormError extends React.Component {
  state = {children: this.props.children}

  componentWillReceiveProps (nextProps) {
    if (this.props.children && !nextProps.children) {
      setTimeout(() => this.setState({children: nextProps.children}), TRANSITION_TIMEOUT)
    }

    if (!this.props.children && nextProps.children) {
      this.setState({children: nextProps.children})
    }
  }

  render () {
    const {children} = this.state
    return (
      <Transition timeout={TRANSITION_TIMEOUT} in={!!this.props.children}>
        {state => (
          <div className={state}>
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

              .entering, .entered {
                max-height: ${this.context.nextMdTheme.g(8)};
                margin-bottom: ${this.context.nextMdTheme.g(2)};

                opacity: 1;
              }
            `}</style>
          </div>
        )}
      </Transition>
    )
  }
}

FormError.propTypes = {
  children: PropTypes.node
}

FormError.contextTypes = {
  nextMdTheme: PropTypes.object
}

export default FormError
