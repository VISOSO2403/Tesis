import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/theme/ThemeContext';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
  iconName: any;
  iconSize?: number;
  iconColor?: string;
}

const IconComponent = (props: Props) => {
  const {iconName, iconSize, iconColor} = props;

  const {
    theme: {textButton},
  } = useContext(ThemeContext);

  return (
    <Icon
      name={iconName}
      size={iconSize ?? 24}
      color={iconColor ?? textButton}
    />
  );
};

export default IconComponent;
