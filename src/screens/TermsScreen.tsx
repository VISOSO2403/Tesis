import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {
  ContainerComponent,
  FabComponent,
  SectionComponent,
  TextComponent,
} from '../components';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {PropsAuth} from './auth/LoginGoogleScreen';

const TermsScreen = ({navigation}: PropsAuth) => {
  const {top} = useSafeAreaInsets();

  return (
    <View style={{flex: 1}}>
      <FabComponent
        iconName="arrow-back"
        styles={{top: 20, left: 20}}
        onPress={() => navigation.goBack()}
      />

      <ContainerComponent isScroll>
        <View style={{top: 30, alignItems: 'center'}}>
          <TextComponent text="Términos y condiciones" size={22} font="bold" />
        </View>
        <SectionComponent styles={{flex: 1, top: 50}}>
          <TextComponent
            styles={stylesTerms.text}
            text="Bienvenido/a a la aplicación Travel B para renta de scooters y
            bicicletas eléctricas. Antes de utilizar nuestros servicios, por
            favor lee cuidadosamente estos términos y condiciones que rigen tu
            uso de nuestra aplicación. Al utilizar nuestros servicios, aceptas
            estar sujeto a estos términos y condiciones."
          />

          <TextComponent
            text="Servicio"
            styles={{...stylesTerms.title, marginTop: 10}}
            size={20}
            font="bold"
          />
          <TextComponent
            styles={stylesTerms.text}
            text="Travel B es una aplicación que permite a los usuarios rentar
            scooters y bicicletas eléctricas de manera temporal. Al utilizar
            nuestra aplicación, aceptas que el uso de nuestros servicios es bajo
            tu propio riesgo. Travel B no se hace responsable por lesiones,
            daños o pérdidas de cualquier tipo que pudieran ocurrir durante el
            uso de nuestros servicios."
          />

          <TextComponent
            text="Cuenta"
            styles={stylesTerms.title}
            size={20}
            font="bold"
          />
          <TextComponent
            styles={stylesTerms.text}
            text="Para utilizar nuestra aplicación, deberás crear una cuenta con
            información precisa y actualizada. Travel B se reserva el derecho de
            cancelar cualquier cuenta que contenga información falsa o
            fraudulenta. Además, es tu responsabilidad mantener tu contraseña
            segura y protegida."
          />

          <TextComponent
            text="Pago"
            styles={stylesTerms.title}
            size={20}
            font="bold"
          />
          <TextComponent
            styles={stylesTerms.text}
            text="El costo de renta de nuestros scooters y bicicletas eléctricas se
            calcula por hora. Al rentar un vehículo, deberás proporcionar un
            método de pago válido y aceptar los cargos correspondientes. Travel
            B se reserva el derecho de cambiar las tarifas en cualquier momento
            y sin previo aviso."
          />

          <TextComponent
            text="Uso del vehículo"
            styles={stylesTerms.title}
            size={20}
            font="bold"
          />
          <TextComponent
            styles={stylesTerms.text}
            text="Al rentar un scooter o bicicleta eléctrica, aceptas que eres
            responsable del uso del vehículo. Deberás seguir las leyes de
            tráfico y asegurarte de utilizar el vehículo de manera segura y
            responsable. Travel B se reserva el derecho de cancelar la renta de
            un vehículo en caso de uso inapropiado o peligroso."
          />

          <TextComponent
            text="Daños o perdidas"
            styles={stylesTerms.title}
            size={20}
            font="bold"
          />
          <TextComponent
            styles={stylesTerms.text}
            text="Si durante el uso del vehículo éste sufre algún daño o pérdida,
            serás responsable de cubrir los costos de reparación o reemplazo.
            Travel B se reserva el derecho de determinar los costos de
            reparación o reemplazo."
          />

          <TextComponent
            text="Cancelación"
            styles={stylesTerms.title}
            size={20}
            font="bold"
          />
          <TextComponent
            styles={stylesTerms.text}
            text="Si decides cancelar tu renta antes de tiempo, se te cobrará una
            tarifa correspondiente al tiempo que utilizaste el vehículo. Travel
            B se reserva el derecho de cancelar una renta en caso de que el
            usuario viole estos términos y condiciones."
          />

          <TextComponent
            text="Modificaciones"
            styles={stylesTerms.title}
            size={20}
            font="bold"
          />
          <TextComponent
            styles={stylesTerms.text}
            text="Travel B se reserva el derecho de modificar estos términos y
            condiciones en cualquier momento y sin previo aviso. Cualquier
            modificación entrará en vigencia inmediatamente después de su
            publicación en la aplicación."
          />

          <TextComponent
            styles={{
              ...stylesTerms.text,
              marginVertical: 20,
              paddingBottom: 20,
            }}
            text="Al utilizar la aplicación Travel B, aceptas estos términos y
            condiciones en su totalidad. Si no estás de acuerdo con ellos, por
            favor no utilices nuestros servicios."
          />

          <View style={{height: 100}} />
        </SectionComponent>
      </ContainerComponent>
    </View>
  );
};

const stylesTerms = StyleSheet.create({
  title: {
    textAlign: 'auto',
    marginBottom: 5,
  },
  text: {
    textAlign: 'justify',
  },
});

export default TermsScreen;
