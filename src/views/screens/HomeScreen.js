import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Image, Text} from 'react-native';
import SearchComponent from '../../../components/Home/SearchComponent';
import HederComponent from './../../../components/Home/HederComponent';
import ItemListComponent from './../../../components/Home/ItemListComponent';
import Stationery from './../../const/Stationery';
import {TouchableOpacity} from 'react-native-gesture-handler';
import COLORS from '../../const/colors';

const StationeryCategory = [
  {name: 'pen', icon: 'pencil'},
  {name: 'eraser', icon: 'eraser'},
  {name: 'compas', icon: 'compass'},
  {name: 'pencile', icon: 'pencil'},
];

const HomeScreen = ({navigation}) => {
  const [pen, setPen] = useState([]);
  const [indexSelect, setIndexSelect] = useState(0);

  const filterItem = indexSelect => {
    const currentItem = Stationery.filter(
      item => item.name === StationeryCategory[indexSelect].name,
    )[0].names;
    setPen(currentItem);
  };

  React.useEffect(() => {
    filterItem(0);
  }, []);

  React.useEffect(() => {
    filterItem(indexSelect);
  }, [indexSelect]);

  return (
    <View style={styles.Container}>
      <HederComponent nav={navigation} />
      <SearchComponent />
      <ItemListComponent
        stationeris={StationeryCategory}
        onPress={index => setIndexSelect(index)}
        indexSelect={indexSelect}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        style={{
          marginTop: 30,
        }}
        data={pen}
        renderItem={({item}) => {
          return (
            <View style={styles.containerBox}>
              <Image
                source={item.image}
                style={{
                  height: 100,
                  width: 100,
                  padding: 10,
                  resizeMode: 'contain',
                }}
              />
              <Text>{item.name}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 15,
  },
  containerBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 15,
    padding: 7,
  },
});

export default HomeScreen;
