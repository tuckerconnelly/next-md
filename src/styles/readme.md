# Styles

## animations

Add css transitions to your styled-jsx:

```js
import {animations} from 'next-md'

const MyComponent = () =>
  <div>
    <style jsx>{`
      /* Width and height will animate to 200px using Material Design's standard animation */
      div {
        width: 100px;
        height: 100px;

        ${animations.standard('height width')}
      }

      div:hover {
        width: 200px;
        height: 200px;
      }
    `}</style>
  </div>
```

All the Material Design [animations](https://material.io/guidelines/motion/duration-easing.html) are available:

- `animations.standard(properties)` for standard transitions
- `animations.large(properties)` for large transitions
- `animations.entrance(properties)` for entrances
- `animations.exit(properties)` for exits
- `animations.tempExit(properties)` for temporary exits


## breakpoints

Use consistent mobile-first breakpoints:

```js
import {breakpoints} from 'next-md'

const MyResponsiveComponent = () =>
  <div>
    <style jsx>{`
      div {
        width: 100px;
      }

      /* breakpoints.sm activates when the window is 600px wide */
      @media ${breakpoints.sm} {
        div {
          width: 200px;
        }
      }
    `}</style>
  </div>
```

You can use the follow Material Design [breakpoints](https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints):

- breakpoints.xs: (min-width: 480px)
- breakpoints.sm: (min-width: 600px) - Mobile landscape
- breakpoints.ms: (min-width: 840px)
- breakpoints.md: (min-width: 960px) - Tablet
- breakpoints.ml: (min-width: 1280px) - Desktop
- breakpoints.lg: (min-width: 1440px)
- breakpoints.xl: (min-width: 1600px)

## colors

You can use any of the Material Design [colors](https://material.io/guidelines/style/color.html#color-color-palette):

```js
import {colors} from 'next-md'

const MyColorfulComponent = () =>
  <div>
    <style jsx>{`
      div {
        background-color: ${colors.red400};

        color: ${colors.blue200};
      }
    `}</style>
  </div>
```

## elevations

Add shadows to your components:

```js
// Has an elevation of 2
const MyComponent = () => <div className='dp2' />

// Has an elevation of 16
const MyHighComponent = () => <div className='dp16' />
```

## grid

Enforce a 4px grid to keep your vertical and horizontal rhythm by using the `g()`` function:

```js
import {g} from 'next-md'

const MyComponent = () =>
  <div>
    <style jsx>{`
      div {
        /* Width of 120px */
        width: ${g(30)};
      }
    `}</style>
  </div>
```
