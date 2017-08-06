import React from 'react'
import PropTypes from 'prop-types'
import omit from 'lodash/omit'

const RIPPLE_FADE_OUT_DURATION = 300

// export default () => <Pecks><Ripples /></Pecks>
const Ripple = ({style, done, ...other}) => (
  <div className={done && 'done'} style={style} {...other}>
    <style jsx>
      {
        `
      div {
        position: absolute;

        opacity: 0.16;

        animation: 500ms ease-out 0s 1 forwards ripple;
        transition: opacity ${RIPPLE_FADE_OUT_DURATION}ms ease-out;

        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
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
  done: PropTypes.bool,

  style: PropTypes.object.isRequired
}

class Ripples extends React.Component {
  state = {ripples: []};

  componentDidMount () {
    // Adding mouseup to document instead of element because mouseup doesn't get
    // fired if you mouse down, move cursor off, and then mouse up
    document.addEventListener('mouseup', this.endRipple)
  }

  componentWillUnmount () {
    document.removeEventListener('mouseup', this.endRipple)
  }

  _rid = 0;

  startRipple = e => {
    if (this.props.disabled) return

    const {rippleSpread, rippleCentered, rippleColor} = this.props
    const {width, height, left, top} = e.currentTarget.getBoundingClientRect()

    const x = rippleCentered ? width / 2 : e.clientX - left
    const y = rippleCentered ? height / 2 : e.clientY - top
    const size = Math.sqrt(width * width + height * height) * 2 * rippleSpread

    const newRipple = {
      rid: this._rid,
      style: {
        left: x,
        top: y,

        width: size,
        height: size,
        borderRadius: size / 2,

        backgroundColor: rippleColor
      },
      done: false
    }

    this.setState({ripples: [...this.state.ripples, newRipple]})

    this._rid += 1
  };

  endRipple = () => {
    if (!this.state.ripples.length) return

    const ripples = [...this.state.ripples]
    ripples[ripples.length - 1].done = true
    this.setState({ripples})
    setTimeout(this.deleteRipple, RIPPLE_FADE_OUT_DURATION)
  };

  deleteRipple = id => {
    const ripples = [...this.state.ripples]
    ripples.splice(0, 1)
    this.setState({ripples})
  };

  render () {
    const {disabled, children, ...other} = this.props
    const {ripples} = this.state
    return (
      <div
        onMouseDown={this.startRipple}
        className={`${disabled && 'disabled'}`}
        {...omit(other, Object.keys(Ripples.propTypes || {}))}
      >
        {children}
        {ripples.map((props, i) => (
          <Ripple {...omit(props, 'rid')} key={props.rid} />
        ))}
        <style jsx>
          {
            `
          div {
            position: relative;

            width: 100%;
            height: 100%;

            cursor: pointer;
            overflow: hidden;

            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }

          .disabled {
            cursor: default;
          }
        `
          }
        </style>
      </div>
    )
  }
}

Ripples.propTypes = {
  rippleColor: PropTypes.string,
  rippleSpread: PropTypes.number,
  rippleCentered: PropTypes.bool,
  disabled: PropTypes.bool,

  children: PropTypes.node
}

Ripples.defaultProps = {
  rippleColor: 'black',
  rippleSpread: 1,
  rippleCentered: false
}

export default Ripples
