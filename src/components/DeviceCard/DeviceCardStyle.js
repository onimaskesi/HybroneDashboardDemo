import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    margin: 10,
    flexDirection: 'row',
    backgroundColor: '#464B4F',
    borderRadius: 8,
  },
  iconContainer: {
    backgroundColor: colors.deviceIconContainerColor,
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
  },
  serialNo: {
    color: colors.deviceSerialTextColor,
  },
});
