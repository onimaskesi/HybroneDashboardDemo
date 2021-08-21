import {Dimensions, StyleSheet} from 'react-native';
//80

export default StyleSheet.create({
  container: {
    borderRadius: 5,
    marginRight: 20,
    height: 100,
    width: (Dimensions.get('window').width - 80) / 3,
    alignItems: 'flex-start',
    backgroundColor: '#ffffff20',
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
    fontFamily: 'Gilroy-Semibold',
  },
});
