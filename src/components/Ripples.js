import React from 'react'
import omit from 'lodash/omit'

const Ripple = ({style, done}) => (
  <div className={done && 'done'} style={style}>
    <style jsx>
      {
        `
      div {
        position: absolute;

        opacity: 0.16;

        animation: 500ms ease-out 0s 1 forwards ripple;
        transition: opacity 300ms ease-out;
      }

      @keyframes ripple {
        0% { transform: translate(-50%, -50%) scale(0); }
        100% { transform: translate(-50%, -50%) scale(1); }
      }

      .done {
        opacity: 0;
      }
    `
      }
    </style>
  </div>
)

Ripple.propTypes = {
  style: React.PropTypes.object.isRequired,
}

class Ripples extends React.Component {
  state = {ripples: []};

  startRipple = e => {
    if (this.props.disabled) return

    const {rippleSpread, rippleCentered, rippleColor} = this.props
    const {width, height, left, top} = e.currentTarget.getBoundingClientRect()

    const x = rippleCentered ? width / 2 : e.pageX - left
    const y = rippleCentered ? height / 2 : e.pageY - top
    const size = Math.sqrt(width * width + height * height) * 2 * rippleSpread

    const newRipple = {
      style: {
        left: x,
        top: y,

        width: size,
        height: size,
        borderRadius: size / 2,

        backgroundColor: rippleColor,
      },
      done: false,
    }

    this.setState({ripples: [...this.state.ripples, newRipple]})
  };

  endRipple = () => {
    const ripples = [...this.state.ripples]
    ripples[this.state.ripples.length - 1].done = true
    this.setState({ripples})
  };

  render () {
    const {children, ...other} = this.props
    const {ripples} = this.state
    return (
      <div
        onMouseDown={this.startRipple}
        onMouseUp={this.endRipple}
        {...omit(other, Object.keys(Ripples.propTypes))}
      >
        {children}
        {ripples.map((props, i) => <Ripple {...props} key={i} />)}
        <style jsx>
          {
            `
          div {
            position: relative;

            cursor: pointer;
            overflow: hidden;
          }
        `
          }
        </style>
      </div>
    )
  }
}

Ripples.propTypes = {
  rippleColor: React.PropTypes.string,
  rippleSpread: React.PropTypes.number,
  rippleCentered: React.PropTypes.bool,
  disabled: React.PropTypes.bool,

  children: React.PropTypes.node,
}

Ripples.defaultProps = {
  rippleColor: 'black',
  rippleSpread: 1,
  rippleCentered: false,
}

export default Ripples
