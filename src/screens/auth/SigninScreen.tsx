import {View, Text, Dimensions} from 'react-native';
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
import {TouchableOpacity} from 'react-native-gesture-handler';
import {globalTheme} from '../../theme/globalTheme';
import {ThemeContext} from '../../context/theme/ThemeContext';
import {PropsAuth} from './LoginGoogleScreen';

const SigninScreen = ({navigation}: PropsAuth) => {
  const {
    theme: {colors, textButton},
  } = useContext(ThemeContext);

  return (
    <ContainerComponent isScrool>
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
          value={''}
          placeholder="Usuario"
          type="default"
          onChange={() => {}}
        />

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

        <InputComponent
          value={''}
          placeholder="Confirmar Contraseña"
          type="default"
          isSecure
          onChange={() => {}}
        />

        <RowComponent styles={{justifyContent: 'space-between'}}>
          <TouchableOpacity>
            <TextComponent text="¿Ya tienes una cuenta?" color={colors.text} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
            <TextComponent
              text="Ingresar"
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
            text="Registrar"
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

export default SigninScreen;
