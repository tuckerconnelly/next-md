// NOTE Was having trouble with export {default as ...} syntax
module.exports = {
  // components
  DataTable: require('./components/DataTable').default,
  Divider: require('./components/Divider').default,
  IconToggle: require('./components/IconToggle').default,
  Menu: require('./components/Menu').default,
  MenuItem: require('./components/Menu').MenuItem,
  RaisedButton: require('./components/RaisedButton').default,
  Ripples: require('./components/Ripples').default,

  // styles
  animations: require('./styles/animations').default,
  breakpoints: require('./styles/breakpoints').default,
  colors: require('./styles/colors').default,
  elevations: require('./styles/elevations').default,
  g: require('./styles/g').default,

  // themes
  themeLight: require('./themes/light').default,
}
