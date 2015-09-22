'use strict';

var React = require('react-native');

var getLocation = require('./geolocator');
var getWeatherData = require('./network');
var style = require('./style');

var {
  Text,
  View
} = React;

class MainView extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      weatherData: null
    };
  }

  render() {
    var header = 'Älgens väder';
    var location = 'Unknown location';
    var locationStyle = [style.p, style.error];
    return (
      <View style={style.main_view}>
        <Text style={style.h1}>{header}</Text>
        <Text style={locationStyle}>{location}</Text>
        <Text>{JSON.stringify(this.state.weatherData)}</Text>
      </View>
    );
  }

  componentDidMount(){
    getLocation(() =>
      getWeatherData((weatherData) => this.setState({weatherData})));
  }
}

module.exports = MainView;
