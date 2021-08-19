import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import strings from './strings';
import colors from './styles/colors';
import getDate from './utils/getDate';
import AccountTitle from './components/Account/Title';
import getAccounts from './utils/getAccounts';
import PremiseCard from './components/PremiseCard';
import DeviceCard from './components/DeviceCard';
import {SvgIconProfileLight} from './styles/icons';

let currentAccount;
let currentPremise;

const App = () => {
  const [accounts, setAccounts] = useState();
  const [premises, setPremises] = useState();
  const [devices, setDevices] = useState();

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

  const updateAccounts = () => {
    setAccounts(accounts);
    updatePremises();
  };

  const updatePremises = () => {
    const {premises} = currentAccount;
    setPremises(premises);

    updateDevices();
  };

  const updateDevices = () => {
    setDevices(currentPremise.devices);
  };

  const accoundClickedHigherOrder = account => {
    return () => {
      currentAccount = account;
      currentPremise = currentAccount.premises[0];
      updateAccounts();
    };
  };

  const renderAccountTitles = ({item}) => (
    <AccountTitle
      onPress={accoundClickedHigherOrder(item)}
      accountName={item.name}
      isSelected={currentAccount === item}
    />
  );

  const premiseClickedHigherOrder = premise => {
    return () => {
      currentPremise = premise;
      updatePremises();
    };
  };

  const renderDevice = ({item}) => (
    <DeviceCard title={item.name} icon={item.type} serialNo={item.serialNo} />
  );

  const renderPremises = ({item}) => (
    <PremiseCard
      onPress={premiseClickedHigherOrder(item)}
      title={item.name}
      icon={item.type}
      isSelected={currentPremise === item}
    />
  );

  const devicesTitle = `"${currentPremise?.name}" ${strings.connectedDevices}`;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.welcomeContainer}>
          <Text style={styles.welcome}>{strings.welcomeText}</Text>
          <Text style={styles.date}>{getDate()}</Text>
        </View>
        <TouchableOpacity style={styles.iconContainer}>
          <SvgIconProfileLight />
        </TouchableOpacity>
      </View>
      <View style={styles.accountTitlesContainer}>
        <FlatList
          data={accounts}
          renderItem={renderAccountTitles}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <View style={styles.premiseContainer}>
        <FlatList
          data={premises}
          renderItem={renderPremises}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>
      <Text style={styles.devicesTitle}>{devicesTitle}</Text>
      <FlatList data={devices} renderItem={renderDevice} />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    paddingTop: 50,
  },
  welcomeContainer: {
    flex: 1,
  },
  welcome: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  date: {
    color: colors.gray,
  },
  iconContainer: {
    justifyContent: 'center',
  },
  accountTitlesContainer: {
    padding: 10,
  },
  premiseContainer: {
    padding: 10,
  },
  devicesTitle: {
    padding: 10,
    paddingLeft: 25,
    paddingBottom: 5,
    color: colors.gray,
  },
});
