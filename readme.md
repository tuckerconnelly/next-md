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

### [styles](https://github.com/next-md/next-md/tree/master/src/styles)

### [components](https://github.com/next-md/next-md/tree/master/src/components)
