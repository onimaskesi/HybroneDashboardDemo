import React from 'react';
import {Text, View} from 'react-native';
import Button from './Button';
import styles from './NoDeviceStyle';
import {SvgIconEmptyLight} from '../../styles/icons';
import strings from '../../strings';

export default () => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <SvgIconEmptyLight fill="white" width={72} height={72} />
        <Text style={styles.title}>{strings.noDeviceTitle}</Text>
        <Text style={styles.description}>{strings.noDeviceExplanation}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title={strings.newDeviceRequest} />
        <Button title={strings.deviceRequests} theme="secondary" />
      </View>
    </View>
  );
};
