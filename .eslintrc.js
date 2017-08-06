module.exports = {
  extends: ['standard', 'standard-react'],
  parser: 'babel-eslint',
  plugins: ['standard', 'promise'],
  rules: {
    'react/react-in-jsx-scope': 0
  },
  globals: {
    React: false
  },
}
