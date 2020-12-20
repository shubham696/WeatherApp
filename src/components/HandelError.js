import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/handleErrorStyle';
import Loader from './Loader';

class HandleError extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  componentDidMount = () => {};

  componentWillUnmount = () => {};

  callTheAPI = () => {
    this.setState({isLoading: true});
    this.props.callAPIAgain(true);
  };

  render() {
    const {gotError} = this.props;
    return (
      <View style={styles.mainBody}>
        {!gotError && <Loader visible={this.state.isLoading} />}
        <Text style={styles.errorTitle}>Something Went Wrong at our End{' '} </Text>
        <TouchableOpacity
          style={styles.retryBody}
          activeOpacity={0.3}
          onPress={() => this.callTheAPI()}>
          <Text style={styles.retryTitle}>Retry{' '} </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default HandleError;
