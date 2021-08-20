import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './DeviceCardStyle';
import {
  SvgIconDeviceAccessLight,
  SvgIconDeviceBurglaryLight,
  SvgIconDeviceCameraLight,
  SvgIconDeviceFireLight,
  SvgIconDeviceVehicleLight,
  SvgIconDeviceIotLight,
  SvgIconGatewayLogoLight,
} from '../../styles/icons';
import strings from '../../strings';

const getTheIcon = iconName => {
  return iconName === strings.vehicleTrackingIconName ? (
    <SvgIconDeviceVehicleLight />
  ) : iconName === strings.fireIconName ? (
    <SvgIconDeviceFireLight />
  ) : iconName === strings.cameraIconName ? (
    <SvgIconDeviceCameraLight />
  ) : iconName === strings.IvidionBridgeIconName ? (
    <SvgIconDeviceCameraLight />
  ) : iconName === strings.ipCameraIconName ? (
    <SvgIconDeviceCameraLight />
  ) : iconName === strings.nvrIconName ? (
    <SvgIconDeviceCameraLight />
  ) : iconName === strings.accessControlIconName ? (
    <SvgIconDeviceAccessLight />
  ) : iconName === strings.panelIconName ? (
    <SvgIconDeviceBurglaryLight />
  ) : iconName === strings.smartPanelIconName ? (
    <SvgIconDeviceBurglaryLight />
  ) : iconName === strings.smartboxIoModuleIconName ? (
    <SvgIconDeviceIotLight />
  ) : iconName === strings.smartHubIconName ? (
    <SvgIconGatewayLogoLight />
  ) : (
    <SvgIconDeviceFireLight />
  );
};

export default ({title, icon, serialNo, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.iconContainer}>{getTheIcon(icon)}</View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.serialNo}>{serialNo}</Text>
      </View>
    </TouchableOpacity>
  );
};
