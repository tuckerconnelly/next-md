import React from 'react'
import {storiesOf} from '@storybook/react'
import {number} from '@storybook/addon-knobs'
import {action} from '@storybook/addon-actions'
import {withInfo} from '@storybook/addon-info'

import {Dropdown, MenuItem} from '../../index'

storiesOf('Dropdown', module)
  .add('vanilla', withInfo()(() => (
    <Dropdown value={number('value', 1)} onChange={action('change')}>
      <MenuItem key='one' value={1}>One</MenuItem>
      <MenuItem key='two' value={2}>Two</MenuItem>
      <MenuItem key='three' value={3}>Three</MenuItem>
    </Dropdown>
  )))
