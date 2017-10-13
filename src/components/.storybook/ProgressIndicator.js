import React from 'react'
import {storiesOf} from '@storybook/react'
import {text, number} from '@storybook/addon-knobs'
import {withInfo} from '@storybook/addon-info'

import {ProgressIndicator, colors} from '../../index'

const initialState = {
  progress: 0,
}

class DeterminateCircularDemo extends React.Component {
  state = initialState

  componentDidMount () {
    this.simulateProgress()
  }

  simulateProgress () {
    setTimeout(() => {
      if (this.state.progress < 100) {
        this.increaseProgress()
        if (this.state.progress > this.state.buffer) this.increaseBuffer()
      } else {
        this.setState(initialState)
      }
      this.simulateProgress()
    }, (Math.random() * 1 + 1) * 1000)
  }

  increaseProgress () {
    this.setState({
      progress: Math.random() * 30 + this.state.progress
    })
  }

  increaseBuffer () {
    this.setState({
      buffer: Math.random() * (100 - this.state.progress) + this.state.progress
    })
  }

  render () {
    return (
      <ProgressIndicator mode='determinate' value={this.state.progress} color={this.props.color}/>
    )
  }
}

storiesOf('ProgressIndicator', module)
  .add('vanilla', withInfo()(() => (
    <ProgressIndicator
      type='circular'
      mode='indeterminate'
      color={text('color', colors.lightBlue300)} />
  )))
  .add('circular determinate', withInfo()(() => (
    <div>
      <ProgressIndicator mode='determinate' value={number('value', 25)} color={text('color', colors.lightBlue300)}/>
      <DeterminateCircularDemo color={text('color', colors.lightBlue300)} />
    </div>
  )))
