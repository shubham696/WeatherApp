import React, {Component} from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from '../styles/welcomeScreenStyle';
import Loader from './Loader';

class ShowTemperatureBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAlertVisible: true,
      array: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      temperatureArray: [],
      totalData: '',
    };
  }

  ItemSeparatorView = () => {
    return <View style={styles.itemSperatorView} />;
  };

  parseJSON = (dataArray) => {
    if (dataArray != undefined) {
      var weekday = new Array(
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
      );
      var weekTemp = new Array(0, 0, 0, 0, 0, 0);
      var currentThis = this;
      Object.values(dataArray)[0].map((element) => {
        var t = new Date();
        t.setSeconds(element.dt);
        if (currentThis.state.array.includes(weekday[t.getDay()])) {
          weekTemp[t.getDay()] = element.temp.day;
        }
      });
      this.setState(
        {
          temperatureArray: weekTemp,
        },
        // () => console.log('data... ', weekTemp, this.state.temperatureArray),
      );

      var result = {};
      this.state.array.forEach((key, i) => {
        if (i != 0) {
          result[key] = weekTemp[i];
        }
      });
      this.setState({totalData: result});
    }
  };

  componentDidMount = () => {
    this.parseJSON(this.props.temperatureList);
  };

  componentWillUnmount = () => {};

  render() {
    const {city} = this.props;
    return (
      <View style={styles.mainBody}>
        {this.state.totalData ? (
          <View style={styles.mainBody}>
            <View style={styles.titleBody}>
              {this.state.temperatureArray != undefined &&
                this.state.temperatureArray.length == 6 && (
                  <Text style={styles.currentTemptitle}>
                    {this.state.temperatureArray.shift()}{' '}
                  </Text>
                )}
              <Text style={styles.currentTempCitytitle}>{city} </Text>
            </View>
            <View style={styles.upcomingDaysBody}>
              <FlatList
                extraData={this.state.totalData}
                contentContainerStyle={styles.flatlistBody}
                data={Object.keys(this.state.totalData)}
                renderItem={({item, index}) => (
                  <View style={styles.upcomingDaysBox}>
                    <Text>{item} </Text>
                    <View style={styles.upcomingDaysTempTitle}>
                      <Text>{this.state.totalData[item]} </Text>
                    </View>
                  </View>
                )}
                ItemSeparatorComponent={this.ItemSeparatorView}
                ListFooterComponent={this.ItemSeparatorView}
                ListHeaderComponent={this.ItemSeparatorView}
                keyExtractor={(item, index) => item}
              />
            </View>
          </View>
        ) : (
          <Loader visible={true} />
        )}
      </View>
    );
  }
}

export default ShowTemperatureBody;
