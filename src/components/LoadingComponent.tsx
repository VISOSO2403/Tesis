import {View, ActivityIndicator} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Props {
  size: number;
  color?: string;
}

const LoadingComponent = ({size, color}: Props) => {
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <ActivityIndicator size={size} color={color ?? colors.primary} />
    </View>
  );
};

export default LoadingComponent;
