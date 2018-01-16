import React from 'react'
import PropTypes from 'prop-types'

import MD_COLORS from '../MD_COLORS'
import Ripples from './Ripples'
import Menu from './Menu'

class Dropdown extends React.Component {
  componentDidMount () {
    if (window) {
      const {breakpoints} = this.context.nextMdTheme
      this.desktopMql = window.matchMedia(breakpoints.ml)
      this.desktopMql.addListener(this.boundForceUpdate)

      document.addEventListener('mouseup', this.deactivate)
    }
  }

  componentWillUnmount () {
    if (window) {
      this.desktopMql.removeListener(this.boundForceUpdate)

      document.removeEventListener('mouseup', this.deactivate)
    }
  }

  boundForceUpdate = () => this.forceUpdate;

  get widthMultiple () {
    return this.desktopMql && this.desktopMql.matches ? 64 : 56
  }

  state = {active: false};

  get valueToText () {
    return React.Children.toArray(this.props.children).reduce((prev, curr) => ({
      ...prev,
      [curr.props.value]: curr.props.children
    }), {})
  }

  activate = () => this.setState({active: true});
  deactivate = () => this.setState({active: false});

  render () {
    const {width, value, style, children} = this.props
    const {g} = this.context.nextMdTheme

    return (
      <div
        className='dropdown'
        style={{minWidth: width * this.widthMultiple, ...style}}
      >
        <Ripples onClick={this.activate}>
          <div className='value'>
            {value && this.valueToText[value]}
            <span className='material-icons dropdownArrow'>
              arrow_drop_down
            </span>
          </div>
        </Ripples>
        <Menu
          style={{
            position: 'absolute',
            // TODO Move up to line up selected MenuItem with .value
            top: 0,

            width: '100%'
          }}
          active={this.state.active}
        >
          {React.Children.map(children, c =>
            React.cloneElement(c, {
              onClick: () => this.props.onChange(c.props.value),
              selected: value === c.props.value
            }))}
        </Menu>
        <style jsx>
          {
            `
          .dropdown {
            position: relative;

            z-index: 800;
          }

          .value {
            box-sizing: border-box;

            height: ${g(10)};
            padding: ${g(3)} 0 ${g(2)};
            border-bottom: 1px solid ${MD_COLORS.grey200};
            border-radius: 2px;
          }

          .dropdownArrow {
            position: absolute;
            top: ${g(2)};
            right: ${g(1)};

            color: ${MD_COLORS.grey400};
          }
        `
          }
        </style>
      </div>
    )
  }
}

Dropdown.propTypes = {
  width: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
  children: PropTypes.node,
  onChange: PropTypes.func
}

Dropdown.defaultProps = {
  style: {},
  width: 2,
  onChange: () => 0
}

Dropdown.contextTypes = {
  nextMdTheme: PropTypes.object
}

export default Dropdown
