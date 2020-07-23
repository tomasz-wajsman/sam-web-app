import React, { useState, useEffect } from 'react';
import { Provider as ReduxProvider } from 'react-redux';

import store from './store';

import SamClient from './clients/sam';
import config from './config/config.json';
import Root from './Root';

const client = new SamClient(config.api_url);

const App = () => { 
  return (
    <ReduxProvider store={store}>
      <Root />
    </ReduxProvider>
  );
}

export default App;
