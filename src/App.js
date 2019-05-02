import React from 'react';

import { AppProvider } from './store/AppContext';
import AppReducer from './store/reducers/AppReducer';

import Home from './components/pages/Home';

//eslint-disable-next-line
const initialState = {};

const App = () => {
  return (
    <AppProvider initialState={initialState} reducer={AppReducer}>
      <Home />
    </AppProvider>
  );
};
export default App;
