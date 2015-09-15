var React = require('react-native');

var {
  StyleSheet,
  Dimensions
} = React;

var window = Dimensions.get('window');

module.exports = StyleSheet.create({
  loadingContainer: {
    marginTop: 64
  },
  container: {
    flex: 1
  },
  header: {
    position: 'relative',
    backgroundColor: 'transparent',
    height: 200
  },
  headerGradient: {
    height: 200,
    width: window.width
  },
  image: {
    flex: 1,
    height: 200,
    width: window.width
  },
  title: {
    position: 'absolute',
    fontSize: 20,
    color: 'white',
    bottom: 30,
    left: 10,
    width: window.width - 20
  },
  imageSource: {
    position: 'absolute',
    fontSize: 12,
    color: 'white',
    bottom: 10,
    right: 10
  },
  loadingText: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,
    color: '#008bed'
  },
  htmlView: {
    padding: 10
  }
});
