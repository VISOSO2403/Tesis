import {View, Text, Switch, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useContext, useState} from 'react';
import {
  ContainerComponent,
  FabComponent,
  IconComponent,
  InputComponent,
  RowComponent,
  SectionComponent,
  TextComponent,
} from '../components';
import {PropsNavigate} from './HomeScreen';
import {ThemeContext} from '../context/theme/ThemeContext';
import {styles} from '../components/LogoComponent';

const SettingsScreen = ({navigation}: PropsNavigate) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const {
    setDarkTheme,
    setLightTheme,
    theme: {colors, currentTheme, placeholderColor},
  } = useContext(ThemeContext);

  const setTheme = () => {
    currentTheme === 'dark' ? setLightTheme() : setDarkTheme();
  };

  return (
    <View style={{flex: 1}}>
      <FabComponent
        iconName="arrow-back"
        styles={{top: 20, left: 20}}
        onPress={() => navigation.goBack()}
      />

      <View style={{top: 30, alignItems: 'center'}}>
        <TextComponent text="Ajustes" size={30} font="bold" />
      </View>

      <ContainerComponent styles={{top: 80}}>
        {/* Sección para cambiar los datos del usuario */}
        <TouchableOpacity
          style={{
            ...stylesSettings.container,
            backgroundColor: colors.primary,
          }}>
          <View style={{flex: 1}}>
            <TextComponent text="Nombre:" font="bold" />
            <TextComponent text="Oliver Visoso Flores" />
          </View>
          <IconComponent iconName="chevron-forward" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.8}
          style={{
            ...stylesSettings.container,
            backgroundColor: colors.primary,
          }}>
          <View style={{flex: 1}}>
            <TextComponent text="Correo electrónico" font="bold" />
            <TextComponent text="olivervisoso@gmail.com" />
          </View>
          <IconComponent iconName="chevron-forward" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {}}
          activeOpacity={0.8}
          style={{
            ...stylesSettings.container,
            backgroundColor: colors.primary,
          }}>
          <View style={{flex: 1}}>
            <TextComponent text="Teléfono" font="bold" />
            <TextComponent text="" />
          </View>
          <IconComponent iconName="chevron-forward" />
        </TouchableOpacity>

        {/* Sección para cambiar el tema de color  */}
        <SectionComponent
          styles={{
            ...stylesSettings.container,
            backgroundColor: colors.primary,
          }}>
          <View
            style={{
              flex: 1,
            }}>
            <TextComponent text="Tema:" font="bold" />
          </View>
          <Switch
            trackColor={{false: colors.card, true: colors.text}}
            thumbColor={isEnabled ? '' : ''}
            onValueChange={setTheme}
            value={isEnabled}
          />
        </SectionComponent>

        <SectionComponent
          styles={{
            ...stylesSettings.container,
            backgroundColor: colors.primary,
          }}>
          <View style={{flex: 1}}>
            <TextComponent text="Borrar cuenta" font="bold" />
          </View>
          <IconComponent iconName="chevron-forward" />
        </SectionComponent>
      </ContainerComponent>
    </View>
  );
};

export const stylesSettings = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    marginBottom: 10,
  },
});

export default SettingsScreen;
