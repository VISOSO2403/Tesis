import React, {useContext} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {
  HelpScreen,
  RecordScreen,
  SettingsScreen,
  WalletScreen,
} from '../screens';
import {IconComponent} from '../components';
import {ThemeContext} from '../context/theme/ThemeContext';
import {UserStackNav} from './UserStackNav';

const Drawer = createDrawerNavigator();

export const UserDrawerNav = () => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: '#ACFDFF',
        drawerActiveTintColor: '#000',
        drawerInactiveBackgroundColor: colors.background,
        drawerLabelStyle: {
          marginLeft: -20,
          fontSize: 15,
          color: colors.text,
        },
      }}>
      <Drawer.Screen
        name="Home"
        options={{
          title: 'Inicio',
          drawerIcon: () => {
            return <IconComponent iconName="home" iconColor={colors.text} />;
          },
        }}
        component={UserStackNav}
      />
      <Drawer.Screen
        name="Wallet"
        options={{
          title: 'Método de pago',
          drawerIcon: () => {
            return <IconComponent iconName="wallet" iconColor={colors.text} />;
          },
        }}
        component={WalletScreen}
      />
      <Drawer.Screen
        name="Record"
        options={{
          title: 'Historial',
          drawerIcon: () => {
            return <IconComponent iconName="time" iconColor={colors.text} />;
          },
        }}
        component={RecordScreen}
      />
      <Drawer.Screen
        name="Help"
        options={{
          title: 'Soporte',
          drawerIcon: () => {
            return (
              <IconComponent iconName="help-circle" iconColor={colors.text} />
            );
          },
        }}
        component={HelpScreen}
      />
      <Drawer.Screen
        name="Settings"
        options={{
          title: 'Configuración',
          drawerIcon: () => {
            return (
              <IconComponent iconName="settings" iconColor={colors.text} />
            );
          },
        }}
        component={SettingsScreen}
      />
    </Drawer.Navigator>
  );
};
