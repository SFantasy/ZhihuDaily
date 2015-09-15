'use strict';

var {
  StyleSheet,
  Dimensions
} = require('react-native');

module.exports = StyleSheet.create({
  cell: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 0.5,
    height: 80
  },
  text: {
    fontSize: 16,
    color: '#333333',
    textAlign: 'left',
    width: Dimensions.get('window').width - 110
  },
  image: {
    width: 60,
    height: 60,
    right: 0
  }
});
