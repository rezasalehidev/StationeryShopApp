import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import SearchComponent from '../../../components/Home/SearchComponent';
import HederComponent from './../../../components/Home/HederComponent';

const StationeryCategory = [
  {name: 'PENCILE', icon: 'pencil'},
  {name: 'PEN', icon: 'pencil'},
  {name: 'PEN', icon: 'pencil'},
  {name: 'COMPASS', icon: 'compass'},
];

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.Container}>
      <HederComponent nav={navigation} />
      <SearchComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
});

export default HomeScreen;
