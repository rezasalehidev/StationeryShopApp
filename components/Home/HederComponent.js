import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import COLORS from './../../src/const/colors';

const HederComponent = ({nav}) => {
  return (
    <View style={styles.HeaderComponent}>
      <TouchableOpacity onPress={() => nav.toggleDrawer()}>
        <AntDesign name="menufold" size={25} />
      </TouchableOpacity>
      <Image
        source={require('../../src/assets/person.jpg')}
        style={{height: 40, width: 40, borderRadius: 20}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  HeaderComponent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
  },
});

export default HederComponent;
