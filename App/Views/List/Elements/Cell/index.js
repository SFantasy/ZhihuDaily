'use strict';

var React = require('react-native');

var {
  Text,
  View,
  Image,
  TouchableHighlight
} = React;

var styles = require('./style');

module.exports = React.createClass({
  render: function () {
    return (
      <TouchableHighlight
        onPress={this.props.onSelect}
        underlayColor='white'>
        <View style={styles.cell}>
          <Text style={styles.text} numberOfLines={3}>
            {this.props.news.title}
          </Text>
          <Image style={styles.image} source={{uri:this.props.news.images[0]}} />
        </View>
      </TouchableHighlight>
    );
  }
});
