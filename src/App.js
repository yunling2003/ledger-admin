import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './Root';
import appStore from './store';

const initialState = {
  issues: {
    items: [],
    totalCount: 0
  }
};

const store = appStore(initialState);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Root />
      </Router>
    </Provider>
  );
}

export default App;
