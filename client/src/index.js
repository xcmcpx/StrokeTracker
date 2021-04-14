import React from 'react';
import ReactDOM from 'react-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import App from './App';

import './index.css'

const cpcTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#2A3D45'
    },
    secondary: {
      main: '#D7D2CC',
      light: '#B9C5C7',
      dark: '#A08C7D'
    },
    error: {
      main: '#B3504B',
      dark: '#90403C'
    },
    success: {
      main: '#93AC5D',
      dark: '#3A4323'
    }
    // primary: {
    //   main: '#388e3c',
    //   light: '#6abf69',
    //   dark: '#00600f',
    //   darker: '#032709'
    // },
    // secondary: {
    //   dark: '#00363a',
    //   main: '#006064',
    //   light: '#428e92',
    //   lighter: '#99bfc1'
    // }
  },
  typography: {
    fontFamily: [
      'Nixie One', 'Arial', 'sans-serif'
    ],
    fontWeightRegular: 'bold',
    fontWeightLight: 'bold',
    fontWeightMedium: 'bold',
    fontWeightBold: 'bolder',
    h1: {
      color: '#2A3D45'
    },
    h2: {
      color: '#2A3D45'
    },
    h3: {
      color: '#2A3D45'
    },
    h4: {
      color: 'black'
    },
    h5: {
      color: '#2A3D45'
    },
    h6: {
      color: '#2A3D45'
    },
    subtitle1: {
      color: '#2A3D45'
    },
    subtitle2: {
      color: '#2A3D45'
    },
    body1: {
      color: '#2A3D45',
    },
    body2: {
      color: '#2A3D45'
    },
    button: {
      color: '#90403C'
    }
  },
});

ReactDOM.render(
  <ThemeProvider theme={cpcTheme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById('root')
);

