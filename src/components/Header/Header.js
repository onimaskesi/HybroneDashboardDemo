import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './HeaderStyle';
import getDate from '../../utils/getDate';
import strings from '../../strings';
import {SvgIconProfileLight} from '../../styles/icons';

const Header = () => (
  <View style={styles.container}>
    <View style={styles.welcomeContainer}>
      <Text style={styles.welcome}>{strings.welcomeText}</Text>
      <Text style={styles.date}>{getDate()}</Text>
    </View>
    <TouchableOpacity style={styles.iconContainer}>
      <SvgIconProfileLight />
    </TouchableOpacity>
  </View>
);

export default Header;
