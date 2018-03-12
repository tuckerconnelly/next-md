import React from 'react'
import PropTypes from 'prop-types'
import {Portal} from 'react-portal'
import Transition from 'react-transition-group/Transition'

export default class Toast extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    timeout: PropTypes.number
  }

  static defaultProps = {
    timeout: 4000
  }

  static contextTypes = {
    nextMdTheme: PropTypes.object
  }

  state = {
    active: false
  }

  render () {
    const {animations, elevations, g} = this.context.nextMdTheme

    const {children} = this.props

    const {active} = this.state

    return (
      <Portal isOpen={active}>
        <Transition timeout={300} in={active}>
          {state => (
            <div className='toastContainer' data-state={state}>
              <div className='toast'>
                {children}
              </div>
              <style jsx>{`
                .toastContainer {
                  display: flex;
                  align-items: center;
                  justify-content: center;

                  position: fixed;
                  left: 0;
                  bottom: ${g(-14)};

                  height: ${g(14)};
                  width: 100%;

                  ${animations.entrance('bottom')}
                  transition-duration: 375ms;
                }

                .toastContainer[data-state='entering'], .toastContainer[data-state='entered'] {
                  bottom: ${g(6)};

                  ${animations.tempExit('bottom')}
                  transition-duration: 375ms;
                }

                .toast {
                  display: flex;
                  align-items: center;
                  justify-content: center;

                  padding: ${g(4)};
                  border-radius: ${g(5)};

                  background-color: white;

                  ${elevations.dp4};
                }
              `}</style>
            </div>
          )}
        </Transition>
      </Portal>
    )
  }

  popUpTimeout = null

  popUp = () => {
    this.setState({active: true})
    clearTimeout(this.popUpTimeout)
    this.popUpTimeout = setTimeout(() => this.setState({active: false}), this.props.timeout)
  }
}
