import React from 'react'
import {storiesOf} from '@storybook/react'
import {text, object} from '@storybook/addon-knobs'
import {action} from '@storybook/addon-actions'
import {withInfo} from '@storybook/addon-info'

import {IconToggle, colors} from '../../index'

storiesOf('IconToggle', module)
  .add('vanilla', withInfo()(() => (
    <IconToggle
      value={text('value', 'share')}
      iconStyle={object('iconStyle', {color: colors.black})}
      onClick={action('click')} />
  )))
