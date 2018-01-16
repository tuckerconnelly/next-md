# next-md

next-md is a minimalistic ui library _inspired by_ Material Design for [next.js](https://github.com/zeit/next.js)

## How to use

### Setup

`npm i next-md`

create a `theme.js` in your project root:

```js
import {makeTheme} from 'next-md'

export default makeTheme({
  colors: {
    primary: '#7ec165',
    secondary: '#fe761f'
  }
})

export default theme
```

create a [`./pages/_document.js`](https://github.com/zeit/next.js#custom-document) with the Roboto fonts:

```js
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
  static getInitialProps

  render () {
    return (
     <html>
       <Head>
       <link href='https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i' rel='stylesheet' />
       <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />
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

MyDocument.getInitialProps = ({ renderPage }) => {
  const {html, head, errorHtml, chunks} = renderPage()
  const styles = flush()
  return { html, head, errorHtml, chunks, styles }
}

export default MyDocument
```

add a `ThemeProvider` over your pages:

pages/index.js

```
import theme from '../theme'

export default () =>
  <ThemeProvider theme={theme}>
    <div>
      {/* ... */}
    </div>
  </ThemeProvider>

```

## Styles

your `theme` has a bunch of useful styled-jsx snippets and functions in it

### animations

add css transitions to your styled-jsx by importing `animations`:

```js
import {animations} from '../theme'

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

the Material Design [animations](https://material.io/guidelines/motion/duration-easing.html) have been condensed to:

- `animations.standard(properties)` for standard transitions
- `animations.large(properties)` for large transitions
- `animations.entrance(properties)` for entrances
- `animations.exit(properties)` for exits
- `animations.tempExit(properties)` for temporary exits


### breakpoints

use the recommended Material Design breakpoints by importing `breakpoints`:

```js
import {breakpoints} from '../theme'

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

you can use the follow Material Design [breakpoints](https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints):

- breakpoints.xs: (min-width: 480px)
- breakpoints.sm: (min-width: 600px) - Mobile landscape
- breakpoints.ms: (min-width: 840px)
- breakpoints.md: (min-width: 960px) - Tablet
- breakpoints.ml: (min-width: 1280px) - Desktop
- breakpoints.lg: (min-width: 1440px)
- breakpoints.xl: (min-width: 1600px)

### colors

you can use any of the Material Design [colors](https://material.io/guidelines/style/color.html#color-color-palette) by importing `colors`. Your theme colors will also be on this object:

```js
import {colors} from '../theme'

const MyColorfulComponent = () =>
  <div>
    <style jsx>{`
      div {
        background-color: ${colors.red400};

        color: ${colors.blue200};

        border-color: ${colors.primary};
      }
    `}</style>
  </div>
```

### elevations

add shadows to your components by importing `elevations`.

```js
import {elevations} from '../theme'

// Has an elevation of 2
const MyComponent = () => <div>
  <style jsx>{`
    div {
      ${elevations.dp2}
    }
  `}</style>
</div>

// Has an elevation of 16
const MyComponent = () => <div>
  <style jsx>{`
    div {
      ${elevations.dp16}
    }
  `}</style>
</div>
```

### grid

keep your elements on Material Design's 4px grid by using the `g()` function:

```js
import {g} from '../theme'

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
