import Color from 'color'

import colors from '../styles/colors'
import breakpoints from '../styles/breakpoints'
import elevations from '../styles/elevations'
import type from '../styles/type'

export default theme =>
  `
  html, body, body > div:first-of-type {
    height: 100%;
    margin: 0;

    color: ${colors.textBlack};
    font-family: Roboto, sans-serif;
  }

  * {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }

  .display4 { ${type.display4} }
  .display3 { ${type.display3} }
  .display2 { ${type.display2} }
  .display1 { ${type.display1} }
  .headline { ${type.headline} }
  .title { ${type.title} }
  .subheading { ${type.subheading} }
  @media ${breakpoints.ml} {
    .subheading { ${type.subheadingDesktop} }
  }
  .body2 { ${type.body2} }
  @media ${breakpoints.ml} {
    .body2 { ${type.body2Desktop} }
  }
  .body1 { ${type.body1} }
  @media ${breakpoints.ml} {
    .body1 { ${type.body1Desktop}}
  }
  .caption { ${type.caption} }
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
    background-color: ${theme.colors.primary};
  }

  .raisedButton:focused {
    background-color: ${Color(theme.colors.primary).darken(0.12).rgb().string()};
  }

  .progressIndicator.circular {
    width: 60px;
    height: 60px;
  }

  .progressIndicator.circular .path {
    stroke: ${theme.colors.primary};
  }

  .ripple {
    background-color: white;
  }

  .switch .track {
    background-color: rgba(0, 0, 0, 0.26);
  }

  .switch .thumb {
    background-color: white;
  }

  .switch .thumb .ripple {
    background-color: ${theme.colors.primary};
  }

  .switch.checked .track {
    background-color: ${Color(theme.colors.primary).alpha(0.5).rgb().string()};
  }

  .switch.checked .thumb {
    background-color: ${theme.colors.primary};
  }
`
