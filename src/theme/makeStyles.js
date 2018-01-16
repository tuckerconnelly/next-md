import kebabCase from 'lodash/kebabCase'
import merge from 'lodash/merge'

import themeLight from './themeLight'

const makeAnimationFn = animation =>
  properties =>
    `
    transition: ${properties
    .split(' ')
    .map(p => `${p} ${animation.transitionDuration} ${animation.transitionTimingFunction}`)
    .join(', ')};
  `

function makeCss (cssInJsObject) {
  return Object.keys(cssInJsObject).reduce((css, currentProperty) =>
    `${css}
${kebabCase(currentProperty)}: ${cssInJsObject[currentProperty]};`, ''
  )
}

export default function makeStyles (theme = {}) {
  const _theme = merge(themeLight, theme)

  return {
    animations: {
      standard: makeAnimationFn(_theme.animations.standard),
      large: makeAnimationFn(_theme.animations.large),
      entrance: makeAnimationFn(_theme.animations.entrance),
      exit: makeAnimationFn(_theme.animations.exit),
      tempExit: makeAnimationFn(_theme.animations.tempExit)
    },
    breakpoints: {
      xs: `(${_theme.breakpoints.xs})`,
      sm: `(${_theme.breakpoints.sm})`, // Mobile landscape
      ms: `(${_theme.breakpoints.ms})`,
      md: `(${_theme.breakpoints.md})`, // Tablet
      ml: `(${_theme.breakpoints.ml})`, // Desktop
      lg: `(${_theme.breakpoints.lg})`,
      xl: `(${_theme.breakpoints.xl})`
    },
    colors: _theme.colors,
    elevations: {
      dp0: makeCss(_theme.elevations.dp0),
      dp2: makeCss(_theme.elevations.dp2),
      dp3: makeCss(_theme.elevations.dp3),
      dp4: makeCss(_theme.elevations.dp4),
      dp6: makeCss(_theme.elevations.dp6),
      dp8: makeCss(_theme.elevations.dp8),
      dp12: makeCss(_theme.elevations.dp12),
      dp16: makeCss(_theme.elevations.dp16),
      dp24: makeCss(_theme.elevations.dp24)
    },
    g: units => `${units * _theme.g}px`,
    type: {
      display4: makeCss(_theme.type.display4),
      display3: makeCss(_theme.type.display3),
      display2: makeCss(_theme.type.display2),
      display1: makeCss(_theme.type.display1),
      headline: makeCss(_theme.type.headline),
      title: makeCss(_theme.type.title),
      subheading: `
       ${makeCss(_theme.type.subheading)}
       @media (${_theme.breakpoints.ml}) {
         ${makeCss(_theme.type.subheadingDesktop)}
       }
    `,
      body2: `
       ${makeCss(_theme.type.body2)}
       @media (${_theme.breakpoints.ml}) {
         ${makeCss(_theme.type.body2Desktop)}
       }
    `,
      body1: `
       ${makeCss(_theme.type.body1)}
       @media (${_theme.breakpoints.ml}) {
         ${makeCss(_theme.type.body2Desktop)}
       }
    `,
      caption: makeCss(_theme.type.caption)
    }
  }
}
