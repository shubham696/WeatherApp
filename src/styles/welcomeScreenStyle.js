import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import Colors from '../helpers/colors';

export default styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: Colors.white,
  },
  titleBody: {
    flex: 0.4,
    flexShrink: 0.2,
    flexGrow: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  upcomingDaysBody: {
    flex: 0.6,
    flexShrink: 0.8,
    flexGrow: 0.5,
  },
  upcomingDaysBox: {
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
  },
  flatlistBody: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  upcomingDaysTempTitle: {
    flex: 1,
    alignItems: 'flex-end',
  },
  currentTemptitle: {
    fontWeight: 'bold',
    fontSize: 80,
  },
  currentTempCitytitle: {
    fontWeight: '600',
    fontSize: 30,
  },
  itemSperatorView: {
    height: 1.0,
    width: '100%',
    backgroundColor: '#C8C8C8',
  },
  splashBody: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgSize: {
    width: 200,
    height: 200,
  },
});
