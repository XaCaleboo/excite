import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Services from './components/Services';
import Why from './components/Why';
import Portfolio from './components/Portfolio';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { indigo, blue, pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: indigo[600],
      main: indigo[800],
      dark: indigo[900],
      contrastText: '#fff',
    },
    secondary: {
      light: blue[200],
      main: blue[400],
      dark: blue[600],
      contrastText: '#fff',
    },
    error: {
      light: pink[200],
      main: pink[400],
      dark: pink[600],
      contrastText: '#fff',
    },
  },
  typography: {
    h1: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    h4: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    h5: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    },
    h6: {
      fontFamily: '"Montserrat", "Helvetica", "Arial", sans-serif',
      fontWeight: 700,
    }
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <About />
      <Services />
      <Why />
      <Portfolio />
      <Contacts />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
