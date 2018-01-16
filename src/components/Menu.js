import React from 'react'
import PropTypes from 'prop-types'

import mdColors from '../mdColors'
import Ripples from './Ripples'

export class MenuItem extends React.Component {
  render () {
    const {children, active, selected, ...other} = this.props
    const {animations, breakpoints, g} = this.context.nextMdTheme
    return (
      <div className={`root ${active && 'active'}`} {...other}>
        <Ripples>
          <div className={`inner subheading ${selected && 'selected'}`}>
            {children}
          </div>
        </Ripples>
        <style jsx>
          {
            `
            .root {
              background-color: white;

              opacity: 0;
              transform: translateY(-10%);

              ${animations.standard('opacity transform background-color')}
              transition-duration: 375ms, 375ms, 150ms;
              transition-delay: 75ms, 75ms, 0ms;
            }

            .root:hover {
              background-color: ${mdColors.grey100};
            }

            .active {
              opacity: 1;
              transform: translateY(0%);
            }

            .inner {
              padding: 14px 0px 14px ${g(4)};

              color: ${mdColors.textBlackSecondary};
            }

            .selected {
              color: ${mdColors.textBlack};
            }

            @media ${breakpoints.ml} {
              .inner {
                padding: 6px 0px 6px ${g(6)};
              }

              .dense .inner {
                padding: 2px 0 2px ${g(6)};

                font-size: 13px;
              }
            }
        `
          }
        </style>
      </div>
    )
  }
}

MenuItem.propTypes = {
  children: PropTypes.node,
  value: PropTypes.any,
  active: PropTypes.bool,
  selected: PropTypes.bool
}

MenuItem.contextTypes = {
  nextMdTheme: PropTypes.object.isRequired
}

const ACTIVATE_TRANSITION_DURATION = 300

class Menu extends React.Component {
  state = {
    active: this.props.active,
    animateActive: this.props.active,
    animateDeactive: !this.props.active
  };

  componentDidMount () {
    if (window) {
      const {breakpoints} = this.context.nextMdTheme
      this.desktopMql = window.matchMedia(breakpoints.ml)
      this.desktopMql.addListener(this.boundForceUpdate)
    }
  }

  componentWillUnmount () {
    this.desktopMql && this.desktopMql.removeListener(this.boundForceUpdate)
  }

  // Can't animate to display: none -.-"
  componentWillReceiveProps (next) {
    clearTimeout(this.activateTimeout)

    if (!this.props.active && next.active) {
      this.setState({
        active: true,
        animateActive: false,
        animateDeactive: false
      })
      this.acivateTimeout = setTimeout(() =>
        this.setState({animateActive: true}))
    }
    if (this.props.active && !next.active) {
      this.setState({active: true, animateActive: true, animateDeactive: true})
      this.acivateTimeout = setTimeout(
        () =>
          this.setState({
            active: false,
            animateActive: false,
            animateDeactive: false
          }),
        ACTIVATE_TRANSITION_DURATION
      )
    }
  }

  boundForceUpdate = () => this.forceUpdate;

  get widthMultiple () {
    return this.desktopMql && this.desktopMql.matches ? 64 : 56
  }

  render () {
    const {g, animations, breakpoints, elevations} = this.context.nextMdTheme
    const {children, width, dense, style, active: _active, ...other} = this.props
    const {active, animateActive, animateDeactive} = this.state

    return (
      <div
        className={
          `
          menu
          ${dense && 'dense'}
          ${active && 'active'}
          ${animateActive && 'animateActive'}
          ${animateDeactive && 'animateDeactive'}
        `
        }
        style={{minWidth: width * this.widthMultiple, ...style}}
        {...other}
      >
        {React.Children.map(children, c =>
          React.cloneElement(c, {
            active: animateActive
          }))}
        <style jsx>
          {
            `
          .menu {
            display: none;

            padding: ${g(2)} 0;
            border-radius: 2px;

            background-color: white;

            ${elevations.dp8}

            ${animations.standard('opacity transform')}

            opacity: 0;
            transform: translate(5%, 5%) scale(0.9);
            overflow: hidden;
          }

          .active {
            display: block;
          }

          .animateActive {
            opacity: 1;
            transform: translate(0%, 0%) scale(1);
          }

          .animateDeactive {
            opacity: 0;
            transform: translateY(-5%) scale(1);
          }

          @media ${breakpoints.ml} {
            .dense {
              padding: ${g(1)} 0;
            }
          }
        `
          }
        </style>
      </div>
    )
  }
}

Menu.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  width: PropTypes.number,
  dense: PropTypes.bool,
  active: PropTypes.bool
}

Menu.defaultProps = {
  style: {},
  width: 2
}

Menu.contextTypes = {
  nextMdTheme: PropTypes.object
}

export default Menu
