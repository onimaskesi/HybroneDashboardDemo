import React, {useState, useEffect, useRef} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import strings from './strings';
import colors from './styles/colors';
import getAccounts from './utils/getAccounts';
import DeviceCard from './components/DeviceCard';
import NoDevice from './components/NoDevice';
import AccountTitles from './components/AccountTitleList';
import Header from './components/Header';
import Premises from './components/PremiseList';

let currentAccount;
let currentPremise;

const App = () => {
  const [accounts, setAccounts] = useState([]);
  const [premises, setPremises] = useState([]);
  const [devices, setDevices] = useState([]);

  const initAccountsAndCurrentAccount = () => {
    const accounts = getAccounts();
    setAccounts(accounts);
    currentAccount = accounts[0];
  };

  const initPremisesAndCurrentPremise = () => {
    const {premises} = currentAccount;
    currentPremise = premises[0];
  };

  const getDatas = () => {
    initAccountsAndCurrentAccount();

    initPremisesAndCurrentPremise();

    updatePremises();
  };

  useEffect(() => getDatas(), []);

  const updatePremises = () => {
    const {premises} = currentAccount;
    setPremises(premises);

    updateDevices();
  };

  const updateDevices = () => {
    const {devices} = currentPremise;
    setDevices(devices);
  };

  const accoundClickedHigherOrder = account => {
    return () => {
      currentAccount = account;
      currentPremise = currentAccount.premises[0];
      updatePremises();
    };
  };

  const renderDevice = ({item}) => (
    <DeviceCard title={item.name} icon={item.type} serialNo={item.serialNo} />
  );

  const premiseClickedHigherOrder = premise => {
    return () => {
      currentPremise = premise;
      updatePremises();
    };
  };

  const devicesTitleText = `"${currentPremise?.name}" ${strings.connectedDevices}`;

  const DevicesTitle = () => {
    return (
      <Text style={styles.devicesTitle}>
        {!!devices?.length && devicesTitleText}
      </Text>
    );
  };

  const accountTitlesRef = useRef();

  useEffect(() => {
    const scrollToSelectedAccountTitle = () => {
      const index = accounts?.indexOf(currentAccount);
      index !== -1 &&
        accountTitlesRef.current?.scrollToIndex({
          animated: true,
          index: index,
          //viewPosition: 0.5,
        });
    };
    scrollToSelectedAccountTitle();
  }, [accounts, premises]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <FlatList
          data={devices}
          ListEmptyComponent={<NoDevice />}
          ListHeaderComponent={
            <>
              <Header />
              <AccountTitles
                referance={accountTitlesRef}
                accounts={accounts}
                onAccountSelected={accoundClickedHigherOrder}
                currentAccount={currentAccount}
              />
              <Premises
                premises={premises}
                onPremiseSelected={premiseClickedHigherOrder}
                currentPremise={currentPremise}
              />
              <DevicesTitle />
            </>
          }
          renderItem={renderDevice}
          showsVerticalScrollIndicator={false}
          refreshing={!accounts}
          onRefresh={() => getDatas()}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  innerContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  devicesTitle: {
    color: colors.lightGray,
    fontFamily: 'Gilroy-Regular',
    marginTop: 20,
  },
});
