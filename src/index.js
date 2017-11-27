import React from 'react';
import { Provider } from 'react-redux';

import 'config/reactotron';

import { store } from 'config/redux';
import Route from 'config/routes';

const App = () => (
  <Provider store={store}>
    <Route />
  </Provider>
);

export default App;
