import { DefaultTheme } from '@react-navigation/native';

export const lightTheme = {
    ...DefaultTheme,
    dark: false,
    colors: {
        primary: '#52a8dd',  // Keeping the same primary color
        background: '#ffffff',  // Light background
        card: '#f5f5f5',
        text: '#000000',
        border: '#dddddd',
    },
};
