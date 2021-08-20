import React, {useState, useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import strings from './strings';
import colors from './styles/colors';
import getDate from './utils/getDate';
import AccountTitle from './components/AccountTitle';
import getAccounts from './utils/getAccounts';
import PremiseCard from './components/PremiseCard';
import DeviceCard from './components/DeviceCard';
import {SvgIconProfileLight} from './styles/icons';

let currentAccountIndex = 0;
let currentPremiseIndex = 0;

const App = () => {
  const accounts = getAccounts();
  const premises = accounts[currentAccountIndex].premises[currentPremiseIndex];
  const [accountTitlesComponents, setaccountTitlesComponents] = useState();
  const [premisesComponents, setPremisesComponents] = useState();

  const updateAccount = () => {
    setaccountTitlesComponents(getAccoutTitles());
    updatePremises();
  };

  const updatePremises = () => {
    setPremisesComponents(getPremises());
  };

  useEffect(() => {
    updateAccount();
  }, []);

  const accoundClickedHigherOrder = index => {
    return () => {
      currentAccountIndex = index;
      updateAccount();
    };
  };

  const getAccoutTitles = () => {
    return accounts.map((account, index) => (
      <AccountTitle
        onPress={accoundClickedHigherOrder(index)}
        accountName={account.name}
        key={index}
        isSelected={currentAccountIndex === index}
      />
    ));
  };

  const premiseClickedHigherOrder = index => {
    return () => {
      currentPremiseIndex = index;
      updatePremises();
    };
  };

  const getPremises = () => {
    return accounts[currentAccountIndex].premises.map((premise, index) => (
      <PremiseCard
        key={index}
        onPress={premiseClickedHigherOrder(index)}
        title={premise.name}
        icon={premise.type}
        isSelected={currentPremiseIndex === index}
      />
    ));
  };

  const renderDevice = ({item}) => (
    <DeviceCard title={item.name} icon={item.type} serialNo={item.serialNo} />
  );

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
      <View>
        <ScrollView
          style={styles.accountTitlesContainer}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {accountTitlesComponents}
        </ScrollView>
      </View>
      <View>
        <ScrollView
          style={styles.PremiseContainer}
          horizontal
          showsHorizontalScrollIndicator={false}>
          {premisesComponents}
        </ScrollView>
      </View>
      <Text
        style={
          styles.devicesTitle
        }>{`"${premises.name}" ${strings.connectedDevices}`}</Text>
      <FlatList data={premises.devices} renderItem={renderDevice} />
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
    marginRight: 10,
  },
  PremiseContainer: {
    padding: 10,
  },
  devicesTitle: {
    padding: 10,
    paddingLeft: 25,
    paddingBottom: 5,
    color: colors.gray,
  },
});
