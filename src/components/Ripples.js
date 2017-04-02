import React from 'react'

export default class Ripples extends React.Component {
  render() {
    const { children } = this.props
    return (
      <div>
        {children}
      </div>
    )
  }
}
