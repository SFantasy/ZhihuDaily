'use strict';

var React = require('react-native');
var HTMLView = require('react-native-htmlview');

var {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet
} = React;

var api = require('../../Config/api');
var styles = require('./style');

module.exports = React.createClass({

  getInitialState: function () {
    return {
      loaded: false
    }
  },

  componentDidMount: function () {
    this.fetchData();
  },

  fetchData: function () {
    fetch(api.detail + this.props.id)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          loaded: true,
          data: responseData
        });
      }).done();
  },

  render: function () {
    if (!this.state.loaded) {
      return (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>载入中...</Text>
        </View>
      );
    }

    var data = this.state.data;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.image} source={{ uri: data.image }} />
          <Text style={styles.title}>{data.title}</Text>
          <Text style={styles.imageSource}>图片：{data.image_source}</Text>
        </View>
        <Text style={styles.htmlView}><HTMLView value={data.body} stylesheet={htmlStyle} /></Text>
      </ScrollView>
    );
  }

});

var htmlStyle = StyleSheet.create({
  h1: {
    margin: 0
  },
  a: {
    color: '#00bbcc'
  },
  mainWrap: {
    flex: 1,
    justifyContent: 'center'
  },
  heading: {
    color: 'red'
  },
  headingContent: {
    color: 'blue'
  }
});