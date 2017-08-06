import React from 'react'
import {storiesOf} from '@storybook/react'
import {boolean} from '@storybook/addon-knobs'
import {action} from '@storybook/addon-actions'
import {withInfo} from '@storybook/addon-info'

import {Menu, MenuItem} from '../../index'

storiesOf('Menu', module)
  .add('vanilla', withInfo()(() => (
    <Menu active={boolean('active', true)}>
      <MenuItem value={1} onClick={action('click')}>One</MenuItem>
      <MenuItem value={2} onClick={action('click')}>Two</MenuItem>
      <MenuItem value={3} onClick={action('click')}>Three</MenuItem>
    </Menu>
  )))
