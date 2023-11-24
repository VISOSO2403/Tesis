import React, {ReactNode} from 'react';
import {View, StyleProp, ViewStyle, ScrollView, StyleSheet} from 'react-native';

interface Props {
  children: ReactNode;
  isScrool?: boolean;
  styles?: StyleProp<ViewStyle>;
}

const ContainerComponent = (props: Props) => {
  const {children, isScrool, styles} = props;

  return isScrool ? (
    <ScrollView style={[stylesCont.container, styles]}>{children}</ScrollView>
  ) : (
    <View style={[stylesCont.container, styles]}>{children}</View>
  );
};

export const stylesCont = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
});

export default ContainerComponent;
