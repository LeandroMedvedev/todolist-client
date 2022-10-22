import { extendTheme, theme as ChakraTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    white: {
      0: '#FFFFFF',
    },
    gray: {
      0: '#F5F5F5',
      25: '#F5FFED',
      50: '#F2F2F2',
      100: '#EFF0EB',
      200: '#9E9EA7',
      150: '#BDBDBD',
      300: '#828282',
      500: '#1A2B34',
      600: '#080F12',
      700: '#20232A',
      900: '#111111',
    },
    red: {
      400: '#EB5757',
      450: '#E33030',
      500: '#E60000',
      800: '#830000',
      900: '#4F0202',
    },

    green: {
      0: '#EAF7F0',
      50: '#93D7AF',
      100: '#16E32D',
      200: '#16E379',
      400: '#27AE60',
      500: '#116061',
      550: '#219653',
      600: '#168821',
      800: '#2F4538',
    },
    blue: {
      400: '#2B78C1',
      500: '#155BCB',
      600: '#2E94FC',
      100: '#5BD9C2',
      150: '#6ADBFB',
      200: '#98D9D5',
      450: '#082947',
      900: '#03031B',
      920: '#03032F',
    },
    purple: {
      900: '#161122',
    },
  },
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Roboto, sans-serif',
  },
  fontSizes: {
    xs: '0.8rem',
    sm: '0.9rem',
    md: '1rem',
    lg: '1.1rem',
    xl: '1.375rem',
    '2xl': '1.625rem',
    '3xl': '1.875rem',
    '4xl': '2rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.600',
      },
    },
  },
  breakpoints: {
    sm: '320px',
    md: '640px',
    lg: '768px',
    xl: '1200px',
  },
});
