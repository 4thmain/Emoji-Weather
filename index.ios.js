var React = require('react-native');
var Moment = require('moment');
var DayItem = require('./src/day-item')
var fetchWeather = require('./src/api');
var weatherIcon = require('./src/icons');

var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;



// Create a react component
var weekdays = React.createClass({
  render:  function() {
    return  <View style={Layout.container}>
            <Text style={Layout.title}>📍Toronto, Ontario</Text>
               {this.days()}
            </View>
  },
  days: function() {
    var daysItems = [];
    for (var i=7; i>=0  ; i--) {
      var day = Moment().add(7-i,'days').format('ddd');
      var icon_array = ['⛅❄','☀❄','⛅','⛅❄','☁ ❄','☁❄','⛅']
      var icon = icon_array[7-i]
      var temperature_array = ["-6°c","-6°c","-5°c","-6°c","-5°c","-4°c","-4°c"]
      var temperature = temperature_array[7-i]

      daysItems.push(
        <DayItem day = {day} daysUntil ={i} icon={icon} temperature={temperature}/>
        )
    }
    return daysItems
  }
});

// Style the react component
var Layout = StyleSheet.create({
  container: {
    flex: 0,
    //flexDirection:'row',
    //justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    marginTop: 80,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
});

// Show the react component on the screen
AppRegistry.registerComponent('weekdays',function() {
  return weekdays
});
