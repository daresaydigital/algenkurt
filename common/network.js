var REQUEST_URL = "http://opendata-download-metfcst.smhi.se/api/category/pmp1.5g/version/1/geopoint/lat/#position_lat/lon/#position_long/data.json";

require('react-native');

module.exports = function (position, FetchCompleted){
  var url = REQUEST_URL.replace("#position_lat", position.latitude).replace("#position_long", position.longitude);
  fetch(url)
    .then((response) => response.json())
    .then((responseData) => {
        onFetchCompleted(responseData);
    }).done();
}