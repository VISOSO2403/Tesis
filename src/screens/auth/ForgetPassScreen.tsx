import {View, Dimensions} from 'react-native';
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
import {globalTheme} from '../../theme/globalTheme';
import {ThemeContext} from '../../context/theme/ThemeContext';
import useAuth from '../../hooks/auth/useAuth';
import {PropsAuth} from './LoginGoogleScreen';

const ForgetPassScreen = ({navigation}: PropsAuth) => {
  const {
    theme: {colors, textButton},
  } = useContext(ThemeContext);

  const {email, setEmail, changeLoading, handleForgetPassword} = useAuth();

  return (
    <View style={{flex: 1}}>
      <FabComponent iconName="arrow-back" onPress={() => navigation.goBack()} />
      <ContainerComponent isScroll>
        <View style={{marginTop: Dimensions.get('window').height * 0.15}}>
          <LogoComponent />
        </View>

        <SectionComponent>
          <TextComponent
            text="Olvidaste tu contraseña?"
            styles={{fontWeight: '700'}}
            size={28}
          />
          <TextComponent text="Recuperar contraseña" />
        </SectionComponent>

        <SectionComponent>
          <InputComponent
            value={email}
            placeholder="Correo electrónico"
            type="email-address"
            onChange={val => setEmail(val)}
          />
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
              onPress={() => handleForgetPassword()}>
              <TextComponent
                text="Enviar correo de recuperación"
                size={20}
                color={textButton}
                font="bold"
              />
            </RowComponent>
          )}
          <View style={{alignContent: 'center', alignItems: 'center', top: 10}}>
            <TextComponent text="Revisa tu carpeta de spam " />
          </View>
        </SectionComponent>
      </ContainerComponent>
    </View>
  );
};

export default ForgetPassScreen;
