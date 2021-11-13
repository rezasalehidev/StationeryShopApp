import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import COLORS from './../../src/const/colors';

const SearchComponent = () => {
  return (
    <View style={styles.SearchContainer}>
      <AntDesign name="search1" size={25} />
      <TextInput
        placeholder="search Stationery You Need"
        style={styles.searchInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  SearchContainer: {
    marginVertical: 25,
    marginHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.secondary,
    paddingLeft: 10,
    borderRadius: 10,
  },
  searchInput: {
    alignItems: 'center',
    flex: 1,
  },
});

export default SearchComponent;
