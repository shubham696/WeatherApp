import React, {Component} from 'react';
import {Text, View, SafeAreaView, Alert, Image} from 'react-native';
import styles from '../styles/welcomeScreenStyle';

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {};

  componentWillUnmount = () => {};

  render() {
    return (
      <SafeAreaView style={styles.mainBody}>
        <View style={styles.splashBody}>
          <Text style={styles.currentTempCitytitle}>Weather{' '} </Text>
          <Image
            style={styles.imgSize}
            source={require('../assets/loader.gif')}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default SplashScreen;
