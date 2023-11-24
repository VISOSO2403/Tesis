import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'set_light_theme'} | {type: 'set_dark_theme'};

export interface ThemeState extends Theme {
  currentTheme: 'ligth' | 'dark';
  dividerColor: string;
  placeholderColor: string;
  textButton: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'ligth',
  dark: false,
  dividerColor: 'rgba(0,0,0,0.4)',
  placeholderColor: 'rgba(0.0.0.0.5)',
  textButton: 'white',
  colors: {
    primary: '#16A085', //color de botones
    background: '#E9E9E9', //color del fondo
    card: '#FFFFFF',
    text: 'black', //color del texto
    border: '#C9C9C9',
    notification: '#FF4081',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'rgba(0,0,0,0.4)',
  placeholderColor: 'rgba(255,255,255,0.5)',
  textButton: '#121212',
  colors: {
    primary: '#FFC107',
    background: '#121212',
    card: '#424242',
    text: 'white',
    border: '#BDBDBD',
    notification: '#FF80AB',
  },
};

export const themeReducer = (
  state: ThemeState,
  action: ThemeAction,
): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {
        ...lightTheme,
      };
    case 'set_dark_theme':
      return {
        ...darkTheme,
      };

    default:
      return state;
  }
};
