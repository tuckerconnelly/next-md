import React from 'react'
import {storiesOf} from '@storybook/react'
import {boolean} from '@storybook/addon-knobs'
import {action} from '@storybook/addon-actions'
import {withInfo} from '@storybook/addon-info'

import {Switch} from '../../index'

storiesOf('Switch', module)
  .add('vanilla', withInfo()(() => (
    <Switch
      checked={boolean('checked')}
      disabled={boolean('disabled', false)}
      onChange={action('change')} />
  )))
