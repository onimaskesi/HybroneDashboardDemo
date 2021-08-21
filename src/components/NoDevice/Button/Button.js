import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './ButtonStyle';

export default ({title, onPress, theme = 'primary'}) => {
  const style = styles[theme];
  return (
    <TouchableOpacity style={style.container} onPress={onPress}>
      <Text style={style.title}>{title}</Text>
    </TouchableOpacity>
  );
};
