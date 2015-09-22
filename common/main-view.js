'use strict';

var React = require('react-native');
var style = require('./style');
var {
  Text,
  View
} = React;

class MainView extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  render() {
    var header = 'Älgens väder';
    var location = 'Unknown location';
    var locationStyle = [style.p, style.error];
    return (
      <View style={style.main_view}>
        <Text style={style.h1}>{header}</Text>
        <Text style={locationStyle}>{location}</Text>
      </View>
    );
  }
}

module.exports = MainView;
