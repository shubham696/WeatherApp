/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';
import { Provider } from 'react-redux'

import WelcomeScreen from './src/pages/welcomeScreen';
import store from './src/store';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <View style={{flex: 1}}>
        <WelcomeScreen />
      </View>
    </Provider>
  );
};

export default App;
