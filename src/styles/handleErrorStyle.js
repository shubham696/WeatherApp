import {StyleSheet} from 'react-native';
import Colors from '../helpers/colors';

export default styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
  },
  errorTitle: {
    fontWeight: '600',
    fontSize: 50,
    padding: 20,
  },
  retryTitle: {
    fontWeight: '600',
    fontSize: 20,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderWidth: 1.0,
    borderColor: Colors.black,
    textTransform: 'uppercase',
  },
  retryBody: {
    flexWrap: 'wrap',
    alignSelf: 'center',
    paddingTop: 40,
  },
});
