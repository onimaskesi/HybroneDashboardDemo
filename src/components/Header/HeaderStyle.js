import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 40,
  },
  welcomeContainer: {
    flex: 1,
  },
  welcome: {
    color: 'white',
    fontSize: 30,
    fontFamily: 'Gilroy-Bold',
    marginBottom: 5,
  },
  date: {
    color: colors.lightGray,
    fontFamily: 'Gilroy-Light',
  },
  iconContainer: {
    justifyContent: 'center',
  },
});
