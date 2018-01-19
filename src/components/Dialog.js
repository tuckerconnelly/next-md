import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import transitionify from 'transitionify'

class Dialog extends React.Component {
  state = {mounted: false}

  componentDidMount () {
    if (!this.el) this.el = document.createElement('div')
    document.body.appendChild(this.el)

    this.setState({mounted: true})
  }

  componentWillUnmount () {
    document.body.removeChild(this.el)
  }

  render () {
    if (!this.state.mounted) return <div />

    const {children, active, onClose} = this.props

    return ReactDOM.createPortal(
      <div className={`dialog ${active ? 'active' : ''}`}>
        <div
          className='background'
          onClick={onClose} />
        <div className='body'>
          {children}
        </div>
        <style jsx>{`
          .dialog {
            position: absolute;
            left: 0;
            top: 0;

            width: 100%;
            height: 100%;

            display: flex;
            flex-direction: column;
            align-items: stretch;
          }

          .background {
            position: absolute;
            left: 0;
            top: 0;

            width: 100%;
            height: 100%;

            background-color: rgba(0, 0, 0, 0);

            cursor: pointer;

            ${this.context.nextMdTheme.animations.standard('background-color')}
          }

          .active .background {
            background-color: rgba(0, 0, 0, 0.28);
          }

          .body {
            padding: ${this.context.nextMdTheme.g(2)} ${this.context.nextMdTheme.g(4)};
            border-radius: 2px;
            margin-left: ${this.context.nextMdTheme.g(2)};
            margin-right: ${this.context.nextMdTheme.g(2)};
            margin-top: ${this.context.nextMdTheme.g(0)};

            background-color: white;

            opacity: 0;
            ${this.context.nextMdTheme.elevations.dp8}

            ${this.context.nextMdTheme.animations.standard('margin-top opacity')}
          }

          .active .body {
            margin-top: ${this.context.nextMdTheme.g(2)};

            opacity: 1;
          }

          @media ${this.context.nextMdTheme.breakpoints.sm} {
            .dialog {
              align-items: center;
            }

            .body {
              width: ${this.context.nextMdTheme.g(130)};
              margin-top: ${this.context.nextMdTheme.g(8)};
            }

            .active .body {
              margin-top: ${this.context.nextMdTheme.g(10)};
            }
          }
        `}</style>
      </div>,
      this.el
    )
  }
}

Dialog.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,

  // transition
  active: PropTypes.bool
}

Dialog.contextTypes = {
  nextMdTheme: PropTypes.object
}

Dialog.defaultProps = {
  pathname: '/'
}

export default transitionify()(Dialog)
