import breakpoints from './breakpoints'

const makeAnimationFn = (durations, timing) => (selector, properties, delay = '0ms') => `
  ${selector} {
    transition: ${properties.split(' ')
      .map(p => `${p} ${durations[0]} ${timing} ${delay}`)
      .join(', ')
    };
  }

  ${breakpoints.md} {
    ${selector} {
      transition-duration: ${properties.split(' ')
        .map(p => `${p} ${durations[1]}`)
        .join(', ')
      };
    }
  }

  ${breakpoints.ml} {
    ${selector} {
      transition-duration: ${properties.split(' ')
        .map(p => `${p} ${durations[2]}`)
        .join(', ')
      };
    }
  }
`

export default {
  standard: makeAnimationFn(['300ms', '330ms', '180ms'], 'cubic-bezier(0.4, 0, 0.2, 1)'),
  large: makeAnimationFn(['375ms', '488ms', '200ms'], 'cubic-bezier(0.4, 0, 0.2, 1)'),
  entrance: makeAnimationFn(['225ms', '293ms', '159ms'], 'cubic-bezier(0, 0, 0.2, 1)'),
  exit: makeAnimationFn(['195ms', '254ms', '150ms'], 'cubic-bezier(0.4, 0, 1, 1)'),
  tempExit: makeAnimationFn(['195ms', '254ms', '150ms'], 'cubic-bezier(0.4, 0, 0.6, 1)'),
}
