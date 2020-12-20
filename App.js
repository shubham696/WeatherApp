/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View} from 'react-native';

import WelcomeScreen from './src/pages/welcomeScreen';

const App: () => React$Node = () => {
  return (
      <View style={{flex: 1}}>
        <WelcomeScreen />
      </View>
  );
};

export default App;
