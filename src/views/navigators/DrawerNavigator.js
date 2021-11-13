import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from './../screens/HomeScreen';
import CustomDrawerContent from './CustomDrawerContent';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from './../../const/colors';
import DrawerContainer from './DrawerContainer';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerType: 'slide',
        drawerStyle: {
          width: 200,
          backgroundColor: COLORS.primary,
        },
        overlayColor: 'transparent',
        sceneContainerStyle: {
          backgroundColor: COLORS.primary,
        },
        drawerActiveTintColor: COLORS.white,
        drawerInactiveTintColor: COLORS.secondary,
        // drawerItemStyle: {
        //   backgroundColor: null,
        // },
        drawerLabelStyle: {
          fontWeight: 'bold',
        },
      }}
      drawerContent={props => <CustomDrawerContent {...props} />}>
      {/* Home Drawer Screen */}
      <Drawer.Screen
        name="Home"
        options={{
          title: 'Home',
          drawerIcon: ({color}) => (
            <AntDesign name="home" color={color} size={25} />
          ),
        }}>
        {props => (
          <DrawerContainer>
            <HomeScreen {...props} />
          </DrawerContainer>
        )}
      </Drawer.Screen>

      {/* Favorite  */}
      <Drawer.Screen
        name="Favorite"
        options={{
          title: 'Favorite',
          drawerIcon: ({color}) => (
            <MaterialIcons name="favorite" color={color} size={25} />
          ),
        }}>
        {({props}) => (
          <DrawerContainer>
            <HomeScreen {...props} />
          </DrawerContainer>
        )}
      </Drawer.Screen>

      {/* Profile  */}
      <Drawer.Screen
        name="Profile"
        options={{
          title: 'Profile',
          drawerIcon: ({color}) => (
            <Fontisto name="person" color={color} size={25} />
          ),
        }}>
        {({props}) => (
          <DrawerContainer>
            <HomeScreen {...props} />
          </DrawerContainer>
        )}
      </Drawer.Screen>
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
