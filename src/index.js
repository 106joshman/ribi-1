import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { store, persistor } from "./redux/store";
import 'tw-elements';
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import App from './App';

ReactDOM.render(
  <Provider store={store}>
  <PersistGate loading={null} persistor={persistor}>
    <App />
  </PersistGate>
</Provider>,
  document.getElementById('root')
);
