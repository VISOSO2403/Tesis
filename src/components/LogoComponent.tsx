import {Image, StyleSheet} from 'react-native';
import React from 'react';

import ContainerComponent from './ContainerComponent';
import TextComponent from './TextComponent';
import {ThemeContext} from '../context/theme/ThemeContext';

const LogoComponent = () => {
  const {
    theme: {colors},
  } = React.useContext(ThemeContext);

  return (
    <ContainerComponent styles={[styles.container]}>
      <Image
        source={require('../assets/images/TravelBLogo.png')}
        style={styles.logo}
      />
      <TextComponent
        text="Travel B"
        color={colors.text}
        size={20}
        styles={{
          fontFamily: 'Martel-Sans',
          fontWeight: 'bold',
        }}
      />
    </ContainerComponent>
  );
};

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    bottom: 70,
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default LogoComponent;
