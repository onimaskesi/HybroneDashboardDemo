import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const baseStyle = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    paddingRight: 40,
    paddingLeft: 40,
    margin: 10,
    borderRadius: 40,
  },
  title: {
    textTransform: 'uppercase',
  },
});

const primary = StyleSheet.create({
  ...baseStyle,
  container: {
    ...baseStyle.container,
    backgroundColor: 'white',
  },
  title: {
    ...baseStyle.title,
    color: colors.backgroundColor,
  },
});

const secondary = StyleSheet.create({
  ...baseStyle,
  container: {
    ...baseStyle.container,
    backgroundColor: colors.backgroundColor,
  },
  title: {
    ...baseStyle.title,
    color: 'white',
  },
});

export default {primary, secondary};
