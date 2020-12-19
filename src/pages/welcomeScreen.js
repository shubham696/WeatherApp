import React, {Component} from 'react';
import {BackHandler, View, SafeAreaView} from 'react-native';
import styles from '../styles/welcomeScreenStyle';
import ShowTemperatureBody from '../components/ShowTemperatureBody';
import HandleError from '../components/HandelError';
import Loader from '../components/Loader';

class WelcomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  componentDidMount = () => {};

  componentWillUnmount = () => {};

  onBackButtonPress = () => {
    BackHandler.exitApp();
  };

  isDataLoading = (value) => {
    this.setState({isLoading: value});
  };

  render() {
    return (
      <SafeAreaView style={[styles.mainBody]}>
        {this.state.isLoading ? (
          <Loader />
        ) : (
          [false ? <HandleError /> : <ShowTemperatureBody />]
        )}
      </SafeAreaView>
    );
  }
}

export default WelcomeScreen;
