import React, { useState, useEffect } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import store from './store';

import Root from './Root';
import { ThemeProvider } from '@material-ui/core';

import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ReduxProvider store={store}>
        <Root />
      </ReduxProvider>
    </ThemeProvider>
  );
}

export default App;
