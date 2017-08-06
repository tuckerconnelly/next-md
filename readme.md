# next-md

next-md is a minimalistic Material Design library for [next.js](https://github.com/zeit/next.js)

## How to use

### Setup

Install it:

`npm i next-md`

Create a `theme.js` in your project root:

```js
export default {
  primary: '#7ec165',
  secondary: '#fe761f'
}
```

Create a [`./pages/_document.js`](https://github.com/zeit/next.js#custom-document) with the Roboto fonts, the css for your theme, and any custom global styles you want:

```js
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import {themeLight} from 'next-md'

import theme from '../theme'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const {html, head, errorHtml, chunks} = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }

  render () {
    return (
     <html>
       <Head>
       <link href='https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i' rel='stylesheet' />
       <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
         <style dangerouslySetInnerHTML={{__html: themeLight(theme)}} />
         <style dangerouslySetInnerHTML={{__html: `
           /* Custom cascading styles! */
           .body1 { font-weight: 300; }
           .caption { font-weight: 300; }
          `}} />
       </Head>
       <body className="custom_class">
         {this.props.customValue}
         <Main />
         <NextScript />
       </body>
     </html>
    )
  }
}
```

## Styles

### animations

Add css transitions to your styled-jsx by importing `animations`:

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

The Material Design [animations](https://material.io/guidelines/motion/duration-easing.html) have been condensed to:

- `animations.standard(properties)` for standard transitions
- `animations.large(properties)` for large transitions
- `animations.entrance(properties)` for entrances
- `animations.exit(properties)` for exits
- `animations.tempExit(properties)` for temporary exits


### breakpoints

Use the recommended Material Design breakpoints by importing `breakpoints`:

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

### colors

You can use any of the Material Design [colors](https://material.io/guidelines/style/color.html#color-color-palette) by importing `colors`:

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

### elevations

Add shadows to your components simply by adding a `className='dp#'`:

```js
// Has an elevation of 2
const MyComponent = () => <div className='dp2' />

// Has an elevation of 16
const MyHighComponent = () => <div className='dp16' />
```

### grid

Keep your elements on Material Design's 4px grid by using the `g()` function:

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

## [components storybook](https://next-md.now.sh)
