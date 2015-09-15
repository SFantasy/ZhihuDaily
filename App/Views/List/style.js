'use strict';

var React = require('react-native');

var {
  StyleSheet,
  Dimensions
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 64,
    backgroundColor: 'white',
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  list: {

  },
  centerText: {
    alignItems: 'center'
  },
  loadingText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    color: '#008bed'
  },
  slideImage: {
    width: Dimensions.get('window').width,
    height: 240
  },
  slideText: {
    bottom: 60,
    left: 10,
    color: 'white',
    fontSize: 20
  },
  dot: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 3,
    marginBottom: 3,
    marginLeft: 3,
    marginRight: 3
  },
  activeDot: {
    backgroundColor: 'white'
  },
  text: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  }
});
