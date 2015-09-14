/**
 * ZhihuDaily
 * - author: Fantasy Shao
 * - create: 2015-09-14
 */

'use strict';

var React = require('react-native');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} = React;

var ListView = require('./App/Views/List');

var ZhihuDaily = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        barTintColor='#008bed'
        titleTextColor='white'
        initialRoute={{
          title: '今日热闻',
          component: ListView
        }}/>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#008bed'
  }
});

AppRegistry.registerComponent('ZhihuDaily', () => ZhihuDaily);
