import React from 'react';
import {View, Text} from 'react-native';
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

const getTheIcon = iconName => {
  return iconName === 'VEHICLE_TRACKING' ? (
    <SvgIconDeviceVehicleLight />
  ) : iconName === 'FIRE' ? (
    <SvgIconDeviceFireLight />
  ) : iconName === 'CAMERA' ? (
    <SvgIconDeviceCameraLight />
  ) : iconName === 'IVIDEON_BRIDGE' ? (
    <SvgIconDeviceCameraLight />
  ) : iconName === 'IP_CAMERA' ? (
    <SvgIconDeviceCameraLight />
  ) : iconName === 'NVR' ? (
    <SvgIconDeviceCameraLight />
  ) : iconName === 'ACCESS_CONTROL' ? (
    <SvgIconDeviceAccessLight />
  ) : iconName === 'PANEL' ? (
    <SvgIconDeviceBurglaryLight />
  ) : iconName === 'SMART_PANEL' ? (
    <SvgIconDeviceBurglaryLight />
  ) : iconName === 'SMARTBOX_IO_MODULE' ? (
    <SvgIconDeviceIotLight />
  ) : iconName === 'SMARTHUB' ? (
    <SvgIconGatewayLogoLight />
  ) : (
    <SvgIconDeviceFireLight />
  );
};

export default ({title, icon, serialNo}) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>{getTheIcon(icon)}</View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.serialNo}>{serialNo}</Text>
      </View>
    </View>
  );
};
