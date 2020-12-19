import React, {Component} from 'react';
import {View, Image} from 'react-native';
import styles from '../styles/loaderStyle';

class Loader extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {};

  componentWillUnmount = () => {};

  render() {
    return (
      <View style={[styles.loaderBody]}>
        <Image source={require('../assets/loader.gif')} />
      </View>
    );
  }
}

export default Loader;
