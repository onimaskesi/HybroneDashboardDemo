import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  title: {
    color: 'white',
    padding: 20,
    fontSize: 20,
    textTransform: 'uppercase',
  },
  description: {
    color: colors.lightGray,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
});
