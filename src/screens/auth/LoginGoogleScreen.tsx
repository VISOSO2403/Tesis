import {View, Text, Dimensions} from 'react-native';
import React, {useContext} from 'react';
import {
  ContainerComponent,
  IconComponent,
  LogoComponent,
  RowComponent,
  SectionComponent,
  TextComponent,
} from '../../components';
import {ThemeContext} from '../../context/theme/ThemeContext';
import {StackScreenProps} from '@react-navigation/stack';
import {globalTheme} from '../../theme/globalTheme';

export interface PropsAuth extends StackScreenProps<any, any> {}

const LoginGoogleScreen = ({navigation}: PropsAuth) => {
  const {
    theme: {colors, textButton},
  } = useContext(ThemeContext);

  return (
    <ContainerComponent isScroll>
      <View style={{marginTop: Dimensions.get('window').height * 0.15}}>
        <LogoComponent />
      </View>
      <SectionComponent>
        <TextComponent
          text="Iniciar sesión"
          styles={{fontWeight: '700'}}
          size={28}
        />

        <TextComponent text="Bienvenido a travel B" />
      </SectionComponent>

      <SectionComponent>
        <Text style={{fontSize: 16, textAlign: 'left', color: colors.text}}>
          Nuevos usuarios: al crear una cuenta en nuestra aplicación aceptas los{' '}
          <Text
            style={{color: colors.primary, textDecorationLine: 'underline'}}
            onPress={() => navigation.navigate('Terms')}>
            Términos y Condiciones
          </Text>{' '}
          de nuestros servicios
        </Text>

        <SectionComponent styles={{marginTop: 20}}>
          <RowComponent
            styles={{...globalTheme.buttons, backgroundColor: colors.primary}}
            onPress={() => {}}>
            <IconComponent iconName="logo-google" />
            <TextComponent
              text=" Continuar con Google"
              size={20}
              color={textButton}
              font="bold"
            />
          </RowComponent>
        </SectionComponent>

        <SectionComponent>
          <RowComponent
            styles={{...globalTheme.buttons, backgroundColor: colors.primary}}
            onPress={() => navigation.navigate('LoginEmail')}>
            <IconComponent iconName="mail-outline" />
            <TextComponent
              text=" Continuar con correo"
              size={20}
              color={textButton}
              font="bold"
            />
          </RowComponent>
        </SectionComponent>
      </SectionComponent>
    </ContainerComponent>
  );
};

export default LoginGoogleScreen;
