import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import COLORS from './../../src/const/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ItemListComponent = ({stationeris, onPress, indexSelect, filterItem}) => {
  return (
    <View style={styles.containerPens}>
      {stationeris.map((item, index) => {
        return (
          <View
            key={index}
            style={{
              marginHorizontal: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <TouchableOpacity onPress={() => onPress(index)}>
              <View
                style={{
                  backgroundColor:
                    indexSelect == index ? COLORS.primary : COLORS.secondary,
                  padding: 7,
                  borderRadius: 10,
                }}>
                <Entypo
                  name={item.icon}
                  size={25}
                  color={indexSelect == index ? COLORS.white : COLORS.primary}
                />
              </View>
            </TouchableOpacity>
            <Text style={{marginTop: 10}}>{item.name}</Text>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  containerPens: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ItemListComponent;
