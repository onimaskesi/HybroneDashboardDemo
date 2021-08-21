import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './AccountTitleStyle';

export default ({accountName, onPress, isSelected}) => {
  return (
    <TouchableOpacity disabled={isSelected} onPress={onPress}>
      <Text style={isSelected ? styles.textActive : styles.textPassive}>
        {accountName}
      </Text>
    </TouchableOpacity>
  );
};
