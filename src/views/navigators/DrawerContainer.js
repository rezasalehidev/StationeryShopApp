import React from 'react';
import COLORS from './../../const/colors';
import {StatusBar, View} from 'react-native';
import {useDrawerProgress, useDrawerStatus} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';

const DrawerContainer = ({children}) => {
  const isOpen = useDrawerStatus();
  const progress = useDrawerProgress();
  const scale = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [1, 0.7],
  });

  const borderRadius = Animated.interpolateNode(progress, {
    inputRange: [0, 1],
    outputRange: [0, 25],
  });

  return (
    <Animated.View
      style={{
        backgroundColor: COLORS.white,
        flex: 1,
        transform: [{scale}],
        borderRadius,
      }}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={isOpen == 'open' ? COLORS.white : COLORS.secondary}
      />
      {children}
    </Animated.View>
  );
};

export default DrawerContainer;
