import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import {
  useCameraPermission,
  useCameraDevice,
  useCodeScanner,
  Camera,
  Code,
} from 'react-native-vision-camera';

const CameraScreen = () => {
  const {hasPermission, requestPermission} = useCameraPermission();
  const device = useCameraDevice('back');

  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: (codes: Code[]) => {
      console.log(`Scanned ${codes[0].value} codes!`);
    },
  });

  if (device == null) {
    return (
      <View style={{flex: 1}}>
        <Text> Error: No se detecto la camara</Text>
      </View>
    );
  }

  return (
    <Camera
      style={StyleSheet.absoluteFill}
      device={device}
      isActive={true}
      codeScanner={codeScanner}
    />
  );
};

export default CameraScreen;
