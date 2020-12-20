import React, {Component} from 'react';
import {View, Image, Modal} from 'react-native';
import styles from '../styles/loaderStyle';

class Loader extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {};

  componentWillUnmount = () => {};

  render() {
    const {visible} = this.props;
    return (
      <Modal animationType="fade" transparent={true} visible={visible}>
        <View style={styles.loaderBody}>
          <Image source={require('../assets/loader.gif')} />
        </View>
      </Modal>
    );
  }
}

export default Loader;
