import React from 'react';
import {FlatList, View} from 'react-native';
import styles from './PremiseListStyle';
import PremiseCard from './PremiseCard';

const Premises = ({premises, onPremiseSelected, currentPremise}) => {
  const renderPremises = ({item}) => (
    <PremiseCard
      onPress={onPremiseSelected(item)}
      title={item.name}
      icon={item.type}
      isSelected={currentPremise === item}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={premises}
        renderItem={renderPremises}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Premises;
