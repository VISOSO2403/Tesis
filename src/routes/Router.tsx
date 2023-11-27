import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContext} from '../context/theme/ThemeContext';
import {AuthStackNav} from '../navigates/AuthStackNav';
import {UserStackNav} from '../navigates/UserStackNav';
import {UserDrawerNav} from '../navigates/UserDrawerNav';

const Router = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme}>
      <UserDrawerNav />
    </NavigationContainer>
  );
};

export default Router;
