'use strict';

var pFontSize = 20;
var h1FontSize = 40;

module.exports = require('react-native').StyleSheet.create({
  main_view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  p: {
    fontSize: pFontSize
  },
  error: {
    color: 'red'
  },
  h1: {
    fontSize: h1FontSize,
    fontWeight: 'bold'
  }
});
