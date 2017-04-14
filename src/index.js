// NOTE Was having trouble with export {default as ...} syntax
module.exports = {
  // components
  Ripples: require('./components/Ripples').default,
  IconToggle: require('./components/IconToggle').default,
  RaisedButton: require('./components/RaisedButton').default,

  // styles
  animations: require('./styles/animations').default,
  elevations: require('./styles/elevations').default,
  breakpoints: require('./styles/breakpoints').default,
  colors: require('./styles/colors').default,

  // themes
  themeLight: require('./themes/light').default,
}
