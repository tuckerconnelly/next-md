import React from 'react'
import {storiesOf} from '@storybook/react'
import {text, boolean, object} from '@storybook/addon-knobs'
import {action} from '@storybook/addon-actions'
import {withInfo} from '@storybook/addon-info'

import {FlatButton, colors} from '../../index'

storiesOf('FlatButton', module)
  .add('vanilla', withInfo()(() => (
    <FlatButton
      textStyle={object('textStyle', {
        color: colors.black,
        fontWeight: 500,
        textTransform: 'uppercase'
      })}
      rippleColor={text('rippleColor', colors.black)}
      disabled={boolean('disabled', false)}
      onClick={action('click')}>
      {text('text', 'Flat button')}
    </FlatButton>
  )))
