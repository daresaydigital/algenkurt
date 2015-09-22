/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var MainView = require('./common/main-view');

var {
  AppRegistry
} = React;

var algenkurt = React.createClass({
  render() {
    return <MainView />;
  }
});

AppRegistry.registerComponent('algenkurt', () => algenkurt);
