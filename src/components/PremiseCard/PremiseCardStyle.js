import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const baseStyle = StyleSheet.create({
  container: {
    borderRadius: 5,
    margin: 10,
    height: 100,
    width: 100,
    alignItems: 'flex-start',
  },
});

export default StyleSheet.create({
  ...baseStyle,
  containerActive: {
    ...baseStyle.container,
    backgroundColor: colors.blue,
  },
  containerPassive: {
    ...baseStyle.container,
    backgroundColor: colors.lightGray,
  },
  iconContainer: {
    flex: 1,
    margin: 15,
  },
  icon: {
    height: 20,
    width: 20,
    backgroundColor: 'white',
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    marginLeft: 15,
    marginRight: 15,
    color: 'white',
    textTransform: 'capitalize',
    textAlign: 'left',
  },
});
