import React, {useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {ThemeContext} from '../context/theme/ThemeContext';
import {AuthStackNav} from '../navigates/AuthStackNav';

const Router = () => {
  const {theme} = useContext(ThemeContext);

  return (
    <NavigationContainer theme={theme}>
      <AuthStackNav />
    </NavigationContainer>
  );
};

export default Router;
