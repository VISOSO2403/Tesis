import React, {ReactNode} from 'react';
import {View, StyleProp, ViewStyle, ScrollView, StyleSheet} from 'react-native';

interface Props {
  children: ReactNode;
  isScroll?: boolean;
  styles?: StyleProp<ViewStyle>;
}

const ContainerComponent = (props: Props) => {
  const {children, isScroll, styles} = props;

  return isScroll ? (
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
