import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {DrawerScreenProps} from '@react-navigation/drawer';
import {ThemeContext} from '../context/theme/ThemeContext';
import {FabComponent, IconComponent, TextComponent} from '../components';

export interface PropsNavigate extends DrawerScreenProps<any, any> {}

const HomeScreen = ({navigation}: PropsNavigate) => {
  const {
    theme: {colors, textButton},
  } = useContext(ThemeContext);

  return (
    <View style={{flex: 1}}>
      <FabComponent iconName="menu" onPress={() => navigation.openDrawer()} />

      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'white',
        }}>
        {/* <MapComponent /> */}
        <Text>Mapa</Text>
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        style={{
          ...stylesHome.scanButton,
          backgroundColor: colors.primary,
        }}
        onPress={() => navigation.navigate('Camera')}>
        <IconComponent
          iconName="scan-outline"
          iconColor={textButton}
          iconSize={90}
          styles={{top: 10}}
        />
        <TextComponent
          text="Escanea"
          color={textButton}
          styles={{bottom: 45}}
        />
      </TouchableOpacity>
    </View>
  );
};

export const stylesHome = StyleSheet.create({
  scanButton: {
    width: 90,
    aspectRatio: 1 / 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    zIndex: 100,
    position: 'absolute',
    bottom: 50,
    left: '50%',
    transform: [{translateX: -50}],

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});

export default HomeScreen;
