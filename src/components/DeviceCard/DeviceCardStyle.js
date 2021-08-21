import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 10,
    flexDirection: 'row',
    backgroundColor: colors.transparentWhite,
    borderRadius: 8,
  },
  iconContainer: {
    backgroundColor: colors.gray,
    borderRadius: 10,
    margin: 10,
    padding: 15,
  },
  infoContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Gilroy-Medium',
  },
  serialNo: {
    color: colors.lightGray,
    fontFamily: 'Gilroy-Light',
    marginTop: 5,
  },
});
