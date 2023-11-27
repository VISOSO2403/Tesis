import {View, Text} from 'react-native';
import React from 'react';
import {
  ContainerComponent,
  FabComponent,
  SectionComponent,
  TextComponent,
} from '../components';
import {PropsNavigate} from './HomeScreen';

const RecordScreen = ({navigation}: PropsNavigate) => {
  return (
    <View style={{flex: 1}}>
      <FabComponent
        iconName="arrow-back"
        onPress={() => navigation.openDrawer()}
      />
      <ContainerComponent>
        <View style={{top: 30, alignItems: 'center'}}>
          <TextComponent text="Historial" size={30} font="bold" />
        </View>

        <View style={{flex: 1, top: 90}}>
          {/* Agregar condicional si se detecta datos en el historial */}
          {/* {
            data.historial ? return jsx : return jsx
          } */}

          <SectionComponent styles={{alignItems: 'center'}}>
            <TextComponent text="Sin viajes" size={22} font="500" />
            <TextComponent text="Una vez que realices un viaje con TravelB, lo veras aquí" />
          </SectionComponent>
        </View>
      </ContainerComponent>
    </View>
  );
};

export default RecordScreen;
