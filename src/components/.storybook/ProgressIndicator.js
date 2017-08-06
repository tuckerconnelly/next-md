import React from 'react'
import {storiesOf} from '@storybook/react'
import {text} from '@storybook/addon-knobs'
import {withInfo} from '@storybook/addon-info'

import {ProgressIndicator, colors} from '../../index'

storiesOf('ProgressIndicator', module)
  .add('vanilla', withInfo()(() => (
    <ProgressIndicator
      type='circular'
      mode='indeterminate'
      color={text('color', colors.lightBlue300)} />
  )))
