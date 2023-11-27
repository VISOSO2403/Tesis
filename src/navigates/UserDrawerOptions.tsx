import {View, Image} from 'react-native';
import React, {useContext} from 'react';
import {
  DrawerContentComponentProps,
  DrawerItemList,
} from '@react-navigation/drawer';
import {ThemeContext} from '../context/theme/ThemeContext';
import {IconComponent, RowComponent, TextComponent} from '../components';
import useAuth from '../hooks/auth/useAuth';

export const UserDrawerOptions = (props: DrawerContentComponentProps) => {
  const {handleSignOut} = useAuth();

  const {
    theme: {colors, dividerColor},
  } = useContext(ThemeContext);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          height: 200,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottomWidth: 1,
          borderBottomColor: dividerColor,
        }}>
        <Image
          source={require('../assets/images/hero-image.png')}
          style={{height: 130, width: 130, borderRadius: 65}}
        />
        <TextComponent text="Oliver Visoso" size={22} font="bold" />
      </View>

      <View style={{flex: 1, padding: 10}}>
        <DrawerItemList {...props} />
      </View>

      <View
        style={{
          padding: 10,
          borderTopWidth: 1,
          bottom: 0,
          borderTopColor: dividerColor,
          backgroundColor: colors.background,
        }}>
        <RowComponent onPress={() => handleSignOut()}>
          <IconComponent
            iconName="log-out-outline"
            iconSize={24}
            iconColor={colors.text}
          />
          <TextComponent text=" Cerrar sesión" color={colors.text} size={13} />
        </RowComponent>
      </View>
    </View>
  );
};
