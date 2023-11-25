import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from './src/context/theme/ThemeContext';
import Router from './src/routes/Router';

const ThemeState = ({children}: any) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ThemeState>
        <Router />
      </ThemeState>
    </SafeAreaView>
  );
}

export default App;
