module.exports = {
  extends: ['standard', 'standard-react'],
  parser: 'babel-eslint',
  plugins: ['standard', 'promise'],
  rules: {
    'comma-dangle': ['error', 'always-multiline'],

    'react/react-in-jsx-scope': 0,
  },
  globals: {
    React: false,
  },
}
