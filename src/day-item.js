// import some code
var React = require('react-native');
var Text = React.Text;
var StyleSheet = React.StyleSheet;

// create component

var DayItem = React.createClass({

  render: function(){
    return <Text style={this.style()}>{this.props.day} {this.props.icon} {this.props.temperature}</Text>
  },

  style: function() {
    return {
    color: this.color(),
    fontWeight: this.fontWeight(),
    fontSize: this.fontSize(),
    lineHeight: this.lineHeight(),
    //backgroundColor: this.backgroundColor(),
    }
  },
  color: function(){
    var opacity = 0.1 * this.props.daysUntil;
    return 'rgba(0,0,0,'+ opacity +')';
  },
  fontWeight: function(){
    var weight = 7 - this.props.daysUntil;
    return weight*100;
  },
  fontSize: function() {
    return 7 * this.props.daysUntil;
  },
  lineHeight: function() {
    return 20 * this.props.daysUntil;
  },
  backgroundColor: function() {
    return 'red';
  },
});
// make this code available elsewhere
module.exports = DayItem;
