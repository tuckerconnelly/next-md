import React from 'react'
import {storiesOf} from '@storybook/react'
import {text, boolean, object} from '@storybook/addon-knobs'
import {action} from '@storybook/addon-actions'
import {withInfo} from '@storybook/addon-info'

import {RaisedButton, colors} from '../../index'

storiesOf('RaisedButton', module)
  .add('vanilla', withInfo()(() => (
    <RaisedButton
      textStyle={object('textStyle', {
        color: colors.textWhite,
        fontWeight: 500,
        textTransform: 'uppercase'
      })}
      rippleColor={text('rippleColor', colors.white)}
      disabled={boolean('disabled', false)}
      onClick={action('click')}>
      {text('text', 'Raised button')}
    </RaisedButton>
  )))
