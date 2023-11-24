import {View, Text, StyleProp, ViewStyle, StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';

const SectionComponent = ({
  children,
  styles,
}: {
  children: ReactNode;
  styles?: StyleProp<ViewStyle>;
}) => {
  return <View style={[stylesSec.section, styles]}>{children}</View>;
};

export const stylesSec = StyleSheet.create({
  section: {
    paddingBottom: 16,
  },
});

export default SectionComponent;
