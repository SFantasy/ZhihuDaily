'use strict';

var React = require('react-native');

var {
  Text,
  View,
  TouchableHighlight
} = React;

var styles = require('./style');

module.exports = React.createClass({
  render: function () {
    return (
      <TouchableHighlight onPress={this.props.onSelect}>
        <View>
          <Text>
            {this.props.news.title}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
});
