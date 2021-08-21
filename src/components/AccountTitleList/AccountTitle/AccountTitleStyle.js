import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

const baseStyle = StyleSheet.create({
  text: {
    fontSize: 30,
    margin: 20,
    marginLeft: 0,
    fontFamily: 'Gilroy-Bold',
  },
});

export default StyleSheet.create({
  ...baseStyle,
  textActive: {
    ...baseStyle.text,
    color: 'white',
  },
  textPassive: {
    ...baseStyle.text,
    color: colors.lightGray,
  },
});
