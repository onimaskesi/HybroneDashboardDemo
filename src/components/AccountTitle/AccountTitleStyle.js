import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const baseStyle = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
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
