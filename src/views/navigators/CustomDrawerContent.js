import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import COLORS from './../../const/colors';

const CustomDrawerContent = props => {
  return (
    <DrawerContentScrollView>
      <View
        style={{
          marginVertical: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('../../assets/person.jpg')}
          style={{height: 70, width: 70, borderRadius: 20}}
        />
        <Text style={{marginTop: 20, color: COLORS.white}}>Reza Salehi</Text>
      </View>

      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
