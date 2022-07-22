import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import todoStore from './todoStore'
import { Provider } from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={todoStore}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
)