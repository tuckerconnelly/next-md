import {configure, addDecorator} from '@storybook/react'
import {withKnobs} from '@storybook/addon-knobs'

addDecorator(withKnobs)

import React from 'react'

import {themeLight, g} from '../../index'

const theme = {
  primary: '#7ec165',
  secondary: '#fe761f'
}

const withNextJs = storyFn =>
  <div>
    <link href='https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i' rel='stylesheet' />
    <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
    <style dangerouslySetInnerHTML={{__html: themeLight(theme)}} />
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      padding: `${g(12)} ${g(2)}`
    }}>
      {storyFn()}
    </div>
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
  require('./Ripples')
  require('./Switch')
}

configure(loadStories, module)
