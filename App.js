import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DrawerNavigator from './src/views/navigators/DrawerNavigator';
import DetailsScreen from './src/views/screens/DetailsScreen';
const Stack = createStackNavigator();

//sovle warnings in Project
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="HomeScreen" component={DrawerNavigator} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
