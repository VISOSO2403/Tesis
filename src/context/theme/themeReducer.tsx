import {Theme} from '@react-navigation/native';

type ThemeAction = {type: 'set_light_theme'} | {type: 'set_dark_theme'};

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: string;
  placeholderColor: string;
  textButton: string;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'rgba(0,0,0,0.4)',
  placeholderColor: 'rgba(0.0.0.0.5)',
  textButton: 'white',
  colors: {
    primary: '#16A085', //color de botones
    background: '#1A73E8', //color del fondo
    card: '#FFFFFF',
    text: 'white', //color del texto
    border: '#FFCA28',
    notification: '#FF4081',
  },
};

export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'rgba(0,0,0,0.4)',
  placeholderColor: 'rgba(255,255,255,0.5)',
  textButton: 'white',
  colors: {
    primary: '#1B3A57',
    background: '#112537', //Fondo oscuro
    card: '#424242',
    text: 'white',
    border: '#1A73E8', // Contraste para texto link
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
