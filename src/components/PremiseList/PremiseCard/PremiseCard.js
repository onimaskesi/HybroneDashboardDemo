import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './PremiseCardStyle';
import {
  SvgIconHomeLight,
  SvgIconDepotLight,
  SvgIconWorkplaceLight,
} from '../../../styles/icons';

import strings from '../../../strings';

import LinearGradient from 'react-native-linear-gradient';
import colors from '../../../styles/colors';

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
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={
          isSelected
            ? [colors.blue, colors.lightBlue]
            : [colors.transparentWhite, 'transparent']
        }
        style={styles.container}>
        <View style={styles.iconContainer}>{getTheIcon(icon)}</View>
        <View style={styles.titleContainer}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};
