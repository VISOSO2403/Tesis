import {View, Text, StyleProp, ViewStyle} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/theme/ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  iconName: any;
  iconSize?: number;
  iconColor?: string;
  styles?: StyleProp<ViewStyle>;
}

const IconComponent = (props: Props) => {
  const {iconName, iconSize, iconColor, styles} = props;

  const {
    theme: {textButton},
  } = useContext(ThemeContext);

  return (
    <View style={styles}>
      <Icon
        name={iconName}
        size={iconSize ?? 24}
        color={iconColor ?? textButton}
      />
    </View>
  );
};

export default IconComponent;
