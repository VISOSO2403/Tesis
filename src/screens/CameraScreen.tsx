import {View, Text, StyleSheet, Alert} from 'react-native';
import React, {useCallback, useEffect} from 'react';
import {
  useCameraPermission,
  useCameraDevice,
  useCodeScanner,
  Camera,
  Code,
} from 'react-native-vision-camera';
import {FabComponent, LoadingComponent, TextComponent} from '../components';
import {PropsAuth} from './auth/LoginGoogleScreen';

const CameraScreen = ({navigation}: PropsAuth) => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const devices = useCameraDevice('back');

  useEffect(() => {
    checkPermission();
  }, []);

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes: Code[]) => {
      console.log(`Scanned ${codes[0].value} codes!`);
    },
  });

  const checkPermission = async () => {
    const newCameraPermission = await Camera.requestCameraPermission();
    if (newCameraPermission == null) {
      Alert.alert('Error', 'Cámara no encontrada');
    }
  };
  if (devices == null) {
    return <LoadingComponent size={30} />;
  }

  return (
    <View style={{flex: 1}}>
      <FabComponent
        iconName="close"
        styles={{top: 20, left: 16, zIndex: 100}}
        onPress={() => navigation.popToTop()}
      />
      <View
        style={{
          top: 30,
          alignItems: 'center',
          zIndex: 99,
        }}>
        <TextComponent text="Escanea" size={30} font="bold" />
      </View>

      <Camera
        style={StyleSheet.absoluteFill}
        device={devices}
        isActive={true}
        codeScanner={codeScanner}
      />

      <FabComponent
        iconName="flashlight"
        onPress={() => {}}
        styles={{bottom: 20, right: 20}}
      />
    </View>
  );
};

export default CameraScreen;
