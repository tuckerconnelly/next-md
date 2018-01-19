import React from 'react'
import PropTypes from 'prop-types'

const SCALE_RATIO = 1.25

class ProgressIndicator extends React.Component {
  render () {
    const {type, mode, multicolor, ...other} = this.props

    const _calculateRatio = value => {
      if (value < this.props.min) return 0
      if (value > this.props.max) return 1
      return (value - this.props.min) / (this.props.max - this.props.min)
    }

    const _circularStyle = () => {
      return this.props.mode !== 'indeterminate'
        ? {
          strokeDasharray: `${2 * Math.PI * 25 * _calculateRatio(this.props.value)}, 400`,
          stroke: this.props.color
        }
        : {
          stroke: this.props.color
        }
    }

    return (
      <div
        className={
          `progressIndicator ${type} ${mode} ${multicolor && 'multicolor'}`
        }
        {...other}
      >
        {type === 'circular'
          ? <svg className='circle' viewBox='0 0 60 60'>
            <circle
              className='path'
              style={_circularStyle()}
              cx='30'
              cy='30'
              r='25' />
          </svg>
          : 'Not implemented'}
        <style jsx>
          {
            `
            .circular {
              position: relative;

              display: inline-block;

              transform: rotate(-90deg);
            }

            .circular.indeterminate .circle {
              animation: circular-indeterminate-bar-rotate 2s linear infinite;
            }

            .circular.indeterminate .path {
              animation: circular-indeterminate-bar-dash 1.5s ease-in-out infinite;
              stroke-dasharray: ${SCALE_RATIO}px, ${SCALE_RATIO * 200}px;
              stroke-dashoffset: 0;
            }

            .circular.indeterminate.multicolor .path {
              animation:
                circular-indeterminate-bar-dash 1.5s ease-in-out infinite,
                colors calc(1.5s * 4) ease-in-out infinite;
            }

            .circle {
              height: 100%;
              width: 100%;
            }

            .path {
              fill: none;
              stroke-dasharray: 0, ${SCALE_RATIO * 200}px;
              stroke-dashoffset: 0;
              stroke-linecap: round;
              stroke-miterlimit: 20;
              stroke-width: 4;
              ${this.context.nextMdTheme.animations.standard('stroke-dasharray')}
            }

            @keyframes circular-indeterminate-bar-rotate {
              100% {
                transform: rotate(360deg);
              }
            }


            @keyframes circular-indeterminate-bar-dash {
              0% {
                stroke-dasharray: ${SCALE_RATIO}px, ${SCALE_RATIO * 200}px;
                stroke-dashoffset: ${SCALE_RATIO * 0}px;
              }

              50% {
                stroke-dasharray: ${SCALE_RATIO * 89}px, ${SCALE_RATIO * 200}px;
                stroke-dashoffset: ${SCALE_RATIO * -35}px;
              }

              100% {
                stroke-dasharray: ${SCALE_RATIO * 89}px, ${SCALE_RATIO * 200}px;
                stroke-dashoffset: ${SCALE_RATIO * -124}px;
              }
            }

            @keyframes colors {
              0% {
                stroke: #4285f4;
              }

              25% {
                stroke: #de3e35;
              }

              50% {
                stroke: #f7c223;
              }

              75% {
                stroke: #1b9a59;
              }

              100% {
                stroke: #4285f4;
              }
            }
        `
          }
        </style>
      </div>
    )
  }
}

ProgressIndicator.propTypes = {
  color: PropTypes.string,
  type: PropTypes.oneOf(['circular', 'linear']),
  mode: PropTypes.oneOf(['determinate', 'indeterminate']),
  multicolor: PropTypes.bool,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number
}

ProgressIndicator.defaultProps = {
  type: 'circular',
  mode: 'indeterminate',
  value: 0,
  min: 0,
  max: 100
}

ProgressIndicator.contextTypes = {
  nextMdTheme: PropTypes.object
}

export default ProgressIndicator
