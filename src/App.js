import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import Root from './Root';
import appStore from './store';

const initialState = {
  issues: {
    items: [],
    totalCount: 0
  }
};

const { store, persistor } = appStore(initialState);

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Root />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
