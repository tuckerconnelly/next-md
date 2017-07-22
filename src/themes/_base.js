import Color from 'color'

import colors from '../styles/colors'
import breakpoints from '../styles/breakpoints'
import elevations from '../styles/elevations'

export default theme =>
  `
  html, body, body > div:first-of-type, #__next {
    height: 100%;
    margin: 0;

    color: ${colors.textBlack};
    font-family: Roboto, sans-serif;
  }

  [data-reactroot] {
    min-height: 100%;
  }

  * {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  .display4 {
    font-size: 112px;
    font-weight: 300;
    line-height: 112px;
  }
  .display3 {
    font-size: 56px;
    line-height: 56px;
  }
  .display2 {
    font-size: 45px;
    line-height: 48px;
  }
  .display1 {
    font-size: 34px;
    line-height: 40px;
  }
  .headline {
    font-size: 24px;
    line-height: 28px;
  }
  .title {
    font-size: 20px;
    font-weight: 500;
    line-height: 32px;
  }
  .subheading {
    font-size: 16px;
    line-height: 20px;
  }
  @media ${breakpoints.ml} {
    .subheading {
      font-size: 15px;
    }
  }
  .body2 {
    font-size: 14px;
    font-weight: 500;
    line-height: 24px;
  }
  @media ${breakpoints.ml} {
    .body2 {
      font-size: 13px;
    }
  }
  .body1 {
    font-size: 14px;
    line-height: 20px;
  }
  @media ${breakpoints.ml} {
    .body1 {
      font-size: 13px;
    }
  }
  .caption {
    font-size: 12px;
    line-height: 16px;
  }
  .button {
    font-size: 14px;
    font-weight: 500;
    line-height: 16px;

    text-transform: uppercase;
  }

  .dataTable th { font-weight: 500; }


  .dp0 { ${elevations.dp0} }
  .dp2 { ${elevations.dp2} }
  .dp3 { ${elevations.dp3} }
  .dp4 { ${elevations.dp4} }
  .dp6 { ${elevations.dp6} }
  .dp8 { ${elevations.dp8} }
  .dp12 { ${elevations.dp12} }
  .dp16 { ${elevations.dp16} }
  .dp24 { ${elevations.dp24} }

  .raisedButton {
    background-color: ${theme.primary};
  }

  .raisedButton:focused {
    background-color: ${Color(theme.primary).darken(0.12).rgb().string()};
  }

  .progressIndicator.circular {
    width: 60px;
    height: 60px;
  }

  .progressIndicator.circular .path {
    stroke: ${theme.primary};
  }
`
