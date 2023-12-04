import React, {ReactNode} from 'react';
import {
  View,
  Text,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface Props {
  children: ReactNode;
  styles?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

const RowComponent = (props: Props) => {
  const {children, styles, onPress} = props;

  return onPress ? (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[stylesRow.rowCenter, styles]}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  ) : (
    <View style={[stylesRow.rowCenter, styles]}>{children}</View>
  );
};

export const stylesRow = StyleSheet.create({
  rowCenter: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});

export default RowComponent;
