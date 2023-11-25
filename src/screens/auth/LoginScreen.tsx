import {
  View,
  Text,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import {
  ContainerComponent,
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

const LoginScreen = ({navigation}: PropsAuth) => {
  const {
    theme: {colors, textButton},
  } = useContext(ThemeContext);

  return (
    <ContainerComponent isScroll>
      <View style={{marginTop: Dimensions.get('window').height * 0.15}}>
        <LogoComponent />
      </View>

      <SectionComponent>
        <TextComponent text="Ingresar" styles={{fontWeight: '700'}} size={28} />
        <TextComponent text="Bienvenido a travel B" />
      </SectionComponent>

      <SectionComponent>
        <InputComponent
          value={''}
          placeholder="Correo electronico"
          type="email-address"
          onChange={() => {}}
        />

        <InputComponent
          value={''}
          placeholder="Contraseña"
          type="default"
          isSecure
          onChange={() => {}}
        />

        <RowComponent styles={{justifyContent: 'space-between'}}>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <TextComponent
              text="Registrarse"
              color={colors.primary}
              styles={{textDecorationLine: 'underline'}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Forget')}>
            <TextComponent
              text="¿Olvidaste tu contraseña?"
              color={colors.primary}
              styles={{textDecorationLine: 'underline'}}
            />
          </TouchableOpacity>
        </RowComponent>
      </SectionComponent>

      <SectionComponent styles={globalTheme.buttons}>
        {/* {ChangeLoading ? ( */}
        {/* <LoadingComponent size={30} /> */}
        {/* ) : ( */}
        <RowComponent
          styles={{
            ...globalTheme.buttons,
            backgroundColor: colors.primary,
          }}
          onPress={() => {}}>
          <TextComponent
            text="Ingresar"
            size={20}
            color={textButton}
            font="bold"
          />
        </RowComponent>
        {/* )} */}
      </SectionComponent>
    </ContainerComponent>
  );
};

export default LoginScreen;
