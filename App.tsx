import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from './src/context/theme/ThemeContext';
import Router from './src/routes/Router';
import {PermissionsProvider} from './src/context/location/PermissionContext';

const ThemeState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

const PermissionState = ({children}: any) => {
  return <PermissionsProvider>{children}</PermissionsProvider>;
};

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ThemeState>
        <PermissionState>
          <Router />
        </PermissionState>
      </ThemeState>
    </SafeAreaView>
  );
}

export default App;
