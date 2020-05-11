/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  StyleSheet
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import CommonNavigator from './src/Router/Navigation'

class App extends Component {
  render() {
    return (
      <CommonNavigator />
    );
  }

};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },

});

export default App;
