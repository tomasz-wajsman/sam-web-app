import React, { useState, useEffect } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import store from './store';

import Root from './Root';

const App = () => { 
  return (
    <ReduxProvider store={store}>
      <Root />
    </ReduxProvider>
  );
}

export default App;
