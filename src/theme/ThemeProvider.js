import { Component, Children } from 'react'
import PropTypes from 'prop-types'

class ThemeProvider extends Component {
  getChildContext () {
    return { nextMdTheme: this.props.theme }
  }

  render () {
    return Children.only(this.props.children)
  }
}

ThemeProvider.propTypes = {
  theme: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
}

ThemeProvider.childContextTypes = {
  nextMdTheme: PropTypes.object.isRequired
}

export default ThemeProvider
