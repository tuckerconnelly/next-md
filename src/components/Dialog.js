import React from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import Transition from 'react-transition-group/Transition'

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
      <Transition timeout={300} in={active}>
        {state => (
          <div className={`dialog ${state}`}>
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

              .entering .background, .entered .background {
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

              .entering .body, .entered .body {
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

                .entering .body, .entered .body {
                  margin-top: ${this.context.nextMdTheme.g(10)};
                }
              }
            `}</style>
          </div>
        )}
      </Transition>,
      this.el
    )
  }
}

Dialog.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  onClose: PropTypes.func
}

Dialog.contextTypes = {
  nextMdTheme: PropTypes.object
}

Dialog.defaultProps = {
  pathname: '/'
}

export default Dialog
