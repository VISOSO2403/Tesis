import React from 'react';
import {
  KeyboardTypeOptions,
  StyleProp,
  StyleSheet,
  TextInput,
  ViewStyle,
} from 'react-native';
import RowComponent from './RowComponent';

interface Props {
  value?: string;
  placeholder?: string;
  placeholderColor?: string;
  onChange: (val: string) => void;
  onEnd?: () => void;
  styles?: StyleProp<ViewStyle>;
  type?: KeyboardTypeOptions;
  isSecure?: boolean;
}

const InputComponent = (props: Props) => {
  const {
    value,
    placeholder,
    placeholderColor,
    onChange,
    onEnd,
    styles,
    type,
    isSecure,
  } = props;

  return (
    <RowComponent styles={[stylesInputs.inputContainer, styles]}>
      <TextInput
        keyboardType={type}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor ?? '#9DB2BF'}
        onChangeText={val => onChange(val)}
        style={[stylesInputs.input]}
        secureTextEntry={isSecure}
        autoCapitalize="none"
      />
    </RowComponent>
  );
};

export const stylesInputs = StyleSheet.create({
  inputContainer: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    backgroundColor: '#fafafa',
    borderRadius: 100,
    marginBottom: 16,
  },
  input: {
    flex: 1,
    margin: 0,
    padding: 0,
    color: 'black',
  },
});

export default InputComponent;
