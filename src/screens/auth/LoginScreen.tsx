import {View, Dimensions, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import {
  ContainerComponent,
  FabComponent,
  InputComponent,
  LoadingComponent,
  LogoComponent,
  RowComponent,
  SectionComponent,
  TextComponent,
} from '../../components';
import {PropsAuth} from './LoginGoogleScreen';
import {ThemeContext} from '../../context/theme/ThemeContext';
import {globalTheme} from '../../theme/globalTheme';
import useAuth from '../../hooks/auth/useAuth';

const LoginScreen = ({navigation}: PropsAuth) => {
  const {
    theme: {colors, textButton},
  } = useContext(ThemeContext);

  const {
    email,
    setEmail,
    password,
    setPassword,
    changeLoading,
    handleSigInWithEmail,
  } = useAuth();

  return (
    <View style={{flex: 1}}>
      <FabComponent
        iconName="arrow-back"
        onPress={() => navigation.goBack()}
        styles={{top: 20, left: 16}}
      />
      <ContainerComponent isScroll>
        <View style={{marginTop: Dimensions.get('window').height * 0.15}}>
          <LogoComponent />
        </View>

        <SectionComponent>
          <TextComponent
            text="Ingresar"
            styles={{fontWeight: '700'}}
            size={28}
          />
          <TextComponent text="Bienvenido a travel B" />
        </SectionComponent>

        <SectionComponent>
          <InputComponent
            value={email}
            placeholder="Correo electrónico"
            type="email-address"
            onChange={val => setEmail(val)}
          />

          <InputComponent
            value={password}
            placeholder="Contraseña"
            type="default"
            isSecure
            onChange={val => setPassword(val)}
          />

          <RowComponent styles={{justifyContent: 'space-between'}}>
            <TouchableOpacity onPress={() => navigation.navigate('CreateUser')}>
              <TextComponent
                text="Registrarse"
                color={colors.border}
                styles={{textDecorationLine: 'underline'}}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
              <TextComponent
                text="¿Olvidaste tu contraseña?"
                color={colors.border}
                styles={{textDecorationLine: 'underline'}}
              />
            </TouchableOpacity>
          </RowComponent>
        </SectionComponent>

        <SectionComponent styles={globalTheme.buttons}>
          {changeLoading ? (
            <LoadingComponent size={30} />
          ) : (
            <RowComponent
              styles={{
                ...globalTheme.buttons,
                backgroundColor: colors.primary,
              }}
              onPress={() => handleSigInWithEmail()}>
              <TextComponent
                text="Ingresar"
                size={20}
                color={textButton}
                font="bold"
              />
            </RowComponent>
          )}
        </SectionComponent>
      </ContainerComponent>
    </View>
  );
};

export default LoginScreen;
