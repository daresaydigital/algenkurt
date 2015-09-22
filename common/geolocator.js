
var React = require('react-native');
var {Text} = React;

module.exports = function (locationUpdated){
  navigator.geolocation.getCurrentPosition(
    (position) => locationUpdated(position),
    (error) => alert(error.message),
    {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
  );
}
