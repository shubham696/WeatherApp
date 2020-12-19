import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/handleErrorStyle';

class HandleError extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {};

  componentWillUnmount = () => {};

  callTheAPI = () => {
    //dispach api call
  };

  render() {
    return (
      <View style={styles.mainBody}>
        <Text style={styles.errorTitle}>Something Went Wrong at our End </Text>
        <TouchableOpacity
          style={styles.retryBody}
          activeOpacity={0.3}
          onPress={() => this.callTheAPI()}>
          <Text style={styles.retryTitle}>Retry </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HandleError;
