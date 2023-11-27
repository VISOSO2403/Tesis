import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {
  ContainerComponent,
  FabComponent,
  IconComponent,
  RowComponent,
  SectionComponent,
  TextComponent,
} from '../components';
import {PropsNavigate} from './HomeScreen';
import {globalTheme} from '../theme/globalTheme';
import {ThemeContext} from '../context/theme/ThemeContext';

const WalletScreen = ({navigation}: PropsNavigate) => {
  const {
    theme: {colors, textButton},
  } = useContext(ThemeContext);

  return (
    <View style={{flex: 1}}>
      <FabComponent
        iconName="arrow-back"
        onPress={() => navigation.openDrawer()}
      />
      <ContainerComponent>
        <View style={{top: 30, alignItems: 'center'}}>
          <TextComponent text="Métodos de pago" size={30} font="bold" />
        </View>

        <View style={{flex: 1, top: 90}}>
          <SectionComponent>
            <RowComponent
              styles={{
                ...globalTheme.buttons,
                backgroundColor: colors.primary,
              }}
              onPress={() => {}}>
              <IconComponent iconName="card-outline" />
              <TextComponent
                text=" Agregar tarjeta"
                size={20}
                color={textButton}
                font="bold"
              />
            </RowComponent>
          </SectionComponent>

          <SectionComponent>
            <RowComponent
              styles={{
                ...globalTheme.buttons,
                backgroundColor: colors.primary,
              }}
              onPress={() => {}}>
              <IconComponent iconName="logo-paypal" />
              <TextComponent
                text=" Pagar con paypal"
                size={20}
                color={textButton}
                font="bold"
              />
            </RowComponent>
          </SectionComponent>

          <SectionComponent>
            <RowComponent
              styles={{
                ...globalTheme.buttons,
                backgroundColor: colors.primary,
              }}
              onPress={() => {}}>
              <IconComponent iconName="logo-google-playstore" />
              <TextComponent
                text=" Google play credit"
                size={20}
                color={textButton}
                font="bold"
              />
            </RowComponent>
          </SectionComponent>
        </View>
      </ContainerComponent>
    </View>
  );
};

export default WalletScreen;
