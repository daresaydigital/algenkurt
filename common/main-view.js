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
    return (
      <View style={style.main_view}>
        <Text style={style.h1}>Älgens väder</Text>
        <Text>{this.state.long}° - {this.state.lat}°</Text>
        <Text style={style.p}>Temperature: {this.state.t}°C</Text>
        <Text style={style.p}>Wind: {this.state.ws} m/s {this.state.wd}°</Text>
        <Text style={style.p}>Visibility: {this.state.vis} km</Text>
      </View>
    );
  }

  updateWeatherData(weatherData) {
    var first = weatherData.timeseries[0];
    this.setState(first);
  }

  componentDidMount() {
    getLocation((position) => {
      this.setState({
        long: position.coords.longitude,
        lat: position.coords.latitude
      });
      getWeatherData(position, (weatherData) => {
        this.updateWeatherData(weatherData);
        // this.setState({weatherData});
      });
    });
  }
}

module.exports = MainView;
