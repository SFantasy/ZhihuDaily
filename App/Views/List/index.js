'use strict';

var React = require('react-native');

var {
  Text,
  View,
  ListView
} = React;

var api = require('../../Config/api');
var style = require('./style');
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
          dataSource: this.state.dataSource.cloneWithRows(responseData.stories),
          loaded: true
        });
      })
      .done();
  },

  render: function () {
    if (!this.state.loaded) {
      return (
        <View>
          <Text>载入中...</Text>
        </View>
      );
    }

    return this.renderListView();
  },

  renderListView: function () {
    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderCell} />
    );
  },

  renderCell: function (news) {
    return (
      <CellView news={news} />
    )
  }

});
