import React from 'react';
import {View, FlatList} from 'react-native';
import AccountTitle from './AccountTitle';

const AccountTitles = ({
  accounts,
  onAccountSelected,
  currentAccount,
  referance,
}) => {
  const renderAccountTitles = ({item}) => (
    <AccountTitle
      onPress={onAccountSelected(item)}
      accountName={item.name}
      isSelected={currentAccount === item}
    />
  );

  return (
    <View>
      {accounts && (
        <FlatList
          ref={referance}
          data={accounts}
          renderItem={renderAccountTitles}
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default AccountTitles;
