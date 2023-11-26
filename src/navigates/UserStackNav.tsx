import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CameraScreen, HomeScreen} from '../screens';

const Stack = createStackNavigator();

export const UserStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        headerBackTitleVisible: false,
        headerTitle: '',
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
      }}>
      <Stack.Screen name="Inicio" component={HomeScreen} />
      <Stack.Screen name="Cámara" component={CameraScreen} />
    </Stack.Navigator>
  );
};
