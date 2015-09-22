'use strict';

var React = require('react-native');

var getLocation = require('./geolocator');
var getWeatherData = require('./network');

var {
  Text,
  View,
  Store
} = React;

class MainView extends React.Component {

  constructor(){
    super();
    this.state = {
      weatherData: null
    };
  }

  render() {
    return (
      <View>
        <Text>
          {JSON.stringify(this.state.weatherData)}
        </Text>
      </View>
    );
  }

  componentDidMount(){
    getLocation((position) =>
      getWeatherData(position, ((weatherData) => this.setState({weatherData}))));
  }
}

module.exports = MainView;
