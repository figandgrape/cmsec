import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import IndexPage from './App';
import { ChakraProvider, extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f5fee5',
      100: '#e1fbb2',
      200: '#cdf781',
      300: '#b8ee56',
      400: '#a2e032',
      500: '#8ac919',
      600: '#71ab09',
      700: '#578602',
      800: '#3c5e00',
      900: '#203300',
    },
  },
  fonts: {
    heading: `Montserrat, ${base.fonts?.heading}`,
    body: `Inter, ${base.fonts?.heading}`,
    footer: `Montserrat, ${base.fonts?.footer}`
  },
  config: {
    initialColorMode: 'dark'
  },

});
export default theme;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <IndexPage />
    </ChakraProvider>
  </React.StrictMode>
);
