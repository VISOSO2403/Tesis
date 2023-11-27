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
import {TouchableOpacity} from 'react-native-gesture-handler';
import {globalTheme} from '../../theme/globalTheme';
import {ThemeContext} from '../../context/theme/ThemeContext';
import {PropsAuth} from './LoginGoogleScreen';
import useAuth from '../../hooks/auth/useAuth';

const CreateUserScreen = ({navigation}: PropsAuth) => {
  const {
    theme: {colors, textButton},
  } = useContext(ThemeContext);

  const {
    email,
    setEmail,
    password,
    setPassword,
    confirmPass,
    setConfirmPass,
    changeLoading,
    handleCreateUserWithEmail,
  } = useAuth();

  return (
    <View style={{flex: 1}}>
      <FabComponent iconName="arrow-back" onPress={() => navigation.goBack()} />
      <ContainerComponent isScroll>
        <View style={{marginTop: Dimensions.get('window').height * 0.15}}>
          <LogoComponent />
        </View>

        <SectionComponent>
          <TextComponent
            text="Registrarse"
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

          <InputComponent
            value={confirmPass}
            placeholder="Confirmar Contraseña"
            type="default"
            isSecure
            onChange={val => setConfirmPass(val)}
          />

          <RowComponent styles={{justifyContent: 'space-between'}}>
            <TouchableOpacity>
              <TextComponent
                text="¿Ya tienes una cuenta?"
                color={colors.text}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('LoginEmail')}>
              <TextComponent
                text="Ingresar"
                color={colors.primary}
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
              onPress={() => handleCreateUserWithEmail()}>
              <TextComponent
                text="Registrar"
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

export default CreateUserScreen;
