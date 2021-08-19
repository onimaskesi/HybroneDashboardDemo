import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './PremiseCardStyle';
import {SvgXml} from 'react-native-svg';
import {
  SvgIconHomeLight,
  SvgIconDepotLight,
  SvgIconWorkplaceLight,
} from '../../styles/icons';

import strings from '../../strings';

const getTheIcon = iconName => {
  return iconName === strings.homeIconName ? (
    <SvgIconHomeLight />
  ) : iconName === strings.workPlaceIconName ? (
    <SvgIconWorkplaceLight />
  ) : iconName === strings.depotIconName ? (
    <SvgIconDepotLight />
  ) : (
    <SvgIconHomeLight />
  );
};

export default ({title, icon, isSelected, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={isSelected ? styles.containerActive : styles.containerPassive}>
      <View style={styles.iconContainer}>{getTheIcon(icon)}</View>
      <View style={styles.titleContainer}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
