import React from 'react';
import {Provider} from 'react-redux';
import store from './Store';
import Home from './Components/Home';

const App = () => (
  <Provider store={store}>
    <Home />
  </Provider>
);

export default App;