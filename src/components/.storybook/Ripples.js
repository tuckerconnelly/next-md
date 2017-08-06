import React from 'react'
import {storiesOf} from '@storybook/react'
import {text, boolean, number} from '@storybook/addon-knobs'
import {action} from '@storybook/addon-actions'
import {withInfo} from '@storybook/addon-info'

import {Ripples, colors} from '../../index'

storiesOf('Ripples', module)
  .add('custom attributes', withInfo()(() => (
    <Ripples
      rippleColor={text('rippleColor', colors.green300)}
      rippleSpread={number('rippleSpread', 1.0)}
      rippleCentered={boolean('rippleCentered', false)}
      onClick={action('click')}>
      {text('text', 'Ripples')}
    </Ripples>
  )))
