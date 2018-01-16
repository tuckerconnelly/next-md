import kebabCase from 'lodash/kebabCase'
import merge from 'lodash/merge'

import themeConfigLight from './themeConfigLight'

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

export default function makeStyles (themeConfig = {}) {
  const _themeConfig = merge(themeConfigLight, themeConfig)

  return {
    animations: {
      standard: makeAnimationFn(_themeConfig.animations.standard),
      large: makeAnimationFn(_themeConfig.animations.large),
      entrance: makeAnimationFn(_themeConfig.animations.entrance),
      exit: makeAnimationFn(_themeConfig.animations.exit),
      tempExit: makeAnimationFn(_themeConfig.animations.tempExit)
    },
    breakpoints: {
      xs: `(${_themeConfig.breakpoints.xs})`,
      sm: `(${_themeConfig.breakpoints.sm})`, // Mobile landscape
      ms: `(${_themeConfig.breakpoints.ms})`,
      md: `(${_themeConfig.breakpoints.md})`, // Tablet
      ml: `(${_themeConfig.breakpoints.ml})`, // Desktop
      lg: `(${_themeConfig.breakpoints.lg})`,
      xl: `(${_themeConfig.breakpoints.xl})`
    },
    colors: _themeConfig.colors,
    elevations: {
      dp0: makeCss(_themeConfig.elevations.dp0),
      dp2: makeCss(_themeConfig.elevations.dp2),
      dp3: makeCss(_themeConfig.elevations.dp3),
      dp4: makeCss(_themeConfig.elevations.dp4),
      dp6: makeCss(_themeConfig.elevations.dp6),
      dp8: makeCss(_themeConfig.elevations.dp8),
      dp12: makeCss(_themeConfig.elevations.dp12),
      dp16: makeCss(_themeConfig.elevations.dp16),
      dp24: makeCss(_themeConfig.elevations.dp24)
    },
    g: units => `${units * _themeConfig.g}px`,
    type: {
      display4: makeCss(_themeConfig.type.display4),
      display3: makeCss(_themeConfig.type.display3),
      display2: makeCss(_themeConfig.type.display2),
      display1: makeCss(_themeConfig.type.display1),
      headline: makeCss(_themeConfig.type.headline),
      title: makeCss(_themeConfig.type.title),
      subheading: `
       ${makeCss(_themeConfig.type.subheading)}
       @media (${_themeConfig.breakpoints.ml}) {
         ${makeCss(_themeConfig.type.subheadingDesktop)}
       }
    `,
      body2: `
       ${makeCss(_themeConfig.type.body2)}
       @media (${_themeConfig.breakpoints.ml}) {
         ${makeCss(_themeConfig.type.body2Desktop)}
       }
    `,
      body1: `
       ${makeCss(_themeConfig.type.body1)}
       @media (${_themeConfig.breakpoints.ml}) {
         ${makeCss(_themeConfig.type.body2Desktop)}
       }
    `,
      caption: makeCss(_themeConfig.type.caption)
    }
  }
}
