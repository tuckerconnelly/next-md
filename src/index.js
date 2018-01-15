// NOTE Was having trouble with export {default as ...} syntax
module.exports = {
  // components
  DataTable: require('./components/DataTable').default,
  Dialog: require('./components/Dialog').default,
  Divider: require('./components/Divider').default,
  Dropdown: require('./components/Dropdown').default,
  FormError: require('./components/FormError').default,
  IconToggle: require('./components/IconToggle').default,
  Menu: require('./components/Menu').default,
  MenuItem: require('./components/Menu').MenuItem,
  RaisedButton: require('./components/RaisedButton').default,
  FlatButton: require('./components/FlatButton').default,
  Ripples: require('./components/Ripples').default,
  ProgressIndicator: require('./components/ProgressIndicator').default,
  Switch: require('./components/Switch').default,
  TextField: require('./components/TextField').default,

  // styles
  animations: require('./styles/animations').default,
  breakpoints: require('./styles/breakpoints').default,
  colors: require('./styles/colors').default,
  elevations: require('./styles/elevations').default,
  g: require('./styles/g').default,
  type: require('./styles/type').default,

  // themes
  themeLight: require('./themes/light').default
}
