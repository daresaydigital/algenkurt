'use strict';

var React = require('react-native');

var {
  Text,
  View
} = React;

class MainView extends React.Component {
  render() {
    var str = 'Hej Erik!';
    return (
      <View>
        <Text>
          {str}
        </Text>
      </View>
    );
  }
}

module.exports = MainView;
