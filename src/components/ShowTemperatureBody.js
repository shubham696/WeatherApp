import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from '../styles/welcomeScreenStyle';

class ShowTemperatureBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAlertVisible: true,
      array: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    };
  }

  ItemSeparatorView = () => {
    return <View style={styles.itemSperatorView} />;
  };

  componentDidMount = () => {};

  componentWillUnmount = () => {};

  render() {
    return (
      <View style={styles.mainBody}>
        <View style={styles.titleBody}>
          <Text style={styles.currentTemptitle}>10{' '} </Text>
          <Text style={styles.currentTempCitytitle}>Delhi{' '} </Text>
        </View>
        <View style={styles.upcomingDaysBody}>
          <FlatList
            contentContainerStyle={styles.flatlistBody}
            data={this.state.array}
            renderItem={({item}) => (
              <View style={styles.upcomingDaysBox}>
                <Text>{item}{' '}</Text>
                <View style={styles.upcomingDaysTempTitle}>
                  <Text>8{' '} </Text>
                </View>
              </View>
            )}
            ItemSeparatorComponent={this.ItemSeparatorView}
            ListFooterComponent={this.ItemSeparatorView}
            ListHeaderComponent={this.ItemSeparatorView}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
    );
  }
}

export default ShowTemperatureBody;
