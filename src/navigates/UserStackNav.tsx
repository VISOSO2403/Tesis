import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {CameraScreen, HomeScreen} from '../screens';

const Stack = createStackNavigator();

export const UserStackNav = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTransparent: true,
      }}>
      <Stack.Screen name="Inicio" component={HomeScreen} />
      <Stack.Screen name="Camera" component={CameraScreen} />
    </Stack.Navigator>
  );
};
