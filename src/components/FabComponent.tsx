import {
  View,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
  TouchableOpacity,
} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/theme/ThemeContext';
import UserDrawerOptions from '../navigates/UserDrawerOptions';
import IconComponent from './IconComponent';

interface Props {
  iconName: string;
  iconSize?: number;
  onPress: () => void;
  background?: string;
  styles?: StyleProp<ViewStyle>;
}

const FabComponent = (props: Props) => {
  const {iconName, iconSize, onPress, background, styles} = props;

  const {
    theme: {colors, textButton},
  } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={{
        ...stylesFab.fabButton,
        backgroundColor: background ?? colors.primary,
      }}>
      <IconComponent
        iconName={iconName}
        iconColor={textButton}
        iconSize={iconSize ?? 25}
      />
    </TouchableOpacity>
  );
};

export const stylesFab = StyleSheet.create({
  fabButton: {
    width: 50,
    aspectRatio: 1 / 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
    zIndex: 100,
    position: 'absolute',
    top: 20,
    left: 20,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});

export default FabComponent;