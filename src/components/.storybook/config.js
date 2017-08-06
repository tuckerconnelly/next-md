import {configure, addDecorator} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'

addDecorator(withKnobs)

import React from 'react'

import {themeLight} from '../../index'

const theme = {
  primary: '#7ec165',
  secondary: '#fe761f'
}

const withNextJs = storyFn =>
  <div>
    <link href='https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i' rel='stylesheet' />
    <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
    <style dangerouslySetInnerHTML={{__html: themeLight(theme)}} />
    {storyFn()}
  </div>

addDecorator(withNextJs)

function loadStories () {
  require('./DataTable')
  require('./Dropdown')
  require('./FlatButton')
  require('./IconToggle')
  require('./Menu')
  require('./ProgressIndicator')
  require('./RaisedButton')
  // require('./Ripples')
}

configure(loadStories, module)
