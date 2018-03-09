import React from 'react'
import PropTypes from 'prop-types'
import {Portal} from 'react-portal'
import Transition from 'react-transition-group/Transition'

class Dialog extends React.Component {
  render () {
    const {children, active, onClose} = this.props

    return (
      <Portal isOpen={active}>
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
                  z-index: 2500;

                  width: 0;
                  height: 0;

                  display: flex;
                  flex-direction: column;
                  align-items: stretch;

                  overflow: hidden;
                }

                .dialog.entering, .dialog.entered, .dialog.exiting {
                  width: 100%;
                  height: 100%;

                  overflow: visible;
                }

                .background {
                  position: fixed;
                  left: 0;
                  top: 0;

                  width: 0;
                  height: 0;

                  background-color: rgba(0, 0, 0, 0);

                  cursor: pointer;

                  ${this.context.nextMdTheme.animations.standard('background-color')}
                }

                .entering .background, .entered .background, .exiting .background {
                  width: 100%;
                  height: 100%;
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
        </Transition>
      </Portal>
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
