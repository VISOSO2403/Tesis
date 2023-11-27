import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {
  useCameraPermission,
  useCameraDevice,
  useCodeScanner,
  Camera,
  Code,
} from 'react-native-vision-camera';
import {FabComponent} from '../components';
import {PropsNavigate} from './HomeScreen';

const CameraScreen = ({navigation}: PropsNavigate) => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('back');

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes: Code[]) => {
      console.log(`Scanned ${codes[0].value} codes!`);
    },
  });

  useEffect(() => {
    requestPermission();
  }, []);

  if (device == null) {
    return (
      <View style={{flex: 1}}>
        <Text> Error: No se detecto la cámara</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <FabComponent iconName="arrow-back" onPress={() => navigation.goBack()} />
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={true}
        codeScanner={codeScanner}
      />
    </View>
  );
};

export default CameraScreen;
