import React, {Component} from 'react';
import {
  BackHandler,
  View,
  SafeAreaView,
  Alert,
  Text,
  PermissionsAndroid,
  Linking,
  AppState,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import AsyncStorage from '@react-native-community/async-storage';

import styles from '../styles/welcomeScreenStyle';
import ShowTemperatureBody from '../components/ShowTemperatureBody';
import HandleError from '../components/HandelError';
import SplashScreen from '../pages/SplashScreen';

var TAG = 'WelcomeScreen ';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      gotError: false,
      latitude: 0.0,
      longitude: 0.0,
      appState: AppState.currentState,
      canGetError: false,
    };
  }

  gotPermission = async () => {
    const isFirstTime = await AsyncStorage.getItem('isFirstTime');
    if (isFirstTime !== 'false') {
      this.askLocationPermission();
      await AsyncStorage.setItem('isFirstTime', 'false');
    } else {
      const granted = await PermissionsAndroid.check(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted) {
        this.getLocation();
      } else {
        this.onPermissionDeny();
      }
    }
  };

  askLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Weather',
          message: 'Need Location Permission to see Weather',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.getLocation();
      } else {
        this.onPermissionDeny();
      }
    } catch (err) {
      console.error(TAG + 'askLocationPermission', err);
    }
  };

  onPermissionDeny = () => {
    try {
      Alert.alert(
        'Weather',
        'Need Location to see Weather\nPlease press Yes to allow',
        [
          {text: 'NO ', onPress: this.exitApp},
          {text: 'YES ', onPress: () => Linking.openSettings()},
        ],
        {cancelable: false},
      );
      return true;
    } catch (error) {
      console.error(TAG + 'onPermissionDeny', error);
    }
  };

  getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          loading: false,
        });
        //call dispatch api
      },
      (error) => {
        //todo show default delhi weather
        //call api
        this.setState({
          loading: false,
        });
      },
      {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 10000,
      },
    );
    if(this.state.canGetError){
      this.setState({gotError: true});
    }
  };

  componentDidMount = () => {
    BackHandler.addEventListener('hardwareBackPress', this.onBackButtonPress);
    AppState.addEventListener('change', this.handleAppStateChange);
    this.gotPermission();
  };

  componentWillUnmount = () => {
    BackHandler.removeEventListener(
      'hardwareBackPress',
      this.onBackButtonPress,
    );
    AppState.removeEventListener('change', this.handleAppStateChange);
  };

  handleAppStateChange = (nextAppState) => {
    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
      if (this.state.longitude === 0.0) {
        this.gotPermission;
      }
    }
    this.setState({appState: nextAppState});
  };

  exitApp = () => {
    BackHandler.exitApp();
  };

  onBackButtonPress = () => {
    try {
      Alert.alert(
        'Exit',
        'Do you want to Exit the app',
        [{text: 'NO '}, {text: 'YES ', onPress: this.exitApp}],
        {cancelable: true},
      );
      return true;
    } catch (error) {
      console.error(TAG + 'onBackButtonPress', error);
    }
  };

  callAPIAgain = (value) => {
    if(value){
      this.setState({canGetError: true});
      this.getLocation();
    }
  };

  render() {
    return (
      <SafeAreaView style={[styles.mainBody]}>
        {this.state.loading ? (
          <SplashScreen />
        ) : (
          [this.state.gotError ? <HandleError callAPIAgain={this.callAPIAgain} gotError={this.state.gotError} /> : <ShowTemperatureBody />]
        )}
      </SafeAreaView>
    );
  }
}

export default WelcomeScreen;
