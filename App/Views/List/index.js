'use strict';

// Module dependencies
var React = require('react-native');
var Swiper = require('react-native-swiper');

var {
  Text,
  View,
  ListView,
  Image
} = React;

var api = require('../../Config/api');
var styles = require('./style');
var CellView = require('./Elements/Cell');

module.exports = React.createClass({
  getInitialState: function () {
    return {
      dataSource: new ListView.DataSource({ rowHasChanged: (row1, row2) => row1 !== row2 }),
      loaded: false
    }
  },

  componentDidMount: function () {
    this.fetchData()
  },

  fetchData: function () {
    fetch(api.latest)
      .then((response) => response.json())
      .then((responseData) => {
        this.setState({
          stories: this.state.dataSource.cloneWithRows(responseData.stories),
          topStories: responseData.top_stories,
          loaded: true
        });
      })
      .done();
  },

  render: function () {
    if (!this.state.loaded) {
      return (
        <View style={[styles.container, styles.centerText]}>
          <Text style={styles.loadingText}>载入中...</Text>
        </View>
      );
    }

    return this.renderListView();
  },

  renderSwiper: function () {
    return (
      <Swiper
        height={240}
        loop={true}
        dot={<View style={styles.dot}></View>}
        activeDot={<View style={[styles.dot, styles.activeDot]}></View>}
        showButtons={true}
        paginationStyle={{
            bottom: 5
          }}>
        {this.state.topStories.map(function (story) {
          return (
            <View>
              <Image style={styles.slideImage}
                     source={{ uri: story.image }} />
              <Text style={styles.slideText} numberOfLines={2}>{story.title}</Text>
            </View>
          );
        })}
      </Swiper>
    );
  },

  renderListView: function () {
    return (
      <ListView
        style={styles.list}
        dataSource={this.state.stories}
        renderHeader={this.renderSwiper}
        renderRow={this.renderCell} />
    );
  },

  renderCell: function (news) {
    return (
      <CellView news={news} />
    )
  }

});
