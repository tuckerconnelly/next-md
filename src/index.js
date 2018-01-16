// NOTE Was having trouble with export {default as ...} syntax
module.exports = {
  mdColors: require('./mdColors').default,

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

  // theme
  themeLight: require('./theme/themeLight').default,
  makeStyles: require('./theme/makeStyles').default,
  ThemeProvider: require('./theme/ThemeProvider').default
}
