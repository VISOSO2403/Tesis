import {Text, StyleProp, TextStyle} from 'react-native';
import React, {useContext} from 'react';
import {ThemeContext} from '../context/theme/ThemeContext';

interface Props {
  text: string | any;
  color?: string;
  size?: number;
  flex?: number;
  styles?: StyleProp<TextStyle>;
  font?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined;
}

const TextComponent = (props: Props) => {
  const {text, color, size, flex, styles, font} = props;
  const {
    theme: {colors},
  } = useContext(ThemeContext);
  return (
    <Text
      style={[
        {
          color: color ?? colors.text,
          fontSize: size ?? 15,
          flex: flex ?? 0,
          fontWeight: font,
        },
        styles,
      ]}>
      {text}
    </Text>
  );
};

export default TextComponent;
