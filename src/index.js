import React from 'react';
import ReactDOM from 'react-dom';
import IndexPage from './App';
import './index.css';
import './fonts/Fashion-Fetish-Bold.ttf';
import './fonts/Fashion-Fetish-Heavy.ttf';
import './fonts/Fashion-Fetish-Italic.ttf';
import './fonts/Fashion-Fetish-Light-Italic.ttf';
import './fonts/Fashion-Fetish-Outline.ttf';
import './fonts/Fashion-Fetish-Regular.ttf';
import './fonts/Fashion-Fetish-Small-Caps.ttf';
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
    heading: `Fashion-Fetish, ${base.fonts?.heading}`,
    body: `Fashion-Fetish, ${base.fonts?.heading}`,
    footer: `Fashion-Fetish, ${base.fonts?.footer}`
  },
  config: {
    initialColorMode: 'dark'
  },

});
export default theme;

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <IndexPage />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
